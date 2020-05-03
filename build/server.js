"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const apiGetTours_1 = require("./api/tours/apiGetTours");
const apiGetToursDetails_1 = require("./api/tours/apiGetToursDetails");
const apiCreateTours_1 = require("./api/tours/apiCreateTours");
const app = express_1.default();
const jsonParser = body_parser_1.default.json();
app.get("/", (req, res, next) => {
    res.send("typescript with node is awesome");
});
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get("/tours", apiGetTours_1.apiGetTours);
app.get("/tours/:id", apiGetToursDetails_1.apiGetToursDetails);
app.post("/tours", jsonParser, apiCreateTours_1.apiCreateTours);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started at port: ${PORT}`));
