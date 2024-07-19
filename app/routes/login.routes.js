import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/", (req, res) => {
  res.status(200).send("Logged In");
});
