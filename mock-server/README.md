# SimpleLogin Mock Server

A containerized SimpleLogin instance for E2E testing and development.

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
- **PostgreSQL**: localhost:15432
- **Redis**: localhost:16379

## Email Testing

All outgoing emails are captured by MailHog:

1. Register a user at http://localhost:7777
2. Check http://localhost:8025 for the confirmation email
3. All emails (confirmations, notifications, forwarded emails) appear in MailHog

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
