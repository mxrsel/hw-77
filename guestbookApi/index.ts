import express from "express";
import cors from "cors";
import fileDb from "./fileDb";
import reviewsRouter from "./routers/reviews";

const fs = require('fs');

const app = express();
const port = 8000;

app.use(cors());
app.use('/reviews', reviewsRouter)
app.use(express.static('public'));
app.use(express.json());


const run = async () => {
    if(fs.existsSync('./reviews.json')) {
        await fileDb.init()
    } else {
        fs.writeFile('./reviews.json', JSON.stringify([]));
    }

    app.listen(port, () => {
        console.log(`Server is running on port: http://localhost:${port}`);
    })
}

run().catch(err => console.log(err));