import { Router } from "express";
import PostController from "./PostController.js";

const router = new Router()

router.get("/posts", PostController.getAll)
router.post("/posts", PostController.create)
router.put("/posts", PostController.put)
router.delete("/posts/:id", PostController.delete)

export default router;