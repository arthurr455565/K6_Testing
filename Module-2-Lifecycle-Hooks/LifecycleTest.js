/*

setup() runs once → fetch token

default() runs per VU iteration → simulate requests

teardown() runs once → cleanup

*/

import http from "k6/http";
import { sleep } from "k6";

export let authToken = "";

export function setup() {
  console.log("Setup: Fetching auth token...");
  // Simulate token fetch
  authToken = "123abc"; 
  return authToken; // can be accessed by default function
}

export default function (data) {
  console.log(`Default: Using token ${data}`);
  http.get("https://test.k6.io");
  sleep(1);
}

export function teardown(data) {
  console.log(`Teardown: Cleaning up with token ${data}`);
}
