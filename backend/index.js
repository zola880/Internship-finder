import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({ dest: path.join(process.cwd(), "uploads") });

const DB_URI = process.env.MONGO_URI || "mongodb://localhost:27017/internship-finder";

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB failed:", err));

const applicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  applicantId: { type: String, required: true },
  department: { type: String, required: true },
  year: { type: String, required: true },
  bankAccount: { type: String, required: true },
  internshipId: { type: String },
  filePath: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Application = mongoose.model("Application", applicationSchema);

app.post("/api/applications", upload.single("document"), async (req, res) => {
  try {
    const { fullName, applicantId, department, year, bankAccount, internshipId } = req.body;
    if (!fullName || !applicantId || !department || !year || !bankAccount) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const appDoc = await Application.create({
      fullName,
      applicantId,
      department,
      year,
      bankAccount,
      internshipId,
      filePath: req.file?.path || ""
    });

    res.status(201).json({ success: true, applicationId: appDoc._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.get("/api/applications", async (req, res) => {
  const list = await Application.find().sort({ createdAt: -1 });
  res.json({ success: true, data: list });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
