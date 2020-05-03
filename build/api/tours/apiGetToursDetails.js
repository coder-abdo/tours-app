"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const toursDetails_1 = require("../../models/shared/toursDetails");
exports.apiGetToursDetails = (req, res, next) => {
    const tourID = req.params.id;
    const selectedTour = data_1.DataStore.tours.find((tour) => tour.id === tourID);
    if (selectedTour) {
        const selectedReviews = data_1.DataStore.reviews.filter((review) => {
            return review.tourID === tourID;
        });
        res.json(new toursDetails_1.TourDetail(selectedTour, selectedReviews));
    }
    else {
        res.json({ "status": "faild", "message": "Element Not Found" });
    }
};
