import { Router } from "express";
import controllers from "../users.controllers.js";

const router = Router();

router.route("/").post(controllers.createOne).get(controllers.getAll);

router
  .route("/:id")
  .get(controllers.getOne)
  .delete(controllers.removeOne)
  .put(controllers.updateOne);

export const UsersRouter = router;
