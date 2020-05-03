import {DataStore} from '../../data/data'
import {RequestHandler} from 'express'
import {TourDetail} from '../../models/shared/toursDetails';
import {  IReview, ITourData} from '../../interfacesAndTypes/types'
export const apiGetToursDetails:RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const selectedTour = DataStore.tours.find((tour:ITourData) => tour.id === tourID);
    if(selectedTour){
        const selectedReviews = DataStore.reviews.filter((review:IReview) => {
            return review.tourID === tourID;
        });
        res.json(new TourDetail(selectedTour, selectedReviews));
    }else {
        res.json({"status": "faild", "message": "Element Not Found"})
    }
} 
