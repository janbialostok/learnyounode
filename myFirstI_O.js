var filePath = process.argv[2];
var fs = require('fs');
var buf = fs.readFileSync(filePath);
var str = buf.toString();
var fileArr = [];
fileArr = str.split('\n');
var lineTotal = fileArr.length - 1;
console.log(lineTotal);