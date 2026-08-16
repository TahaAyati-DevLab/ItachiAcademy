const validator = require("fastest-validator")
const v = new validator()

const schema = {
    identity:{
        type:"string",
        required:true
    },
    password:{
        type:"string",
        required:true
    },
    $$strik: true
}

const check = v.compile(schema)
module.exports = check