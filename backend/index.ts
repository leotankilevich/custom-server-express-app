import next from "next";
import Server from "./server";
import mongoose from "mongoose";
import PostsController from "./controllers/posts/PostsController";

const port = process.env.PORT || 8080;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const configDB = require("../config/db.js");

mongoose
  .connect(configDB.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .catch(err => {
    // if error we will be here
    console.error("App starting error:", err.stack);
    process.exit(1);
  });

app
  .prepare()
  .then(() => {
    const server = new Server(app, [new PostsController(app)], port);
    server.listen();
  })
  .catch(err => err);
