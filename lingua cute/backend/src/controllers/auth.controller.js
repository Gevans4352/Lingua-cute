export const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  // TEMPORARY: just echo the user
  return res.status(200).json({
    message: "Login successful",
    user: { email },
  });
};
