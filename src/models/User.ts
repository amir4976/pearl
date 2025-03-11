const mongoose = require("mongoose");


const user = mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    default: "user",
  },
  lastName: {
    type: String,
    default: "user",
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
    default:null
  },
  favorites:{
    type:mongoose.Types.ObjectId,
    ref:'favorits',
    default:null
  },
  role:{
    type:String,
    default:'USER'
  },
  refreshToken:{
    type:String,
    default:null
  }
  
});

export default mongoose.models.User || mongoose.model("User", user);