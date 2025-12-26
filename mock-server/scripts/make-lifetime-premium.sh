#!/bin/bash
set -e

if [ -z "$1" ]; then
    echo "Usage: $0 <user_email>"
    echo "Example: $0 user@example.com"
    exit 1
fi

USER_EMAIL="$1"

echo "Attempting to grant lifetime premium to user '$USER_EMAIL'..."

RESULT=$(PGPASSWORD=$POSTGRES_PASSWORD psql -h postgres -U "$POSTGRES_USER" -d "$POSTGRES_DB" -tAc \
    "UPDATE users SET lifetime = true, paid_lifetime = true WHERE email = '$USER_EMAIL' RETURNING id, email, lifetime, paid_lifetime;")

if [ -z "$RESULT" ]; then
    echo "Error: User with email '$USER_EMAIL' not found"
    exit 1
fi

USER_ID=$(echo "$RESULT" | cut -d'|' -f1)
echo "Success! User '$USER_EMAIL' (ID: $USER_ID) now has lifetime premium"
exit 0
