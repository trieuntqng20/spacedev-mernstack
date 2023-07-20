import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rootRoutes from "@src/routes";
dotenv.config();

/* ============ App Configs =========== */
const app = express();
const PORT = process.env.PORT || 8800;

/* ============ Middlewares =========== */
app.use(express.json());
app.use(cors());

/* ============== Routes ============== */
app.use("/api/v1/", rootRoutes);

/* ============ App Listen ============ */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
