import * as jwt from "jsonwebtoken"

// You would use an ENV var for this
const HASURA_ENDPOINT = "https://<my-hasura-app>.hasura.app/v1/graphql"
// You can set up "Backend Only" mutations, or use a secret header or a service account for this
// Do not do this in a real application please
const HASURA_ADMIN_SECRET = "please-dont-actually-do-this"

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
  "Access-Control-Max-Age": "86400",
}

interface User {
  id: number
  email: string
  password: string
}

////////////////////////////////////////////////////////
// AUTH STUFF
////////////////////////////////////////////////////////

function generateHasuraJWT(user: User) {
  // Really poor pseudo-example of AuthZ logic
  const isAdmin = user.email == "admin@site.com"

  const claims = {} as any
  claims["https://hasura.io/jwt/claims"] = {
    "x-hasura-allowed-roles": isAdmin ? ["admin", "user"] : ["user"],
    "x-hasura-default-role": isAdmin ? "admin" : "user",
    "x-hasura-user-id": String(user.id),
  }

  // Don't do this, read the key from an environment var via "process.env"
  const secret =
    "this-is-a-generic-HS256-secret-key-and-you-should-really-change-it"
  return jwt.sign(claims, secret, { algorithm: "HS256" })
}

////////////////////////////////////////////////////////
// ROUTE HANDLER STUFF
////////////////////////////////////////////////////////

function makeHasuraError(code: string, message: string) {
  return new Response(JSON.stringify({ message, code }), {
    status: 400,
    headers: CORS_HEADERS,
  })
}

async function handleSignup(req: Request) {
  const payload = await req.json()
  const params = payload.input.args

  // Here you would store the password hashed, you would hash-compare when logging a user in
  // params.password = await bcrypt.hash(params.password)
  const gqlRequest = await fetch(HASURA_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Admin-Secret": HASURA_ADMIN_SECRET,
    },
    body: JSON.stringify({
      query: `
      mutation Signup($email: String!, $password: String!) {
        insert_user_one(object: {
          email: $email,
          password: $password
        }) {
          id
          email
          password
        }
      }
      `,
      variables: {
        email: params.email,
        password: params.password,
      },
    }),
  })
  const gqlResponse = await gqlRequest.json()

  const user = gqlResponse.data.insert_user_one
  if (!user)
    return makeHasuraError(
      "auth/error-inserting-user",
      "Failed to create new user"
    )

  const jwtToken = generateHasuraJWT(user as User)
  return new Response(JSON.stringify({ token: jwtToken }), {
    status: 200,
    headers: CORS_HEADERS,
  })
}

async function handleLogin(req: Request) {
  const payload = await req.json()
  const params = payload.input.args

  const gqlRequest = await fetch(HASURA_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Admin-Secret": HASURA_ADMIN_SECRET,
    },
    body: JSON.stringify({
      query: `
      query FindUserByEmail($email: String!) {
        user(where: { email: { _eq: $email } }) {
          id
          email
          password
        }
      }
      `,
      variables: {
        email: params.email,
      },
    }),
  })
  const gqlResponse = await gqlRequest.json()

  const user = gqlResponse.data.user[0]
  // if (!user) <handle case of no user created and return an error here>
  // check that user.password (hashed) successfully compares against plaintext password
  if (params.password != user.password)
    return makeHasuraError("auth/invalid-credentials", "Wrong credentials")

  const jwtToken = generateHasuraJWT(user as User)
  return new Response(JSON.stringify({ token: jwtToken }), {
    status: 200,
    headers: CORS_HEADERS,
  })
}

////////////////////////////////////////////////////////
// MAIN
////////////////////////////////////////////////////////

export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url)
  console.log("url.pathname=", url.pathname)

  switch (url.pathname) {
    case "/signup":
      return handleSignup(request)
    case "/login":
      return handleLogin(request)
    default:
      return new Response(`request method: ${request.method}`, {
        status: 200,
        headers: CORS_HEADERS,
      })
  }
}



const execute = async (variables) => {
  const fetchResponse = await fetch(
    process.env.HASURA_GRAPGHQL_ENDPOINT,
    {
      method: 'POST',
      body: JSON.stringify({
        query: process.env.HASURA_OPERATION, variables
      })
    }
  );
  const data = await fetchResponse.json();
  console.log('DEBUG: ', data);
  return data;
};




app.post('/user', async (req, res) => {
  console.log('just it is here')
  const { email, name, phone } = req.body.input;
  let hashedPhone = await bcrypt.hash(phone, 10);
  const { data, errors } = await execute({ email, name, phone: hashedPhone });
  if (errors) {
    return res.status(400).json(errors[0])
  }
  return res.json({
    ...data.insert_contact_one
  })

});









const bcrypt = require("bcrypt");

const client = require("../configs/database");

const jwt = require("jsonwebtoken");

//Login Function
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await client.query(`SELECT * FROM users WHERE email= $1;`, [email]) //Verifying if the user exists in the database
    const user = data.rows;
    if (user.length === 0) {
      res.status(400).json({
        error: "User is not registered, Sign Up first",
      });
    }
    else {
      bcrypt.compare(password, user[0].password, (err, result) => { //Comparing the hashed password
        if (err) {
          res.status(500).json({
            error: "Server error",
          });
        } else if (result === true) { //Checking if credentials match
          const token = jwt.sign(
            {
              email: email,
            },
            process.env.SECRET_KEY
          );
          res.status(200).json({
            message: "User signed in!",
            token: token,
          });
        }
        else {
          //Declaring the errors
          if (result != true)
            res.status(400).json({
              error: "Enter correct password!",
            });
        }
      })
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error occurred while signing in!", //Database connection error
    });
  };
};
