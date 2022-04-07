const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  Category:{
    type: Schema.Types.ObjectId,
    ref: "productcategories"
   },
   keywords : {
     type : String,
     required  :true
   }
});
module.exports = mongoose.model("products", productSchema);