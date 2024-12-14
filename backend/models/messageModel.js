import mongoose from "mongoose";
import vaildator from "validator";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    minLength: [3, "Name must contain at least 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    validate: [vaildator.isEmail, "Please enter a valid email"],
  },
  message: {
    type: String,
    required: [true, "Please enter your message"],
    minLength: [10, "Message must contain at least 10 characters"],
  },
});

export const Message = mongoose.model("Message", messageSchema);

export default Message;
