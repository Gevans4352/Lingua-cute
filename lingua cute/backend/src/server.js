import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.json({ message: 'LinguCute API is running!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});


// yPYN9G50JyYsDmEC
//darasimifemiolagundoye_db_user
//npm install mongodb
