"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toursSummary_1 = require("./toursSummary");
const toursReviews_1 = require("./toursReviews");
class TourDetail extends toursSummary_1.ToursSummary {
    constructor(tourData, reviewData) {
        super(tourData);
        this.tourCategory = tourData.tourCategory;
        this.tourDescription = tourData.tourDescription;
        this.price = tourData.price;
        this.currency = tourData.currency;
        this.reviews = reviewData.map((item) => new toursReviews_1.Review(item));
    }
}
exports.TourDetail = TourDetail;
