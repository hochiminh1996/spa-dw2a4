import express from "express"
import cors from "cors";
import { routes } from "./routes";


const app = express();

app.use(cors());
app.use(express.json());//verifica se há json na requisição
app.use(routes);

app.listen(3333, () => {
    console.log("HTTP SERVER RUNNING!!");
})