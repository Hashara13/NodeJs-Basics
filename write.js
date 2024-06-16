var fs=require("fs")

// if want to create file need **filename,**file content,**any other need in current file
fs.writeFile('neww.js','console.log("hashara")',function(err){
console.log("job done")
})