import mongoose from 'mongoose'

const productschema=new mongoose.Schema(
  {
    description:{
      required: true,
      type: string,
    },
    name:{
      required:true,
      type: string,
    },
    productimage:{
      type: string,
    },
    price:{
      type: Number,
      default:0,
    },
    stock:{
      default:0,
      type: Number,
    },
    category:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
    },
  },
  {timestamps: true}
);



export const product=mongoose.model("product",productschema);