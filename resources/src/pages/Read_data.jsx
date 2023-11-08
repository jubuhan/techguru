
import { useState } from "react"
import { db } from "../firebase_setup/firebase"
import {collection, addDoc, Timestamp} from 'firebase/firestore'

export default function Read_data() {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [domain, setDomain] = useState("")
    const [content, setContent] = useState("")
    const [email, setEmail] = useState("")

    const submitForm = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'blogs'), {
              Title: title,
              Author:author,
              Domain:domain,
              content:content,
              email:email,
              createdAt: Timestamp.now()
            })
          } catch (err) {
            alert(err)
          }
    }


    return (
        <div className="read-container">
            <form className="add">
                <label htmlFor="title">Title:</label>
                <input style={{color:"#000"}} value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" required />
                <label htmlFor="author">Author:</label>
                <input style={{color:"#000"}} value={author} onChange={(e) => setAuthor(e.target.value)} type="text" name="author" required />
                <label htmlFor="domain">Domain:</label>
                <input style={{color:"#000"}} value={domain} onChange={(e) => setDomain(e.target.value)} type="text" name="domain" required />
                <label htmlFor="content">Text:</label>
                <textarea style={{color:"#000"}} value={content} onChange={(e) => setContent(e.target.value)} name="content" required ></textarea>
                <label htmlFor="email">Email</label>
                <input style={{color:"#000"}} value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" required />

                <button type="submit" onClick={submitForm}>add new blog</button>
            </form>
        </div>
    )
}


