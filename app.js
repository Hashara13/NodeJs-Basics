const express=require('express');
const app=express();
app.get('/',function(req,res){

    // sent response to client
    res.send("hello") 
})
app.get('/hashara',function(req,res){
    
   
    res.send("hashara") 
})
app.get('/hashara/:id',function(req,res){
    
   const id=req.params.id 
   // pass id to what client enter 
   // can replace params by query for the name 
    res.send('hey dude '+id) 
})

// passing port number to server
app.listen(9000,function(req,res){
console .log("running")
}); 

