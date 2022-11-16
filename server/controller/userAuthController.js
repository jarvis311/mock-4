
const userAuthSchema = require('../model/userAuthModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.userSignUp = (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    if (username && email && password) {
        userAuthSchema.findOne({ email: email })
          .then((isEmail) => {
            if (isEmail) {
              res.send("Email is already registered");
            }
            bcrypt
              .hash(password, 10)
              .then((hashPassword) => {
                const user = new userAuthSchema({
                  username: username,
                  email: email,
                  password: hashPassword,
                });
                return user;
              })
              .then((user) => {
                user.save().then((result) => {
                    const token = jwt.sign({userId : user._id},process.env.JWT_SECRET_KEY, {expiresIn:'1d'})
                  res.send({data: req.body, "token": token });
                });
              });
          })
          .catch((err) => console.log(err));
      } else {
        res.send("All field are required");
      }
}

exports.userSingIn = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (email && password) {
        userAuthSchema.findOne({ email: email }).then((user) => {
          if (user) {
            bcrypt.compare(password, user.password).then((isMatch) => {
              if(isMatch) {
                const token = jwt.sign({userId : user._id},process.env.JWT_SECRET_KEY, {expiresIn:'1d'})
                res.json({message : "You are succesfully login...", token: token, stat});
              }else{
                res.json({message: 'Yore email or password is wrong'})
              }
            });
          } else {
            res.json({message: "User data is not available with this email"});
          }
        });
      } else {
        res.json("All fields are required..");
      }

}
exports.userSignOut = (req,res) => {
  
}