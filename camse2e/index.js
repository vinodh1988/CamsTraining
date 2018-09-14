var express=require("express");
 
var reports=require('./app/server/reports/reports');

var app=express();
var path=require("path");

var fs=require("fs");


//Middleware to parse incoming request with datar
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

public=path.join(__dirname,"app/client/public");

//configuring the view engine for the application
app.set('view engine','pug')
app.set('views',path.join(public,'views'));

//To access static resources
app.use(express.static(path.join(public,"styles")));
app.use(express.static(path.join(public,"scripts")));
app.use(express.static(path.join(__dirname,"node_modules")));

//Request handling for url mappings
app.get("/Home",function(request,response){
    console.log(request.headers);
    response.sendFile(path.join(public,"index.html"));
})
app.get("/",function(request,response){
   response.send("Hey!!!! How are you!!!!")
});

app.get("/hello",function(request,response){
    response.send("Hello!!! How are you");
})

app.post("/store",function(request,response){
    let sno=request.body.sno;
    let name=request.body.name;
    let city=request.body.city;

    fs.readFile("data/people.txt",'utf8',function(err,data){
       if(err)
          response.send("Unable to store file");
        
        let people= JSON.parse(data);
        let person={sno:sno,name:name,city:city};
        people.push(person);

        fs.writeFile('data/people.txt',JSON.stringify(people),function(err){
            if(err)
             response.send("Unable to store");
             
            else
             response.sendFile(path.join(public,"index.html"));
        })
    });

    
})

app.use("/reports",reports);

//Creating listener process (web server)
app.listen("4002",function(){
    console.log("Server is running....@4002")
})