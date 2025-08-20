import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 1,
    duration: '10s'
}

export default function () {

    const url = "https://httpbin.org/post";


    //For Coockie Test
    //const url = "https://httpbin.org/cookies/set?flavor=vanilla";

    const paylod = JSON.stringify({
        email: "me@test.com",
        password: "1234"
    });

    const params = {
        Headers: {
            "Content-Type": "application/json"
        },
    };

    const res = http.post(url, paylod, params);

    console.log("Response status: " + res.body);
    console.log("Response body: " + res.body);
    sleep(1);
}