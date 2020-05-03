"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = __importDefault(require("uuid/v4"));
const data_1 = require("../../data/data");
exports.apiCreateTours = (req, res, next) => {
    const newTour = {
        id: v4_1.default(),
        location: req.body.location || "",
        tourTitle: req.body.tourTitle || "",
        tourCategory: req.body.tourCategory || "",
        currency: req.body.currency || "",
        tourDescription: req.body.tourDescription || "",
        price: req.body.price || 0,
    };
    data_1.DataStore.tours.push(newTour);
    res.send("new tour added");
};
