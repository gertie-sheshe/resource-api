import express from "express";

import { connect } from "./utils/db.js";

const app = express();

export const start = async () => {
  try {
    await connect();
    app.listen(8080, () => {
      console.log(`Server running on port 8080`);
    });
  } catch (e) {
    console.error(e);
  }
};

start();
