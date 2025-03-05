const mongoose = require("mongoose");


const user = mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email:{
    type:String,
    require:true
  },
  password:{
    type:String,
    require:true
  },
  address:{
    type: mongoose.Types.ObjectId,
    ref:'Addresses',
  },
  favorites:{
    type:mongoose.Types.ObjectId,
    ref:'favorits',
  }
  
});

export default mongoose.models.User || mongoose.model("User", user);