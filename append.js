var fs=require("fs")

// add new content in excisting file
fs.appendFile('sum.js','console.log("hashara")',function(err){
console.log("job done")
})

/* for the delete file
fs,unlink('filename.js',function(err){
    console.log("deleted") 
 */
