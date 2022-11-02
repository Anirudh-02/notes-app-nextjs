import Link from "next/link"
import notesModel from "../../db/db"
import * as mongoose from "mongoose"
import CreateNote from "./CreateNote"
import styles from './Notes.module.css'

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

async function getNotes() {
    await mongoose.connect('mongodb://localhost:27017/notes')
    let notes = await notesModel.find()
    return notes
}

export default async function NotesPage() {
    const notes = await getNotes()

    return (
        <div>
            <h1>Notes</h1>
            <div className={styles.grid}>
                {notes?.map((note) => {
                    return <Note key={note.id} note={note} />
                })}
            </div>

            <CreateNote />
        </div>
    )
}

function Note({ note }: any) {
    const { _id, title, content, created } = note || {}
    const createdDate = new Date(created).toLocaleDateString()
    const id = _id.toString()

    return (
        <div className={styles.note}>
            <h3>{title}</h3>
            <h5><br></br>{content}</h5>
            <p><span>Date: </span>{createdDate}</p>
        </div>
    )
}