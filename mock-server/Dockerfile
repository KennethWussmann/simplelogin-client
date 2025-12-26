# Mock server Dockerfile for SimpleLogin app
# This extends the base SimpleLogin image to make it usable for API tests

ARG SIMPLELOGIN_VERSION
FROM simplelogin-app:${SIMPLELOGIN_VERSION}

# Install postgresql-client for database health checks
RUN apt-get update && \
    apt-get install -y postgresql-client && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY scripts/ /scripts/
RUN chmod +x /scripts/*.sh

HEALTHCHECK --interval=5s --timeout=5s --start-period=30s --retries=5 \
    CMD ["/scripts/healthcheck.sh"]

ENTRYPOINT ["/scripts/entrypoint.sh"]
