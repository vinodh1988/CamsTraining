var express=require('express');
var route= express.Router();
var app=express();
var fs=require("fs");

route.get("/people",function(request,response){

     fs.readFile("data/people.txt","utf8",function(err,data){
         if(err)
           response.send("no Data found");
         else
           {
               let people=JSON.parse(data);
               response.render("people",{people:people});
           }
     })
});

app.get("/dummy",function(request,response){
    response.send("Independent route working");
});

app.listen(4003,function(){
    console.log("listening @4003");
});

module.exports=route;

