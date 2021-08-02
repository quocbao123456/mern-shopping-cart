const bcrypt = require("bcryptjs");

const users = [
    {
        username: "admin",
        email: "admin@gmail.com",
        password: bcrypt.hashSync("123456", 8),
    },
];

module.exports = users;
