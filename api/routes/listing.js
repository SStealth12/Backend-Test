import express from "express";

import { createListing, deleteListing, getListing, getAllListing, updateListing } from "../controllers/listing.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createListing);

//UPDATE
router.put("/:id", verifyAdmin, updateListing);

//DELETE
router.delete("/:id", verifyAdmin, deleteListing);

//GET
router.get("/find/:id", getListing);

//GET ALL
router.get("/", getAllListing);

export default router