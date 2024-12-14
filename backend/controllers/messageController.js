import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields required",
      });
    }

    await Message.create({ name, email, message });
    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      let errorMessage = "";
      if (err.errors.name) {
        errorMessage += err.errors.name.message + "";
      }
      if (err.errors.email) {
        errorMessage += err.errors.email.message + "";
      }
      if (err.errors.message) {
        errorMessage += err.errors.message.message + "";
      }
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
