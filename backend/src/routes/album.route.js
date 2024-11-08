import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Get album routes");
});

export default router;
