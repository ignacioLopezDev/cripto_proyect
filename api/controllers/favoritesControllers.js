const prueba = async (req, res, next) => {
  try {
    res.status(400).send("Esto es una prueba de favoritos");
  } catch (error) {
    next(error);
  }
};

module.exports = { prueba };
