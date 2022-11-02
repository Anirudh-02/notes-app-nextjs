import { connect } from "mongoose";
import notes from '../../db/db'


export default async function handler(req, res) {
    await connect('mongodb://localhost:27017/notes')
    await notes.create({
        title: req.body.title,
        content: req.body.title
    })
    res.sendStatus(201)
}