
import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json());//verificando se há json no envio

app.use(routes);


app.listen(3333, () => {
    console.log("SERVER RUNNING")
})