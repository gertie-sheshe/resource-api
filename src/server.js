import express from "express";
import { IndexRouter } from "./controllers/v0/index.router.js";

import { connect } from "./utils/db.js";

const port = process.env.PORT || 8080;
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use("/api/v0/", IndexRouter);

export const start = async () => {
  try {
    await connect();
    app.listen(port, () => {
      console.log(`Server running on port 8080`);
    });
  } catch (e) {
    console.error(e);
  }
};

start();
