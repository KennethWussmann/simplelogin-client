# Mock server Dockerfile for SimpleLogin app
# This extends the base SimpleLogin image and adds custom scripts for testing

ARG SIMPLELOGIN_VERSION=v4.28.2
FROM simplelogin-app:${SIMPLELOGIN_VERSION}

# Install postgresql-client for database health checks
RUN apt-get update && \
    apt-get install -y postgresql-client && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy our custom scripts
COPY scripts/bootstrap.sh /scripts/bootstrap.sh
COPY scripts/entrypoint.sh /scripts/entrypoint.sh

RUN chmod +x /scripts/bootstrap.sh /scripts/entrypoint.sh

# Run bootstrap once during image build
RUN /scripts/bootstrap.sh

# Set entrypoint to our custom script
ENTRYPOINT ["/scripts/entrypoint.sh"]
