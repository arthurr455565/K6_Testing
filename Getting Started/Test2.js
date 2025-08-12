// Constant VUs example. Controlling duration and vus. 
// How options function works -> You define vus, duration, scenarios in options function.

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    vus : 5,            //5 Virtual Users
    duration : "10s"    // Test Run for 15 seconds
}

export default function () {
    http.get("https://test.k6.io");
    sleep(1);
}