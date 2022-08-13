import { Router } from "express";
import controllers from "../users.controllers.js";

const router = Router();

router.route("/").post(controllers.createOne);

export const UsersRouter = router;
