import { crudControllers } from "../../../utils/crud.js";
import { Book } from "./models/book.model.js";
import { User } from "../users/models/user.model.js";

const createBook = async (req, res) => {
  try {
    // Find the user
    const user = await User.findOne({ _id: req.body.userId }).lean();

    // If the user doesn't exist, return a 400
    if (!user) {
      return res.status(400).end();
    }

    // Create the book
    if (user) {
      const book = await Book.create(req.body);
      // Add the book to the user's books
      await User.findByIdAndUpdate(
        user._id,
        { $push: { books: book._id } },
        { new: true, useFindAndModify: false }
      );

      return res.status(201).json({ data: book });
    }
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

const deleteBook = async (req, res) => {
  // Find the user
  const user = User.findById({ _id: req.query.userId }).lean();
  // If no user
  if (!user) {
    return res.status(400).send("User not found");
  }
  if (user) {
    // Delete the book
    const book = await Book.findByIdAndDelete({ _id: req.params.id });
    // remove from user's books
    await User.findOneAndUpdate(
      { _id: req.query.userId },
      { $pull: { books: req.params.id } },
      { new: true, useFindAndModify: false }
    );

    return res.status(201).json({ data: book });
  }
};

const BookControllers = { createBook, deleteBook, ...crudControllers(Book) };

export default BookControllers;
