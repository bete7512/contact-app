const bycript = require('bcryptjs')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const HASURA_OPERATION = require('../query/loginquery');
const execute = async (variables) => {
  const fetchResponse = await fetch(
    "http://localhost:8080/v1/graphql",
    {
      method: 'POST',
      headers: {
        'x-hasura-admin-secret': 'adminsecretkey'
      },
      body: JSON.stringify({
        query: HASURA_OPERATION,
        variables
      })
    }
  );
  const data = await fetchResponse.json();
  return data;
};
const handler = async (req, res) => {
  const { username, password } = req.body.input;
  const check = require('../checker/usernamecheck')
  const bool = await check(username);
  if (!bool) {
    console.log(bool)
    return res.status(400).json({
      message: "There is no user  with this user name"
    })
  }
  else {
    const passwordcheck = require('../checker/checkpassword')
    const verify = await passwordcheck({ username })
    const value = await bycript.compare(password, verify)
    if (!value) {
      return res.status(400).json({
        message: "incorrect password"
      })
    }
    else {
      const { data } = await execute({ username, password });
      const tokenContents = {
        "First_name": "bete",
        "sub": "hero",
        "https://hasura.io/jwt/claims":
        {
          "x-hasura-allowed-roles": ["user"],
          "x-hasura-default-role": "user",
          "x-hasura-user-id": "298"
        }
      }
      const token = jwt.sign({
        tokenContents
      }, process.env.SECRET_KEY)
      return res.json({
        ...data.user,
        token: tokeninig
      })
    }

  }

};
module.exports = handler;