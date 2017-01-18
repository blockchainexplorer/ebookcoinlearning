var router = require("koa-router");
import TestController from "./test.controller";

export default function test() {
  const CLASSNAME = "app.controllers.CharacterRouter";
  let testController = TestController();
  let r = new router();
  r.get("/a", testController.a);
  return r;
}
