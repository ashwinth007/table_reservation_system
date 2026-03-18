import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js";
export const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;

  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please fill the full reservation form!", 400));
  }

  try {
    await Reservation.create({ firstName, lastName, email, date, time, phone });
    res.status(201).json({ success: true, message: "Reservation Sent Successfully!" });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};
export const getAllReservations = async (req, res, next) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json({ success: true, reservations });
  } catch (error) {
    return next(new ErrorHandler("Failed to fetch reservations", 500));
  }
};

// UPDATE
export const updateReservation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Reservation.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return next(new ErrorHandler("Reservation not found", 404));
    }

    res.status(200).json({ success: true, message: "Reservation Updated Successfully!", updated });
  } catch (error) {
    return next(new ErrorHandler("Update failed", 500));
  }
};