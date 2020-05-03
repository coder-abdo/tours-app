import {ITourData, IReview} from '../../interfacesAndTypes/types'
import {  ToursSummary } from "./toursSummary";
import { Review } from "./toursReviews";

export class TourDetail extends ToursSummary {
    tourCategory: string | any;
    tourDescription: string | any;
    price: number | any;
    currency: string | any;
    reviews: Review[]
    constructor(tourData: ITourData, reviewData: IReview[]) {
        super(tourData);
        this.tourCategory = tourData.tourCategory;
        this.tourDescription = tourData.tourDescription;
        this.price = tourData.price;
        this.currency = tourData.currency;
        this.reviews = reviewData.map((item: IReview) => new Review(item));
    }
}