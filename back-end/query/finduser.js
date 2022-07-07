const FIND_USER = `
query finduser($username: String!) {
    user(where: {username: {_eq: $username}}, limit: 1) {
        id
        email
        username
        password
    }
}
`
module.exports = FIND_USER;