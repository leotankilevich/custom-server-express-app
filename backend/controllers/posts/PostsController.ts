import * as express from "express";
import next from "next";
import Post from "./PostInterface";
const dev = process.env.NODE_ENV !== "production";

class PostsController {
  public path = "/posts";
  public router = express.Router();
  public app = next({ dev });
  private posts: Post[] = [
    {
      author: "Marcin",
      content: "Dolor sit amet",
      title: "Lorem Ipsum"
    }
  ];

  constructor(app: any) {
    this.app = app;
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }

  getAllPosts = (req: express.Request, res: express.Response) => {
    res.status(200).json(this.posts);
  };

  createAPost = (request: express.Request, response: express.Response) => {
    const post: Post = request.body;
    this.posts.push(post);
    response.send(post);
  };
}

export default PostsController;
