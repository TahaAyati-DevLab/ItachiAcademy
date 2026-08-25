const validator = require("fastest-validator")

const v = new validator()

const schema = {
    title: {
        type: "string",
        required: true
    },
    discription: {
        type:"string",
        required: true
    },
    support: {
        type: "string",
        required: true
    },
    href: {
        type: "string",
        required: true
    },
    price: {
        type: "string",
        required: true
    },
    status: {
        type: "string",
        required: true
    },
    discount: {
        type: "string",
        required: true
    },
    categoryID: {
        type: "string",
        required: true
    },
//   $$strict: true
}

const check = v.compile(schema)

module.exports = check