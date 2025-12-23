#!/bin/bash
set -e

# Wait for SimpleLogin migration before reporting as healthy
# This way we know when the server is ready for automated API tests
PGPASSWORD=$POSTGRES_PASSWORD psql -h postgres -U "$POSTGRES_USER" -d "$POSTGRES_DB" -tAc "SELECT version_num FROM alembic_version LIMIT 1;" > /dev/null 2>&1

if [ $? -eq 0 ]; then
    exit 0
else
    exit 1
fi
