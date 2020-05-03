import {ITourData} from '../../interfacesAndTypes/types'

export class ToursSummary {
    id: string;
    location: string;
    tourTitle:string;
    constructor(data:ITourData){
        this.id = data.id;
        this.location = data.location;
        this.tourTitle = data.tourTitle;
    }
}