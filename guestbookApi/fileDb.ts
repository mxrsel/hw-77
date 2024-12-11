import {promises as fs} from 'fs';
import {GuestBook, GuestBookApi} from "./types";
import crypto from 'crypto';

const file = './reviews.json';
let fileData: GuestBook[] = [];

const fileDb = {
    async init() {
        try{
            const content = await fs.readFile(file);
            fileData = await JSON.parse(content.toString()) as GuestBook[];
        } catch (e) {
            console.error(e);
        }
    },
    async getReviews () {
        return fileData
    },
    async createReview (reviewInfo: GuestBookApi) {
        const id = crypto.randomUUID();
        const review = {id, ...reviewInfo}
        fileData.push(review);
        await this.save();
        return review;
    },
    async save() {
        return fs.writeFile(file, JSON.stringify(fileData));
    }
}

export default fileDb