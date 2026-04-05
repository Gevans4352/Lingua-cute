import Badge from "../models/Badge.model.js";

export const getUserBadges = async (req, res) => {
  try {
    const { userId } = req.params;

    const badges = await Badge.find({ userId });

    res.status(200).json(badges);
  } catch (error) {
    console.error("Error fetching badges:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};