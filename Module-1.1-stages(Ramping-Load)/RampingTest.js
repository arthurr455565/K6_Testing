/* Expected Behavior

VUs start at 0 → gradually go to 2 in 5s

Then ramp to 4 in next 5s

Then ramp down to 1 in last 5s

Total test duration = 15s

k6 automatically adjusts iterations per VU 

*/

import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: [
    { duration: "5s", target: 2 },   // ramp up to 2 VUs
    { duration: "5s", target: 4 },   // ramp up to 4 VUs
    { duration: "5s", target: 1 },   // ramp down to 1 VU
  ],
};

export default function () {
  http.get("https://test.k6.io");
  sleep(1);
}
