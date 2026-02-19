// import jwt from "jsonwebtoken"
import { readData, writeData } from "../db/dall.js"
import {config} from "dotenv";
config()


export async function ReadingData() {
    const data = await readData();
    return data
}


export async function KeepingScore(score){
    const sendScore = await writeData(score)
    return sendScore
}