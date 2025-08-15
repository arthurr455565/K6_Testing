import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 3,
  duration: "6s",
};

export default function () {
  http.get("https://test.k6.io");
  sleep(1);
}
