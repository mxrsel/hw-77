import express from "express";
import fileDb from "../fileDb";
import {GuestBookApi} from "../types";
import {imagesUpload} from "../multer";
const reviewsRouter = express.Router();

reviewsRouter.get('/', async(req, res) => {
    const reviews = await fileDb.getReviews();
    res.send(reviews)
})

reviewsRouter.post('/', imagesUpload.single('image'), async(req, res) => {

    const review: GuestBookApi = {
        name: req.body.name?.trom() || 'anonymous',
        description: req.body.description,
        image: req.file ? 'images/' +  req.file.filename : null
    };

    const createdReviews = await fileDb.createReview(review);
    res.send(createdReviews);
})

export default reviewsRouter