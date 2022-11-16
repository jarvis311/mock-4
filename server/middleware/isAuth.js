const jwt = require('jsonwebtoken')
const User = require('../model/userAuthModel')
const checkIsAuth = async(req, res, next) => {
    let token;
  const authorization = req.headers.authorization;
//   console.log(authorization);
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[2];
      const { userId } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = await User.findById(userId).select('-password')
      next()
    } catch (error) {
        res.send('User is not autorized..')
    }
  }else{
    res.send('No token is available')
  }
};

module.exports = checkIsAuth