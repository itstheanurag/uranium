const str = " FunctionUp "

const trim = function(){
    return str.trim()
}

const upperCase = function(){
    return str.toUpperCase()
}

const lowerCase = function(){
    return str.toLowerCase()
}

module.exports = {trim, upperCase, lowerCase}