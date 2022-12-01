const mongoose = require("mongoose")
const electricitySchema = mongoose.Schema({
Edistributor_Name: String,
electricity_gen: {type: Number, min:1000, max:10000},
elctricity_type: String
})
module.exports = mongoose.model("electricity",
electricitySchema)