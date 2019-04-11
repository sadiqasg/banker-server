function toLowerCase(str){
    return str.toLowerCase();
}
function toUpperCase(str){
    return str.toUpperCase();
}
function contains(str, substring, fromIndex){
    return str.indexOf(substring, fromIndex) !== -1;
}
function repeat(str, n){
    return (new Array(n + 1)).join(str);
}

module.exports = {
    toLowerCase: toLowerCase,
    toUpperCase: toUpperCase,   
    contains: contains,
    repeat: repeat
};