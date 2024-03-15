import  mongoose from "mongoose";

export const Database=async()=>{
    try {
        const Db = await mongoose.connect("mongodb+srv://chmukul2002:Mukul123@mukul.vopbxyx.mongodb.net/Todo",{useNewUrlParser:true,useUnifiedTopology:true});
    } catch (error) {
        console.log("Error in the Connecting the Database ", error)
    }

}
