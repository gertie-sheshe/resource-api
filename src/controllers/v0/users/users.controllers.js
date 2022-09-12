import { crudControllers } from "../../../utils/crud.js";
import { User } from "./models/user.model.js";
import { Book } from "../books/models/book.model.js";

const getUserBooks = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id })
      .populate("books")
      .lean();

    if (!user) {
      return res.status(400).end();
    }

    res.status(200).json({ data: user.books });
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id }).lean();

    if (!user) {
      return res.status(400).send("No User Found").end();
    }

    // Get the user's books ids
    const booksIds = user.books;

    // Delete the user
    await User.findByIdAndDelete({ _id: req.params.id });

    // Delete the user's books
    await Book.deleteMany({ _id: { $in: booksIds } });

    res.status(200).json({ message: "Deleted User and Books", data: user });
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};

const UserControllers = { getUserBooks, deleteUser, ...crudControllers(User) };

export default UserControllers;
