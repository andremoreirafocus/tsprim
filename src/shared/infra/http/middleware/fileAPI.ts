import multer, { Multer } from "multer";
import {resolve} from "path";
import crypto from "crypto";
import {promises as fsp} from "fs";

const HASH_SIZE = 16;
type FileUploader = Multer;

function fileUploader(folder: string) {
  return multer({
    storage: multer.diskStorage({
      destination: resolve(__dirname, "..", "..", folder),
      filename: (request, file, callback) => {
        const fileHash = crypto.randomBytes(HASH_SIZE).toString("hex");
        const fileName = `${fileHash}-${file.originalname}`;
        return callback(null, fileName);
      }
    })
  })
}

async function fileRemove(folder: string, fileName: string) {
  const fullPathFileName = resolve(__dirname, "..", "..", folder, fileName)
  try {
     await fsp.stat(fullPathFileName);
     await fsp.unlink(fullPathFileName)
  } catch (err) {
    console.log(`File ${fullPathFileName} does not exist!`)
  }
}

export { fileUploader, FileUploader, fileRemove }