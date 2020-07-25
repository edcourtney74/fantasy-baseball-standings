import { Pool, QueryFunction, createPool } from "mysql";
import { promisify } from "util";
import path from "path";
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

interface PromisifiedPool extends Omit<Pool, "query"> {
  query: QueryFunction | Function;
}

let connectObj: object | string;

// Set database connection properties based on whether app is running in the cloud or locally
if (process.env.JAWSDB_URL) {
  connectObj = process.env.JAWSDB_URL;
} else {
  connectObj = {
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: 8889,
  };
}

const pool: PromisifiedPool = createPool(connectObj);

// Utilize promises for mysql query
pool.query = promisify(pool.query);

// pool.on('acquire', (connection) => {
//   console.log('Connection %d acquired', connection.threadId);
// });

// pool.on('release', (connection) => {
//   console.log('Connection %d released', connection.threadId);
// });

// pool.on('enqueue', () => {
//   console.log('Waiting for available connection slot');
// });
export default pool;
