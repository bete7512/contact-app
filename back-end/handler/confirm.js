const bycript = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const HASURA_SIGNUP_OPERATION = require("../query/query");
const execute = async (variables) => {
  const fetchResponse = await fetch(
    "http://localhost:8080/v1/graphql",
    {
      method: 'POST',
      headers: {
        'x-hasura-admin-secret': 'myadminsecretkey'
      },
      body: JSON.stringify({
        query: HASURA_SIGNUP_OPERATION,
        variables
      })
    }
  );
  const data = await fetchResponse.json();
  console.log('DEBUG: ', data);
  return data;
};
const handler = async (req, res) => {
    console.log("here is going wellllll");
    const token = req.params.route;
    console.log(token);
    const payload = jwt.verify(token, process.env.SIGNUPSECREKEY)
    const hashed = await bycript.hash(payload.password, 10)
    const user = {
        name: payload.name,
        email: payload.email,
        password: hashed,
        username: payload.username
    }
    const { data, errors } = await execute(user);
};
module.exports = handler