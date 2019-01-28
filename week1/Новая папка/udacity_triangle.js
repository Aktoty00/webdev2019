function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}
function buildTriangle(x){
    var res = "";
    for (var i = 1; i <= x; i++){
        res+=makeLine(i);
    }
    return res;
}
console.log(buildTriangle(10));