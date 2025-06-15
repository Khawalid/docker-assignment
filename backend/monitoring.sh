#!/bin/bash

container="mongo"

# Check if container has a health status
health=$(docker inspect --format='{{.State.Health.Status}}' $container 2>/dev/null)

if [ "$health" == "unhealthy" ]; then
  echo "⚠️  [$container] is UNHEALTHY. Attempting automatic recovery..."

  # Step 1: Try to fix inside the container (restore the mongosh binary if renamed)
  echo "🛠  Trying to restore mongosh binary if it was renamed..."
  docker exec $container bash -c 'test -f /usr/bin/mongosh.bak && mv /usr/bin/mongosh.bak /usr/bin/mongosh'

  # Step 2: Restart the container to re-trigger healthcheck
  echo "♻️  Restarting $container..."
  docker restart $container

  # Optional: Check again after a delay (let healthcheck run at least once)
  sleep 15
  new_status=$(docker inspect --format='{{.State.Health.Status}}' $container 2>/dev/null)

  if [ "$new_status" == "healthy" ]; then
    echo "✅ [$container] has recovered and is healthy again."
  else
    echo "❌ [$container] is still unhealthy after attempted fix."
  fi

else
  echo "✅ [$container] is healthy."
fi
