import mongoose  from "mongoose";

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
}
,
{
    timestamps:true
});

const user = mongoose.model('User',UserSchema);

export default user;