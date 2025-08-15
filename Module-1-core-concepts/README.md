# Module 1 — Core Concepts

The 3 most important concepts in k6:

1. **Virtual Users (VUs)**  
   - A VU is not a real person — it’s a lightweight JavaScript runtime that executes your default function in a loop.  
   - Each VU is single-threaded — one iteration at a time.  
   - Multiple VUs simulate concurrency.  
   - Increasing VUs increases the load (more requests per second), but also increases the demand on your test machine.

2. **Iterations**  
   - One iteration = One execution of your default function by a VU.  
   - If you have 5 VUs, each VU executes the function repeatedly for the whole test duration.  
   - More VUs or longer duration = more iterations.  
   - Iterations are not the same as requests — an iteration may contain many HTTP calls.

3. **Duration**  
   - Duration controls how long k6 will keep VUs running.  
   - If you don’t set it, k6 defaults to one iteration per VU.  

**Common patterns:**  
- **Fixed duration**: run for a set time (duration: `"30s"`)  
- **Stage ramping**: gradually increase/decrease VUs (we’ll do this in Module 2)  

| VUs | Duration | Iterations per VU | Total Iterations | Purpose          |
| --- | -------- | ----------------- | ---------------- | ---------------- |
| 1   | 1m       | ~60               | ~60              | Functional check |
| 10  | 30s      | ~10               | ~100             | Small load test  |
| 100 | 2m       | ~20               | ~2000            | Heavy load test  |

*(Exact numbers depend on sleep times and request latency)*