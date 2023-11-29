const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://naccdeptofcs:deptofcs@cluster0.ra0imjt.mongodb.net/student?retryWrites=true&w=majority")
.then(()=>{console.log("db connected");
})
.catch(err=>console.log(err));

const studentschema =new mongoose.Schema(
    {
        Admno:Number,
        Name:String,
        Age:Number,
        Course:String
    }
)
var studentmodel =mongoose.model("student",studentschema)
module.exports=studentmodel;

