import { Router } from "express";
import controllers from "../books.controller.js";

const router = Router();

router.route("/").post(controllers.createBook).get(controllers.getAll);

router
  .route("/:id")
  .get(controllers.getOne)
  .delete(controllers.deleteBook)
  .put(controllers.updateOne);

export const BooksRouter = router;
