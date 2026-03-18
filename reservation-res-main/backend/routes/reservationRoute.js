import express from "express";
import {
  send_reservation,
  getAllReservations,
  updateReservation,
} from "../controller/reservation.js";

const router = express.Router();

router.post("/send", send_reservation);
router.get("/", getAllReservations);
router.put("/:id", updateReservation);

export default router;