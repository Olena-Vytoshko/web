import { mongoose } from "mongoose"

const userSchema = new mongoose.Schema({
  login: { type: String, default: null },
  password: { type: String },
  token: { type: String },
});

export default mongoose.model("user", userSchema);