# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **code-generated TypeScript SDK** for the SimpleLogin API. The client code in `src/sdk/` and documentation in `dist/` are **entirely generated** and must never be edited directly. All changes happen through OpenAPI spec modifications in `oas/`.

## Development Workflow

### Package Manager
This project uses **pnpm** (version specified in package.json). Always use `pnpm` instead of npm.

### Common Commands

```bash
# Install dependencies
pnpm install

# Build everything (OAS spec → SDK → TypeScript compilation)
pnpm build

# Watch mode: rebuild on OAS file changes
pnpm dev

# Run tests
pnpm test

# Run single test file
pnpm test -- path/to/test.test.ts

# Linting and formatting
pnpm lint
pnpm format

# Clean generated files
pnpm clean

# Full rebuild (clean + build)
pnpm rebuild

# CI pipeline
pnpm ci

# Build documentation (TypeDoc + ReDoc)
pnpm build:docs

# Check if generated code is up to date
pnpm check-codegen
```

## Architecture

### Code Generation Pipeline

The build process follows a strict sequence defined in `scripts/task/build.ts`:

1. **Build OAS**: `boats` combines YAML files from `oas/` into a single OpenAPI spec
2. **Build SDK**: Docker container runs `openapi-generator-cli` (typescript-fetch) on the spec
3. **Format/Lint**: Generated SDK code is formatted
4. **Build Src**: TypeScript compilation produces final output in `tscBuild/`

### Directory Structure

```
oas/                    # OpenAPI specification source files (EDIT HERE)
├── index.yml           # Root spec with metadata, servers, security
├── paths/              # API endpoints organized by resource
├── components/
│   ├── schemas/        # Data models and response types
│   └── parameters/     # Reusable path/query parameters
└── mixins/             # Reusable YAML fragments

src/
├── config.ts           # SimpleLoginConfig wrapper class (EDITABLE)
├── index.ts            # Public API exports (EDITABLE)
└── sdk/                # Generated API client (DO NOT EDIT)

scripts/                # Build orchestration
├── task/               # High-level tasks (build, ci, etc.)
└── steps/              # Individual build steps

dist/                   # Generated documentation (DO NOT EDIT)
tscBuild/               # Compiled TypeScript output (DO NOT EDIT)
```

### Boats Configuration

`.boatsrc` defines path aliases used in OAS specs:
- `@mixins` → `oas/mixins`
- `@components` → `oas/components`
- `@parameters` → `oas/components/parameters`
- `@schemas` → `oas/components/schemas`

The root `oas/index.yml` uses Nunjucks templating to inject security and error responses into all authenticated endpoints.

### SDK Generation Details

`scripts/steps/buildSdk.ts`:
- Uses Docker image `openapitools/openapi-generator-cli:v7.17.0`
- Generates to `build/sdk/` then copies to `src/sdk/` with modifications
- Adds TypeScript ignore directives and type shims for browser/Node compatibility

### API Client Structure

Generated APIs (in `src/sdk/apis/`):
- `AccountApi` - Login, registration, MFA, user info, API key management
- `AliasApi` - Alias CRUD, contacts, activities
- `MailboxApi` - Mailbox CRUD operations
- `CustomDomainApi` - Custom domain read operations

Configuration wrapper (`src/config.ts`):
- `SimpleLoginConfig` extends generated `Configuration` class
- Handles API key, custom base path, and custom fetch implementation

## Making Changes

### To Add/Modify API Endpoints

1. Edit or create YAML files in `oas/paths/`
2. Define request/response schemas in `oas/components/schemas/`
3. Run `pnpm build` (or `pnpm dev` for watch mode)
4. Generated SDK code appears in `src/sdk/apis/`
5. Commit both the OAS changes AND generated code

### To Modify Client Behavior

Only `src/config.ts` and `src/index.ts` should be manually edited. Everything in `src/sdk/` is regenerated on every build.

## Code Style

- **Formatter**: Biome (configured in `biome.json`)
- **Line width**: 100 characters
- **Quotes**: Single quotes
- **Semicolons**: Always
- **Indentation**: 2 spaces
- **Note**: Generated SDK code (`src/sdk/`) is excluded from Biome checks

## Testing

### Test Structure

Tests are located in the `test/` directory with the following structure:

```
test/
├── global.d.ts           # TypeScript type declarations for global test helpers
├── setup.ts              # Test setup and custom fixtures
├── vitest.config.ts      # Vitest configuration
├── integration/          # Integration tests for API endpoints
│   └── accountApi.test.ts
└── utils/                # Test utilities and helpers
    ├── index.ts          # Exports all test utilities
    ├── matchers.ts       # Custom test matchers for responses and errors
    ├── createAccount.ts  # Helper to create test accounts
    └── mailHog.ts        # MailHog email testing utilities
```

### Running Tests

```bash
# Run all tests
pnpm test

# Run a specific test file
pnpm test -- test/integration/accountApi.test.ts

# Run tests in watch mode
pnpm test -- --watch

# Run tests with coverage
pnpm test -- --coverage
```

### Writing Tests

#### Test Fixtures

The test suite provides a custom `api` test fixture that automatically creates a fresh test account with authentication for each test and cleans up afterwards:

```typescript
import { describe, expect } from 'vitest';
import { expectSuccess } from '../utils/matchers';

describe('AccountApi', () => {
  api('creates api key', async ({ client }) => {
    // The 'client' is a SimpleLoginClient with authentication already configured
    const response = await client.account.createApiKeyRaw({
      apiKeyPost: { device: 'test-device' },
    });

    const apiKey = await expectSuccess(response);
    expect(apiKey.apiKey).toBeDefined();
  });
});
```

The `api` fixture is globally available and defined in `test/setup.ts`. It:
1. Creates a new test account using `createAccount()`
2. Provides an authenticated `SimpleLoginClient` instance
3. Automatically cleans up the test account after the test completes

#### SDK Method Variants

The generated SDK provides two versions of each API method:

1. **Regular methods** (e.g., `createApiKey()`) - Return `Promise<T>` directly (unwrapped value)
2. **Raw methods** (e.g., `createApiKeyRaw()`) - Return `Promise<ApiResponse<T>>` with:
   - `raw`: The raw fetch Response object with status code, headers, etc.
   - `value()`: Method to get the typed response data

**When to use each:**
- Use **Raw methods** when you need to inspect the HTTP response (status codes, headers)
- Use **Regular methods** when you only care about the response data

#### Custom Test Matchers

The project provides custom matchers in `test/utils/matchers.ts` to simplify testing HTTP responses and errors:

##### `expectSuccess<T>(response)`

Verifies a response has a successful status code (200-299) and returns the unwrapped value.

**Important:** Use with `*Raw()` methods only.

```typescript
import { expectSuccess } from '../utils/matchers';

api('creates an alias', async ({ client }) => {
  const response = await client.alias.createAliasRaw({
    aliasPost: { note: 'test alias' }
  });

  // Verifies status is 200-299 and returns the typed value
  const alias = await expectSuccess(response);
  expect(alias.email).toBeDefined();
  expect(alias.note).toBe('test alias');
});

// You can also check specific status codes
api('returns 201 on creation', async ({ client }) => {
  const response = await client.alias.createAliasRaw({
    aliasPost: { note: 'test' }
  });

  expect(response.raw.status).toBe(201); // Specific status check
  const alias = await expectSuccess(response);
});
```

##### `expectError(error, statusCode)`

Verifies an error is a ResponseError with the expected HTTP status code.

Works with both `*Raw()` and regular methods since both throw ResponseError on failure.

```typescript
import { expectError } from '../utils/matchers';

api('returns 401 for invalid auth', async () => {
  const client = new SimpleLoginClient(new Configuration({
    basePath: 'http://localhost:7777/api',
    apiKey: 'invalid-key'
  }));

  try {
    await client.account.getUserInfo();
    throw new Error('Should have thrown');
  } catch (error) {
    expectError(error, 401); // Verifies ResponseError with status 401
  }
});

api('returns 404 for non-existent resource', async ({ client }) => {
  try {
    await client.alias.getAlias({ aliasId: 99999 });
    throw new Error('Should have thrown');
  } catch (error) {
    expectError(error, 404);
  }
});

api('returns 400 for invalid input', async ({ client }) => {
  try {
    await client.account.login({
      authLoginPost: { email: 'invalid', password: 'invalid' }
    });
    throw new Error('Should have thrown');
  } catch (error) {
    expectError(error, 400);
  }
});
```

##### `expectClientError(error)`

Verifies an error is a ResponseError with a status code in the client error range (400-499). Useful when you don't care about the specific error code, just that it's a client error.

```typescript
import { expectClientError } from '../utils/matchers';

api('rejects invalid requests', async ({ client }) => {
  try {
    await client.alias.getAlias({ aliasId: -1 });
    throw new Error('Should have thrown');
  } catch (error) {
    expectClientError(error); // Accepts any 4xx status code
  }
});
```

##### `expectServerError(error)`

Verifies an error is a ResponseError with a status code in the server error range (500-599).

```typescript
import { expectServerError } from '../utils/matchers';

api('handles server errors', async ({ client }) => {
  try {
    await client.account.getSomeFailingEndpoint();
    throw new Error('Should have thrown');
  } catch (error) {
    expectServerError(error); // Accepts any 5xx status code
  }
});
```

#### Test Utilities

Import test utilities from `test/utils/`:

```typescript
// Import everything
import { expectSuccess, expectError, createAccount } from '../utils';

// Or import specific utilities
import { expectSuccess } from '../utils/matchers';
import { createAccount } from '../utils/createAccount';
```

#### Snapshot Testing

Snapshot testing is **highly recommended** for API response validation. It captures the entire response structure and detects unexpected changes.

**When to use snapshots:**
- Verifying complete API response structures
- Ensuring response shape consistency across changes
- Detecting unintended changes to API responses
- Testing complex nested objects

**Always combine snapshots with custom matchers:**

```typescript
api('creates api key', async ({ client }) => {
  const response = await client.account.createApiKeyRaw({
    apiKeyPost: { device: 'test-device' }
  });

  // 1. Use custom matcher to verify status code
  const apiKey = await expectSuccess(response);

  // 2. Verify critical fields
  expect(apiKey.apiKey).toBeDefined();

  // 3. Snapshot the complete response structure
  expect(apiKey).toMatchSnapshot();
});
```

**Updating snapshots:**
```bash
# Update all snapshots
pnpm test -- -u

# Update snapshots for a specific file
pnpm test -- test/integration/accountApi.test.ts -u
```

**Important:** Review snapshot changes carefully before committing. Ensure changes are intentional.

#### Parameterized Tests

Use parameterized tests (also called data-driven tests) to test the same behavior with multiple inputs. This reduces code duplication and improves test coverage.

**Basic parameterized test with `test.each()`:**

```typescript
import { describe, expect, test } from 'vitest';
import { expectError } from '../utils/matchers';

describe('AccountApi - Input Validation', () => {
  // Test multiple invalid email formats
  test.each([
    { email: '', password: 'valid123', description: 'empty email' },
    { email: 'invalid', password: 'valid123', description: 'malformed email' },
    { email: 'no@domain', password: 'valid123', description: 'missing TLD' },
    { email: 'spaces @test.com', password: 'valid123', description: 'spaces in email' },
  ])('rejects login with $description', async ({ email, password }) => {
    const client = new SimpleLoginClient(new Configuration({
      basePath: 'http://localhost:7777/api'
    }));

    try {
      await client.account.login({
        authLoginPost: { email, password }
      });
      throw new Error('Should have thrown');
    } catch (error) {
      expectError(error, 400);
    }
  });
});
```

**Parameterized test with the `api` fixture:**

```typescript
describe('AliasApi - Creation', () => {
  // Test different alias configurations
  api.each([
    { note: 'Personal alias', enabled: true },
    { note: 'Work alias', enabled: false },
    { note: 'Temporary alias', enabled: true },
  ])('creates alias with note "$note"', async ({ client }, params) => {
    const response = await client.alias.createAliasRaw({
      aliasPost: params
    });

    const alias = await expectSuccess(response);
    expect(alias.note).toBe(params.note);
    expect(alias.enabled).toBe(params.enabled);
    expect(alias).toMatchSnapshot();
  });
});
```

**Testing error status codes with parameterized tests:**

```typescript
describe('AliasApi - Error Handling', () => {
  test.each([
    { id: -1, expectedStatus: 400, description: 'negative id' },
    { id: 0, expectedStatus: 400, description: 'zero id' },
    { id: 99999, expectedStatus: 404, description: 'non-existent id' },
  ])('returns $expectedStatus for $description', async ({ id, expectedStatus }) => {
    const client = new SimpleLoginClient(new Configuration({
      basePath: 'http://localhost:7777/api',
      apiKey: 'test-key'
    }));

    try {
      await client.alias.getAlias({ aliasId: id });
      throw new Error('Should have thrown');
    } catch (error) {
      expectError(error, expectedStatus);
    }
  });
});
```

**Matrix testing (multiple dimensions):**

```typescript
describe('AliasApi - Combinations', () => {
  const noteValues = ['short', 'a very long note with many words'];
  const enabledValues = [true, false];

  // Test all combinations of note length and enabled status
  for (const note of noteValues) {
    for (const enabled of enabledValues) {
      api(`creates alias with ${note.length > 10 ? 'long' : 'short'} note, enabled=${enabled}`,
        async ({ client }) => {
          const response = await client.alias.createAliasRaw({
            aliasPost: { note, enabled }
          });

          const alias = await expectSuccess(response);
          expect(alias.note).toBe(note);
          expect(alias.enabled).toBe(enabled);
          expect(alias).toMatchSnapshot();
        }
      );
    }
  }
});
```

#### Best Practices

1. **Use the `api` fixture** - Always use the provided `api` fixture for authenticated tests instead of manually creating accounts
2. **Use Raw methods with matchers** - When testing status codes or HTTP details, use `*Raw()` methods with `expectSuccess()`
3. **Always snapshot API responses** - Use `toMatchSnapshot()` after custom matcher validation to capture complete response structure
4. **Use parameterized tests** - Use `test.each()` or `api.each()` to test multiple scenarios with the same logic
5. **Test error cases** - Use `expectError()`, `expectClientError()`, or `expectServerError()` to verify error handling
6. **Clean test data** - The `api` fixture handles cleanup, but for manual account creation, ensure cleanup in the test
7. **Descriptive test names** - Use clear, descriptive test names that explain what is being tested
8. **Review snapshot changes** - Always review snapshot diffs carefully before updating with `-u`
9. **Keep tests focused** - Each test should verify one specific behavior or scenario

#### Example: Complete Test Suite

```typescript
import { describe, expect } from 'vitest';
import { expectSuccess, expectError, expectClientError } from '../utils';

describe('AliasApi', () => {
  api('creates a new alias', async ({ client }) => {
    const response = await client.alias.createAliasRaw({
      aliasPost: { note: 'Test alias' }
    });

    const alias = await expectSuccess(response);
    expect(alias.email).toMatch(/@.+\..+/); // Valid email format
    expect(alias.enabled).toBe(true);
  });

  api('retrieves alias by id', async ({ client }) => {
    // Create an alias first
    const createResponse = await client.alias.createAliasRaw({
      aliasPost: { note: 'Test' }
    });
    const created = await expectSuccess(createResponse);

    // Retrieve it
    const getResponse = await client.alias.getAliasRaw({
      aliasId: created.id
    });
    const alias = await expectSuccess(getResponse);
    expect(alias.id).toBe(created.id);
  });

  api('returns 404 for non-existent alias', async ({ client }) => {
    try {
      await client.alias.getAlias({ aliasId: 99999 });
      throw new Error('Should have thrown');
    } catch (error) {
      expectError(error, 404);
    }
  });

  api('rejects invalid alias creation', async ({ client }) => {
    try {
      await client.alias.createAlias({
        aliasPost: { note: '' } // Invalid data
      });
      throw new Error('Should have thrown');
    } catch (error) {
      expectClientError(error); // Any 4xx error
    }
  });
});
```

## Requirements

- **Node.js**: Version 24 (see `.nvmrc`)
- **Docker**: Required for SDK generation via openapi-generator-cli
- **pnpm**: Specified in package.json packageManager field

## Important Notes

- **Never edit generated files**: `src/sdk/`, `dist/`, `tscBuild/`, `build/`
- **Always commit generated code**: The SDK output is version-controlled
- **OpenAPI spec is the source of truth**: All API changes happen in `oas/`
- **Pre-commit hooks**: Husky runs format+lint via lint-staged on commit
