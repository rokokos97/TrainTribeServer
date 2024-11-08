import express from "express";
import usersRoutes from "./users.routes.js";
import authRoutes from "./auth.routes.js";

const router = express.Router({mergeParams: true});

router.use("/users", usersRoutes);
router.use("/auth", authRoutes);

export default router;
