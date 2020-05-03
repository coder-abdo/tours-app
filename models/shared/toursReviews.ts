import {  IReview} from '../../interfacesAndTypes/types'
export class Review {
    tourID: number | string;
    reviewTitle: string
    reviewLongText: string
    stars: number
    constructor(data: IReview) {
        this.tourID = data.tourID
        this.reviewTitle = data.reviewTitle;
        this.reviewLongText = data.reviewLongText;
        this.stars = data.stars;
    }
}