'use client'

import { useRouter } from "next/navigation"


import { useState } from "react"

export default function CreateNote() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const router = useRouter()

    const create = async (e: any) => {
        e.preventDefault()
        
        await fetch('http://localhost:3000/api/getNotes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                title,
                content
            })
        })
        
        setTitle('')
        setContent('')
        router.refresh()
    }

    return (
        <form>
            <h3>Create New Note</h3>
            <input type="text" name="" id="" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            <button onClick={create}>
                Create Note
            </button>
        </form>
    )
}