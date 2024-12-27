import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://arihant7835:arihant123@cluster0.hioou.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


