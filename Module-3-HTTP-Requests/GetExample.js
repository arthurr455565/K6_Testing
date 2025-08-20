import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 1,
    duration: '10s'
}

export default function() {
    const res = http.get("https://httpbin.org/get")

    console.log("response Status: " + res.status)   //log status
    sleep(1);
}