import mongoose from "mongoose";

const pickingSchema = mongoose.Schema({
    weight: { type: Number, required:true },
    createdAt: { type: Date, default: new Date().toISOString()},
});

const PickingSchema = mongoose.model('PickingSchema', pickingSchema);

export default PickingSchema;