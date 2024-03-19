const validate = (schema) => async (req, res, next) => {
  try {
    const result = await schema.safeParse(req.body);

    if (result.success) {
      next();
    } else {
      const errorFields = result.error.flatten().fieldErrors;
      // modify errors before sending it to frontend
      let modifiedErrors = {};
      Object.keys(errorFields).forEach((field) => {
        if (errorFields[field].length > 0) {
          modifiedErrors[field] = errorFields[field][0];
        }
      });

      res.status(400).json({ message: modifiedErrors });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = validate;
