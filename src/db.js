import pg from "pg";
import "dotenv/config";

const Client = pg.Client;

const client = new Client({
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
});
// const pool = new pg.Pool({
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASS,
//   port: process.env.DB_PORT,
//   host: process.env.DB_HOST,
// });

export function getComments() {
  //   const comments = pool.query(
  //     "select * from comments c order by id desc limit 100;"
  //   );
  return client.query("select * from comments c order by id desc limit 100;");
}
