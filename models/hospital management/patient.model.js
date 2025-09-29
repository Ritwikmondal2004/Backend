import mongoose from "mongoose"

const patientschema =new mongoose.Schema(
{
  name:{
    type: String,
    required: true,
  },
  diagonoseWith:{
    type: String,
    required: true,
  },
  address:{
    type: String,
    required: true,
  },
  age:{
    type: String,
    required: true,
  },
  gender:{
    type: String,
    enum:['M','F','T'],
    required: true,
  },
  bloodGroup:{
    type: String,
    required: true,
  },
  admittedIn:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  },
},
{timestamps: true}
);


export const Patient =mongoose.model("Patient",patientschema);