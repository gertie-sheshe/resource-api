export const getOne = (model) => async (req, res) => {
  try {
    const doc = await model.findOne({ _id: req.params.id }).lean().exec();

    if (!doc) {
      return res.status(400).end();
    }

    return res.status(200).json({ data: doc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const createOne = (model) => async (req, res) => {
  try {
    // const doc = model.create({ ...req.body });
    const data = new model(req.body);
    const doc = await data.save();
    return res.status(201).json({ data: doc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const crudControllers = (model) => ({
  getOne: getOne(model),
  createOne: createOne(model),
});
