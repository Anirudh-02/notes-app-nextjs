import { Schema, model } from 'mongoose'

let notesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

export default model('notes', notesSchema)