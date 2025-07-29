// logger.js
function logger(req, res, next) {
  const currentTime = new Date().toISOString();
  console.log(`[${currentTime}] ${req.method} ${req.url}`);
  next(); // pass control to next middleware or route
}

module.exports = logger;
