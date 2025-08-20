import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 1,
    duration: "10s"
}

export default function () {
    
    const url = "https://httpbin.org/get"

    const res = http.get(url);

    console.log("Response: ", + res.status);
    console.log("Response body: " + res.body);
    sleep(1);
}