import express from "express";
import bodyParser from "body-parser";
import { apiGetTours } from "./api/tours/apiGetTours";
import { apiGetToursDetails } from "./api/tours/apiGetToursDetails";
import { apiCreateTours } from "./api/tours/apiCreateTours";
const app = express();
const jsonParser = bodyParser.json();
app.get("/", (req, res, next) => {
  res.send("typescript with node is awesome");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/tours", apiGetTours);
app.get("/tours/:id", apiGetToursDetails);
app.post("/tours", jsonParser, apiCreateTours);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started at port: ${PORT}`));
