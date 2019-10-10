import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

export default class Server {
  public server: express.Application;
  public handler: any;
  constructor(
    app: any,
    public controllers: any[],
    public port: number | string
  ) {
    this.server = express();
    this.port = port;
    this.handler = app.getRequestHandler();
    this.controllers = controllers;

    this.connectToDataBase();
    this.initializeMiddlewares();
    this.initializeControllers(this.server, controllers);
    this.handle();
  }

  private initializeMiddlewares() {
    this.server.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    this.server.use(bodyParser.json());
  }

  private initializeControllers(server: any, controllers: any) {
    controllers.forEach((controller: any) => {
      server.use("/", controller.router);
    });
  }

  private connectToDataBase() {
    mongoose
      .connect("mongodb://mongo:27017/db", {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })
      .catch(err => {
        // if error we will be here
        console.error("App starting error:", err.stack);
        process.exit(1);
      });
  }

  private handle() {
    this.server.get("*", (req: express.Request, res: express.Response) => {
      return this.handler(req, res);
    });
  }

  public listen() {
    this.server.listen(this.port, () => {
      console.log(`> Ready on http://localhost:${this.port}`);
    });
  }
}
