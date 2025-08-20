import http from "k6/http";
import { sleep } from "k6";

export default function () {
  let url = "https://httpbin.org/post";

  let payload = JSON.stringify({
    username: "testUser",
    password: "secret123",
  });

  let params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = http.post(url, payload, params);

  console.log("Response status: " + res.status);
  console.log("Response body: " + res.body);
  sleep(1);
}

/*
payload → JSON string to send

params.headers → adds Content-Type

http.post(url, body, params) → makes POST request

res.body → actual server response
*/