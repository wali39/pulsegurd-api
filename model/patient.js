const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
    heartbeat: Number,
    spo2: Number,
    ecg: [Number]
});

module.exports=mongoose.model("patients",patientSchema);

