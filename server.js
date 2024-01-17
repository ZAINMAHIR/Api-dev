const express = require('express');
const app = express();
app.use(express.json());

let UserList=[
    {   
        id:1,
        name:"Mohammed Johar",
        Age:22,
        married:true,
    },
    {
        id:2,
        name:"Alex maa",
        Age:24,
        married:true,
    },
    {
        id:3,
        name:"James Mwangi",
        Age:22,
        married:false,
    },
    {
        id:4,
        name:"Fred Obamma",
        Age:22,
        married:false,
    },
];

app.get("/users",(req,res)=>{
    res.status(200).json(UserList);
});

app.post("/users",(req,res)=>{
  //grab data sent by client 
  //Add item to the Userlist
  //Return new list to have a visual confirmation 


const newUser=req.body;
UserList.push(newUser);
res.json(UserList);
});

app.put("/users",(req,res)=>{
    //grab new name
    //Lopp through List and Update the names 
    // Return new list

    const newName=req.body.newName;
    //did not use map method here for simplicity
    for(let i = 0; i<UserList.length; i++){
        UserList[i].name=newName;
    }
    res.json(UserList);
});

app.delete("/users/id:",(req,res)=>{
    //get the id 
    //return the id 
    //return the list
    let foundid=false; //error handling 
    const id =req.params.id;
    //using the splice method 
    for(let i=0; i<UserList.length; i++){
        if(UserList[i].id==id){
            UserList.splice(i, 1)
            foundid=true
        }
    }
    if(!foundid){
        res.status(404).json({error:"User id not found"});
    }
    res.json(UserList);
});
app.listen('5000',()=>{
    console.log("server running on port 5000");
});