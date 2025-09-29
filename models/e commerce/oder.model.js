import mongoose from 'mongoose'

const orderitemschema=new mongoose.Schema(
  {
    productId:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"Product",
    },
    quantity:{
      type:Number,
      required: true,
    },
  },
);

const orderschema=new mongoose.schema(
  {
    orderprice:{
      type:Number,
      required: true,
    },
    customer:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
    },
    orderitem:{
      type:[orderitemschema],
    },
    address:{
      type: String,
      required:true,
    },
    status:{
      type: String,
      enum:['PENDING','CANCELLED','DELIVERED'],
      default: 'PENDING',
    },
  },
  {timestamps: true}
);

export const product = mongoose.model('order',orderschema);