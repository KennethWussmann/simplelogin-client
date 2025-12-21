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

### Testing

Tests live in `test/` directory. Jest configuration:
- Uses `ts-jest` preset
- Excludes integration tests (`*.it.test.ts`) by default
- Setup file: `test/setupEnv.ts`

## Code Style

- **Formatter**: Biome (configured in `biome.json`)
- **Line width**: 100 characters
- **Quotes**: Single quotes
- **Semicolons**: Always
- **Indentation**: 2 spaces
- **Note**: Generated SDK code (`src/sdk/`) is excluded from Biome checks

## Requirements

- **Node.js**: Version 24 (see `.nvmrc`)
- **Docker**: Required for SDK generation via openapi-generator-cli
- **pnpm**: Specified in package.json packageManager field

## Important Notes

- **Never edit generated files**: `src/sdk/`, `dist/`, `tscBuild/`, `build/`
- **Always commit generated code**: The SDK output is version-controlled
- **OpenAPI spec is the source of truth**: All API changes happen in `oas/`
- **Pre-commit hooks**: Husky runs format+lint via lint-staged on commit
