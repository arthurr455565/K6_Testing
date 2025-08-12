//Simple K6 Test.

import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    http.get("https://test.k6.io");
    sleep(1);
}

