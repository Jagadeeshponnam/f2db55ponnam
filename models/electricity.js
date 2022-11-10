const mongoose = require("mongoose")
const electricitySchema = mongoose.Schema({
Edistributor_Name: String,
electricity_gen: Number,
elctricity_type: String
})
module.exports = mongoose.model("electricity",
electricitySchema)