//1.Importing
const express = require("express");
const cors=require("cors")

//2.Initializing
const app = new express();

const studentmodel =require('./model/student')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

//3.API creation
app.get('/',(request,response)=>{
    response.send("hi")
})

app.post('/new',(request,response)=>{
    console.log(request.body)
    new studentmodel(request.body).save();
    response.send("Record saved")
})

app.get('/view',async(request,response)=>{
    var data = await studentmodel.find();
    response.send(data)
})

app.put('/edit/:id',async(request,response)=>{
    let id = request.params.id;
    await studentmodel.findByIdAndUpdate(id,request.body)
    response.send("Data Updated")
})


//4.Assign Port
app.listen(3005,(request,response)=>{
    console.log("Port is running in 3005")
})
