export const sendMessage = async (req, res) => {
  res.status(200).json({ message: "Message sent successfully" });
};
