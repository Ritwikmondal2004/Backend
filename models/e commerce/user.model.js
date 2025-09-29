import mongoose from 'mongoose'

const userscheme=new mongoose.Schema(
  {
    usename:{
      type: String,
      required:true,
      unique: true,
      lowercase: true,
    },
    email:{
      type: String,
      required:true,
      unique: true,
      lowercase: true,
    },
    password:{
      type: String,
      required:true,
    },
  },{timestamps: true}
) 