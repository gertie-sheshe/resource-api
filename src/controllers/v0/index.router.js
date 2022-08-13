import { Router } from "express";
import { BooksRouter } from "./books/routes/books.routes.js";
import { UsersRouter } from "./users/routes/user.routes.js";

const router = Router();

router.use("/books", BooksRouter);
router.use("/users", UsersRouter);

router.get("/", (req, res) => {
  res.send("Welcome to the API");
});

export const IndexRouter = router;
