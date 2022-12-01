const mongoose = require("mongoose")
const electricitySchema = mongoose.Schema({
Edistributor_Name:{type: String, minlength:1, maxlength:20},
electricity_gen: {type: Number, min:1000, max:10000},
elctricity_type: {type: String, minlength:1, maxlength:20},
})
module.exports = mongoose.model("electricity",
electricitySchema)