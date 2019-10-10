import next from "next";
import Server from "./server";
import PostsController from "./controllers/posts/PostsController";

const port = process.env.PORT || 8080;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

app
  .prepare()
  .then(() => {
    const server = new Server(app, [new PostsController(app)], port);
    server.listen();
  })
  .catch(err => err);
