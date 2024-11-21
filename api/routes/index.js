import { Router } from "express";
const router = Router();

import ctrlTrznica from "../controllers/trznica.js";

/* GET home page. */
router.get("/trznica-seznam", ctrlTrznica.seznam);

export default router;