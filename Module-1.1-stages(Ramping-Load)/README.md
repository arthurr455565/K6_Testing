# Module 1.1 — Stages (Ramping Load)

In real-world performance tests, traffic doesn't usually jump instantly to max users. We ramp up and down VUs over time using stages.


**Stages** = Array of objects `{ duration, target }`  
- `duration` → How long to stay in this stage  
- `target` → Number of VUs to reach by end of this stage  

VUs gradually increase/decrease from previous stage's target to the current stage's target.  

**Useful for**:  
- 📈 **Stress tests**: See how system handles gradual load  
- ⏳ **Soak tests**: Long-term stability checks  
- ⚡ **Spike tests**: Sudden burst simulations  