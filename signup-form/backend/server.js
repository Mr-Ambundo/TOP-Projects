import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoutes from "./src/auth.js";

dotenv.config();

const app = express();
const PORT = 3000;  

app.use(cors())
app.use(express.json());


app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URI).then(console.log("✅ MongoDB Connected")).catch(err => console.log("❌ MongoDB Error:",err));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})