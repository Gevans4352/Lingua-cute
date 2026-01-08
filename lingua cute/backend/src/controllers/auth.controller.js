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
export const register = (req, res) =>{
  const { name, email, password} = req.body;

  if(!name || !email || !password){
    return res.status(400).json({
      success: false,
      message: "Please fill all fields"
    });
  }
  
  return res.status(201).json({
    success: true,
    message:"Registration successful!",
    user: {name, email}
  });
}


