import mongoose from "mongoose"

const medical_recordschema =new mongoose.Schema(
{

},{timestamps: true}
);

export const medical_record=mongoose.model('Model record',medical_recordschema);