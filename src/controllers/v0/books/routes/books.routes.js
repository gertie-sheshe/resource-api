import { Router } from "express";
import controllers from "../books.controller.js";

const router = Router();

router.route("/").post(controllers.createOne);

export const BooksRouter = router;
