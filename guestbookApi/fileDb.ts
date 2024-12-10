import {promises as fs} from 'fs';
import {GuestBook, GuestBookApi} from "./types";

const file = './reviews.json';
let fileData: GuestBook[] = [];

const fileDb = {
    async init() {
        try{
            const content = await fs.readFile(file);
            fileData = await JSON.parse(content.toString());
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