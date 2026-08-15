const validator = require("fastest-validator")
const v = new validator()

const schema = {
    name: {
        type: "string",
        required: true
    },
    username: {
        type: "string",
        required: true
    },
    email: {
        type: "email",
        required: true
    },
    phone: {
        type: "string",
        required: true
    },
    password: {
        type: "string",
        required: true
    },
    confirmPassword: {
        type: "equal",
        field: "password",
        required: true
    },
    $$strik: "true"
}

const check = v.compile(schema)

module.exports = check