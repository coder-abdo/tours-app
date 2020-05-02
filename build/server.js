"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("./data/data");
const app = express_1.default();
app.get("/", (req, res, next) => {
    res.send(data_1.DataStore.tours);
});
app.get("/tours", (req, res, next) => {
    res.send("tours here!");
});
app.post("/tours", (req, res, next) => {
    res.send("add tours here!");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started at port: ${PORT}`));
