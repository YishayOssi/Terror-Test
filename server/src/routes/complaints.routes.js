import express from 'express';
export const Router = express.Router();
import { Bringingdata, sendScore } from '../controllers/complaints.controller.js';





Router.get("/data", Bringingdata)

Router.post("/save", sendScore)


