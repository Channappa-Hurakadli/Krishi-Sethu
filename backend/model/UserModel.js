const mongoose=require("mongoose")

const userSchema = new mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  Image_url:{ type:String},
  role:{type:String,default:"general"},
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;