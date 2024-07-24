const mongoose=require("mongoose");

const DesignerSchema=new mongoose.Schema(
    {
        username:{type:String, required:true,unique:true},
        email:{ type:String, required:true, unique:true},
        password:{type:String, required:true},
        isAdmin:{
            type:Boolean,
            default:false
        },
    },
    {timestamps:true}
);

module.exports=mongoose.model("",UserSchema);
module.exports=mongoose.model("Designer",DesignerSchema);