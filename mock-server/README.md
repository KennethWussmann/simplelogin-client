# SimpleLogin Mock Server

A containerized SimpleLogin instance for E2E testing and development.

## Services

- **PostgreSQL** (port 15432): Database
- **Redis** (port 16379): Cache
- **MailHog** (ports 1025, 8025): Email testing server
- **SimpleLogin App** (port 7777): Main web application
- **Job Runner**: Background job processor
- **Email Handler** (port 20381): Incoming email processor
- **Test API** (port 7778): HTTP API for test automation

## Quick Start

```bash
# Start all services
docker compose up

# Start in background
docker compose up -d

# View logs
docker compose logs -f

# Stop services
docker compose down

# Stop and remove volumes (clean slate)
docker compose down -v
```

## Access Points

- **SimpleLogin Web**: http://localhost:7777
- **MailHog UI**: http://localhost:8025
- **Test API**: http://localhost:7778
- **PostgreSQL**: localhost:15432
- **Redis**: localhost:16379
- **Email Handler SMTP**: localhost:20381

## Creating Test Accounts

Use the `create-account.py` script to quickly create fully-activated test accounts with API keys:

```bash
# Create an account (outputs the API key)
docker compose exec app python /scripts/create-account.py user@example.com password123

# Capture the API key in a variable
API_KEY=$(docker compose exec -T app python /scripts/create-account.py user@example.com password123 --no-welcome-email)
echo "API Key: $API_KEY"
```

The script outputs the API key to stdout, making it easy to use in automation scripts. It:
- Creates a fully activated account (bypasses email verification)
- Generates an API key automatically
- Returns just the API key for easy scripting

### HTTP Test API

For integration tests and automation, use the HTTP Test API on port 7778:

```bash
# Create account via HTTP API
curl -X POST http://localhost:7778/create-account \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Response:
# {
#   "api_key": "...",
#   "email": "test@example.com",
#   "user_id": 123,
#   "existing": false
# }
```

#### Using in Vitest Tests

A TypeScript helper is provided in `test/helpers/mockServer.ts`:

```typescript
import { createRandomTestAccount, waitForMockServer } from './helpers/mockServer';

// In your test setup
beforeAll(async () => {
  await waitForMockServer(); // Ensure server is ready
});

// In your tests
test('should create alias', async () => {
  // Each test gets a unique account
  const account = await createRandomTestAccount();

  // Use the API key for authenticated requests
  const response = await fetch('http://localhost:7777/api/alias/options', {
    headers: { 'Authentication': account.api_key }
  });

  // ... test logic
});
```

This allows running tests in parallel with isolated accounts!

## Email Testing

All outgoing emails are captured by MailHog:

1. Register a user at http://localhost:7777
2. Check http://localhost:8025 for the confirmation email
3. All emails (confirmations, notifications, forwarded emails) appear in MailHog

### Testing Email Forwarding

Send a test email to an alias:

```bash
# Using swaks (if installed)
swaks --to your-alias@example.com --from sender@test.com --server 127.0.0.1:20381

# Check MailHog UI for the forwarded email
```

## Configuration

The mock server uses these settings (see `docker-compose.yaml`):

- **EMAIL_DOMAIN**: `example.com` (domain for aliases)
- **URL**: `http://localhost:7777`
- **Database**: PostgreSQL with auto-migrations
- **Email**: All emails routed through MailHog

## Development

### Rebuilding the Mock Server

After making changes to scripts or configuration:

```bash
# Rebuild using the project's build script
cd ..
pnpm task:build-mock-server

# Or rebuild manually
docker build --build-arg SIMPLELOGIN_VERSION=v4.74.7 --tag simplelogin-mock:latest ./mock-server
```

### Database Management

```bash
# Access PostgreSQL
docker compose exec postgres psql -U simplelogin -d simplelogin

# Reset database (stops containers and removes volumes)
docker compose down -v
docker compose up
```

### Viewing Service Logs

```bash
# All services
docker compose logs -f

# Specific service
docker compose logs -f app
docker compose logs -f mailhog
docker compose logs -f job-runner
docker compose logs -f email-handler
```

## Troubleshooting

### Ports Already in Use

If ports are already in use, edit `docker-compose.yaml` to change the port mappings:

```yaml
ports:
  - '7778:7777'  # Changed from 7777:7777
```

### Database Migration Issues

If migrations fail, clean the database:

```bash
docker compose down -v
docker compose up
```

### Email Not Being Sent

Check that `NOT_SEND_EMAIL` is not set in environment variables. View logs:

```bash
docker compose logs -f app | grep -i email
```

## Architecture

```
┌─────────────────┐
│  PostgreSQL     │
│  (Database)     │
└────────┬────────┘
         │
    ┌────┴────┐
    │  Redis  │
    │ (Cache) │
    └────┬────┘
         │
┌────────┴──────────────────────┐
│                               │
│  ┌──────────┐  ┌────────────┐│
│  │   App    │  │ Job Runner ││
│  │ (Web UI) │  │ (Background││
│  └─────┬────┘  └────────────┘│
│        │                      │
│  ┌─────┴────────┐            │
│  │Email Handler │            │
│  │  (SMTP In)   │            │
│  └──────────────┘            │
│                               │
│   SimpleLogin Services        │
└───────────────┬───────────────┘
                │
         ┌──────┴──────┐
         │   MailHog   │
         │ (SMTP Out)  │
         └─────────────┘
```
