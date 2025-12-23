#!/bin/bash
set -e

echo "Starting SimpleLogin mock server..."

# Wait for database to be ready
echo "Waiting for database..."
until PGPASSWORD=$POSTGRES_PASSWORD psql -h postgres -U $POSTGRES_USER -d $POSTGRES_DB -c '\q' 2>/dev/null; do
  echo "Database is unavailable - sleeping"
  sleep 1
done
echo "Database is ready!"

# Initialize database if needed
echo "Running database migrations..."
alembic upgrade head

# Add initial data (SL domains, Proton partner)
echo "Initializing application data..."
python init_app.py

# Start the application
echo "Starting SimpleLogin application on port 7777..."
exec gunicorn wsgi:app -b 0.0.0.0:7777 --workers 2 --timeout 600
