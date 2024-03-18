const errorMiddleware = (error, req, res, next) => {
  res.status(error.status || 500);
  res.message(error.message || 'Backend Error Middleware');
};
