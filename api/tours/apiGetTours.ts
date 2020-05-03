import { ITourData } from '../../interfacesAndTypes/types'
import {DataStore} from '../../data/data'
import {RequestHandler} from 'express'
import { ToursSummary} from '../../models/shared/toursSummary'
export const apiGetTours:RequestHandler = (req, res, next) => {
    res.json(DataStore.tours.map((tour:ITourData) => new ToursSummary(tour)))
}