const bycript = require('bcryptjs')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const FIND_USER = require('../query/finduser')
const handler = async (req, res) => {
  const { username, password } = req.body.input;
  const finduser = require('../checker/findusername')
  const { data, error } = await finduser({ username })
  const user = data["user"][0]
  console.log(user)
  if (!user) {
    return res.status(400).json({
      message: 'invalid input please enter your username and password again'
    })
  }
  else {
    const value = await bycript.compare(password, user.password)
    if (!value) {
      return res.status(400).json({
        message: "incorrect password"
      })
    }
    const tokenContents = {
    }
    const token = jwt.sign({
      "https://hasura.io/jwt/claims":
      {
        "x-hasura-allowed-roles": ["user"],
        "x-hasura-default-role": "user",
        "x-hasura-user-id": `${user.id}`
      }
    }
      , process.env.SECRET_KEY)
    console.log(token)
    console.log(...data.user)
    return res.json({
      token: token,
    })
  }
};
module.exports = handler