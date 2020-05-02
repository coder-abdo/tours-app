import express from 'express';

const app = express();

app.get("/", (req, res, next) => {
    res.send("hello world from typescript");
});
app.get("/tours", (req, res, next) => {
    res.send("tours here!")
})
app.post("/tours", (req, res, next) => {
    res.send("add tours here!")
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started at port: ${PORT}`))