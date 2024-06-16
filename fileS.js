var fs=require("fs")

// need to mention **file name, **encode type, **task(errors or datas while reading) in file reading

fs.readFile("sum.js","utf8",function(err,data){

console.log(data) 
// heree it read the data on sum.js file

})