const validate = (schema) => async (req, res, next) => {
  try {
    const result = await schema.safeParse(req.body);

    if (result.success) {
      next();
    } else {
      const errorFields = result.error.flatten().fieldErrors;
      res.status(400).json({ message: errorFields });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = validate;
