export interface IReview {
    tourID: number | string;
    reviewTitle: string;
    reviewLongText: string;
    stars: number;
}

export interface ITourData {
    id: string;
    location: string;
    tourTitle:string;
    tourCategory?:string;
    tourDescription?:string;
    price?:number;
    currency?:string;
}