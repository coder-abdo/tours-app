import { RequestHandler } from "express";
import uuid from "uuid/v4";
import { DataStore } from "../../data/data";
export const apiCreateTours: RequestHandler = (req, res, next) => {
  const newTour = {
    id: uuid(),
    location: req.body.location || "",
    tourTitle: req.body.tourTitle || "",
    tourCategory: req.body.tourCategory || "",
    currency: req.body.currency || "",
    tourDescription: req.body.tourDescription || "",
    price: req.body.price || 0,
  };
  DataStore.tours.push(newTour);
  res.send("new tour added");
};
