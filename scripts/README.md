# Scripts Framework

This directory is a small framework for managing the build pipeline, code generation, testing, and CI workflows. It provides a structured, composable approach to complex build processes.

The `simplelogin-client` is much more a fancy build pipeline and OpenAPI spec rather than a TypeScript application. API endpoints are defined in [BOATS](https://j-d-carmichael.github.io/boats/#/), then rendered to OpenAPI Spec because the SimpleLogin repo does not provide this. The OpenAPI is then converted using the Docker Image of the openapi generator to create a TypeScript client with no additional runtime dependencies other than the runtime itself.

What steps have to happen is quite complex on the high-level, but the tasks and steps are readable and easily understandable.

## Framework Overview

The scripts framework follows a **task/step architecture** where:

- **Tasks** (`task/`) are high-level workflows that orchestrate multiple operations
- **Steps** (`steps/`) are atomic, reusable operations that perform a single responsibility
- **Tasks compose steps** to create complex workflows while keeping individual operations testable and maintainable

This separation enables:
- **Composability**: Tasks can call other tasks and steps
- **Reusability**: Steps can be used across multiple tasks
- **Maintainability**: Each unit has a clear, single responsibility
- **Flexibility**: New workflows can be assembled from existing building blocks

## Architecture

### Entry Point: `index.ts`

The main entry point that:
1. Enables colored output for better readability
2. Measures total execution time
3. Delegates to the task runner with command-line arguments

### Orchestrator: `run.ts`

The central dispatcher that:
1. Accepts a task or step name (case-insensitive)
2. Searches available tasks first, then steps
3. Executes the matched function with any provided parameters
4. Throws a descriptive error if no match is found

**Usage pattern:**
```typescript
await run('build');              // Runs the 'build' task
await run('format');             // Runs the 'format' step
await run('build', 'lint');      // Passes 'lint' as a parameter
```

### Tasks: `task/`

**Purpose**: High-level workflows that coordinate multiple operations.

**Structure**:
- One task per file
- Exports a `default` async function
- Can accept optional parameters
- Compose multiple steps and other tasks via `run()`

**Example pattern**:
```typescript
export default async (param?: string) => {
  await run('clean');
  await run('buildStep1');
  await run('buildStep2');
  await run(param || 'format');
};
```

### Steps: `steps/`

**Purpose**: Atomic operations that perform a single, well-defined task.

**Structure**:
- Export named async functions (can have multiple per file)
- Should be idempotent when possible
- Can return values for use in task orchestration
- All steps must be exported from `steps/index.ts`

**Example pattern**:
```typescript
export const myStep = async (config: Config) => {
  const result = await doSomething();
  return result;
};
```

### Utilities: `utils.ts`

**Purpose**: Shared helper functions used across tasks and steps.

**Categories**:
- **File system operations**: `exist()`, `createDirectoryIfNotExists()`, `deleteIfExists()`, `read()`, `save()`, `copy()`
- **Display helpers**: `sectionHeader()`, `stepHeader()`, `measureBuildTime()`
- **Build metadata**: `getPackageVersion()`, `getCommitHash()`

### Constants: `constants.ts`

**Purpose**: Centralized path constants and configuration values used throughout the framework.

## Design Principles

### 1. Separation of Concerns

**Tasks** orchestrate workflows. **Steps** perform atomic operations. This separation keeps code focused and testable.

### 2. Composability

Tasks and steps can freely compose each other through the `run()` orchestrator:

```typescript
// Task can call other tasks
export default async () => {
  await run('build', 'lint');
  await run('test');
};
```

### 3. Return Values for Chaining

Steps can return values that subsequent steps consume, enabling data flow through the pipeline:

```typescript
// Step returns a value
export const buildOAS = async () => {
  // ... build logic
  return pathToGeneratedSpec;
};

// Task uses the returned value
const oasPath = await buildOAS();
await buildSdk(oasPath);
```

### 4. Case-Insensitive Dispatch

The orchestrator matches task/step names case-insensitively for developer convenience. Prefer lowerCamelCase where possible.

```typescript
await run('build');    // ✓
await run('Build');    // ✓
await run('BUILD');    // ✓
```

### 5. Visual Feedback

Use section headers in tasks:

```typescript
console.log(sectionHeader('📦 Building Mock Server'));
```

Section headers should be written in title case.

And step headers in steps:

```typescript
console.log(stepHeader('Moving file'));
```

Section headers should be written in normal case.

## Working with the Framework

### Reading the Code

1. **Start with tasks**: Look in `task/` to understand high-level workflows
2. **Follow the flow**: Read tasks top-to-bottom to understand execution order
3. **Dive into steps**: When a step is called, check `steps/` for implementation details
4. **Check utilities**: Common operations are abstracted in `utils.ts`
5. **Trace data flow**: Notice return values from steps being passed to subsequent operations

### Adding a New Step

1. Create a new file in `steps/` or add to an existing file
2. Export a named async function
3. Add the export to `steps/index.ts`
4. Use utilities from `utils.ts` for common operations
5. Use `sectionHeader()` for visual feedback
6. Return values if other steps need them

```typescript
// steps/myNewStep.ts
import { sectionHeader } from '../utils';

export const myNewStep = async (input: string) => {
  console.log(sectionHeader('🔧 Running My New Step'));

  // Implementation
  const result = await performOperation(input);

  return result;
};
```

### Adding a New Task

1. Create a new file in `task/`
2. Export a `default` async function
3. Add a namespace export to `task/index.ts`
4. Compose existing steps and tasks using `run()`
5. Accept parameters if the task needs configuration

```typescript
// task/myNewTask.ts
import { run } from '../run';

export default async (mode: 'dev' | 'prod' = 'dev') => {
  await run('clean');
  await run('build', mode === 'prod' ? 'lint' : 'format');
  await run('test');
};
```

### Modifying Existing Workflows

1. **Identify the task**: Find the high-level task in `task/` that needs modification
2. **Understand dependencies**: Read through the task to see what steps it uses
3. **Modify or extend**: Either modify existing steps or add new ones
4. **Test the pipeline**: Run the task to ensure the workflow still works
5. **Consider reusability**: If adding new functionality, consider making it a separate step

## Best Practices

### Do's

- ✅ **Keep steps atomic**: One step should do one thing well
- ✅ **Make steps reusable**: Design steps to work in multiple contexts
- ✅ **Return meaningful values**: If a step produces data, return it
- ✅ **Use descriptive names**: Step and task names should be self-documenting
- ✅ **Provide visual feedback**: Use section headers to show progress
- ✅ **Leverage utilities**: Use shared utilities instead of duplicating code
- ✅ **Handle errors gracefully**: Let errors bubble up with context
- ✅ **Document complex logic**: Add comments for non-obvious behavior

### Don'ts

- ❌ **Don't mix concerns**: Keep tasks as orchestration, steps as implementation
- ❌ **Don't create deep nesting**: Keep task/step call chains shallow and readable
- ❌ **Don't duplicate logic**: Extract common operations into utilities or steps
- ❌ **Don't hardcode paths**: Use constants from `constants.ts`
- ❌ **Don't skip feedback**: Always inform the user what's happening
- ❌ **Don't swallow errors**: Let the orchestrator handle error propagation
- ❌ **Don't make steps stateful**: Steps should be idempotent when possible

## Execution Model

When you run `pnpm build`:

1. `package.json` calls `tsx scripts build`
2. `scripts/index.ts` measures time and calls `run('build')`
3. `run()` finds the `build` task in `task/build.ts`
4. Task executes, calling various steps via `run()`
5. Each step performs its atomic operation
6. Steps can return values consumed by subsequent steps
7. Total execution time is displayed

## Shell Integration

The framework uses [zx](https://google.github.io/zx/) for shell operations:

- `$` for shell commands: `` await $`docker build .` ``
- Template literals with automatic escaping
- Promise-based execution
- Automatic error handling
- Verbose mode enabled by default for transparency

## Common Patterns

### Conditional Execution

```typescript
export default async (mode?: 'dev' | 'prod') => {
  await run('build');

  if (mode === 'prod') {
    await run('lint');
    await run('test');
  }
};
```

### Parallel Execution

```typescript
await Promise.all([
  buildOAS(),
  buildDocs(),
]);
```

### Sequential with Data Flow

```typescript
const spec = await buildOAS();        // Step 1: Generate spec
await buildSdk(spec);                 // Step 2: Use spec to generate SDK
await run('format');                  // Step 3: Format generated code
await buildSrc();                     // Step 4: Compile TypeScript
```

### Error Recovery

```typescript
try {
  await run('build');
} catch (error) {
  await run('clean');
  throw error;
}
```

## Summary

This framework provides a structured, maintainable approach to build orchestration through:

- **Clear separation** between orchestration (tasks) and implementation (steps)
- **Composability** through the central `run()` dispatcher
- **Reusability** of atomic steps across multiple workflows
- **Flexibility** to create new workflows from existing building blocks
- **Transparency** through visual feedback and verbose shell output

When working with these scripts, think in terms of **composing workflows** from **reusable building blocks** rather than writing monolithic build scripts.