#!/bin/bash
# scripts/test-e2e.sh

# Build the project
echo "Building project..."
pnpm run build

# Start the preview server in background
echo "Starting preview server..."
pnpm run preview &
SERVER_PID=$!

# Wait for server to start
echo "Waiting for server to start..."
sleep 5

# Run E2E tests
echo "Running E2E tests..."
pnpm vitest run --config vitest.e2e.config.ts

# Store test result
TEST_EXIT_CODE=$?

# Kill the server
echo "Stopping server..."
kill $SERVER_PID

# Exit with test result
exit $TEST_EXIT_CODE
