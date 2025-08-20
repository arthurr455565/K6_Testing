# HTTP Requests in k6

HTTP requests simulate what real users/clients send to your application. Defined using `k6/http` module functions:

| Function                     | Purpose                          |
|------------------------------|----------------------------------|
| `http.get(url)`              | Fetch a resource                 |
| `http.post(url, body, params)` | Send data                        |
| `http.put(url, body, params)` | Update resource                 |
| `http.del(url, params)`      | Delete resource                 |

👉 Every k6 script simulates VUs making HTTP requests repeatedly.

---

## Basic GET Request Example
**Script: GetExample.js**
```javascript
import http from "k6/http";
import { sleep } from "k6";

export default function () {
  let res = http.get("https://httpbin.org/get");
  console.log("Response status: " + res.status);  // Log status
  sleep(1); // Simulate user pause
}
 ```

 ## Adding Custom Headers (e.g., Authorization)

 ```javascript
let params = {
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer 123abc"
  },
};

```
Useful when calling APIs that require tokens.

---

## Cookies and Sessions

```javascript
import http from "k6/http";

export default function () {
  let res = http.get("https://httpbin.org/cookies/set?mycookie=choco");
  console.log("Cookies received: ", JSON.stringify(res.cookies));
}
```
k6 will store cookies automatically per VU.

On the next request to the same domain, the cookie is automatically sent.




