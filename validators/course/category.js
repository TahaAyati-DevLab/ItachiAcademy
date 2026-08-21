const validator = require("fastest-validator")
const v = new validator()

const schema = {
    title: {
        type: "string",
        min: 3,
        max: 50,
        required: true,
    },
    href: {
        type: "string",
        min: 3,
        max: 50,
        required: true
    },
    $$strict: true
}

const check = v.compile(schema)

module.exports = check