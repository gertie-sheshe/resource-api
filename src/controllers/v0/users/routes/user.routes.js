import { Router } from "express";
import controllers from "../users.controllers.js";
import { User } from "../models/user.model.js";

const router = Router();

router.route("/").post(controllers.createOne).get(controllers.getAll);

router
  .route("/:id")
  .get(controllers.getOne)
  .delete(controllers.removeOne)
  .put(controllers.updateOne);

router.route("/:id/books").get(controllers.getUserBooks);

export const UsersRouter = router;
