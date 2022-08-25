import http from "http";
import { Buffer } from "buffer";
import { getComments } from "./db.js";

// start

let server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    // (async function () {
    // let data = await getComments();
    getComments()
      .then((data) => {
        console.log(data);
        console.log("GET /");
        res.end("Hello!");
      })
      .catch((err) => console.log(err));

    // })();
  }
});

// async function getData() {
//     return
// }

server.listen(4000, () => {
  console.log("Server running at http://localhost:4000/");
});
