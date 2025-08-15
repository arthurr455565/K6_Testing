# Module 2 — Lifecycle Hooks & JS Scripting

In real-world tests, you need to:
1. Do setup tasks once (like authentication)  
2. Run repeated tasks (default function)  
3. Do cleanup after the test finishes  

k6 provides lifecycle hooks for this:

| Hook         | When it runs                       | Example Use Case                          |
| ------------ | ---------------------------------- | ----------------------------------------- |
| `setup()`    | Before test starts, runs **once**  | Get auth token, load test data            |
| `default`    | Every iteration, per VU            | Make requests, simulate user actions      |
| `teardown()` | After test finishes, runs **once** | Cleanup data, log results, close sessions |