import cors from "cors";
import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = 8000;
app.use(cors());
app.get("/", (req: Request, res: Response) => {
    console.log("Request body: ", req.body);
    res.send("Hi from this app");
})

app.listen(8000, () => {
    console.log(`server running on port: ${PORT}`);
})