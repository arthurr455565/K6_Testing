### K6 Testing

Simple load-testing examples using Grafana k6.

## Prerequisites
- **k6**: Install from the official docs: [k6 installation guide](https://k6.io/docs/get-started/installation/)
  - Verify install: `k6 version`


## How to run
From the project directory:

```bash
# Minimal example
k6 run firstTest.js

# Constant VUs example (5 VUs for 10s as defined in the script)
k6 run Test2.js

# Override VUs and duration from CLI if desired
k6 run -u 10 -d 30s Test2.js
```

## Notes
- Results print to the console by default (iteration count, request metrics, summaries).
- You can customize scenarios, thresholds, tags, and output backends; see the [k6 documentation](https://k6.io/docs/).


