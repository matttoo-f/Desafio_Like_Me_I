const ERRORS = require("../helpers/errors")

const findError = (code) => {
    return ERRORS.filter((err) => err ===code)
}

exports.module = findError 