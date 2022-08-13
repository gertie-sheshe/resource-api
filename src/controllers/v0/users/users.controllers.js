import { crudControllers } from "../../../utils/crud.js";
import { User } from "./models/user.model.js";

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
    res.status(400).end();
  }
};

const UserControllers = { getUserBooks, ...crudControllers(User) };

export default UserControllers;
