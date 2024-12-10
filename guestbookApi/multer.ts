import multer from "multer";
import config from "./config";
import path from 'path'
import {promises as fs} from 'fs'
import {randomUUID} from "node:crypto";

const imageStorage = multer.diskStorage({
    destination: async (_req, _file, cb) => {
        const destDIr = path.join(config.publicPath, 'images');
        await fs.mkdir(destDIr, {recursive: true});
        cb(null, destDIr);
    },
    filename: (req, file, cb) => {
        const ex = path.extname(file.originalname);
        cb(null, 'images' + randomUUID() + ex);
    }
});

export default imageStorage;