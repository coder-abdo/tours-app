"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const toursSummary_1 = require("../../models/shared/toursSummary");
exports.apiGetTours = (req, res, next) => {
    res.json(data_1.DataStore.tours.map((tour) => new toursSummary_1.ToursSummary(tour)));
};
