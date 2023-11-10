import React from 'react'

export default function Blogdetail(blog) {
  return (
    <div className="career-details">
    <h2> {blog.Title}</h2>
    <p> {blog.Author}</p>
    <p> {blog.Domain}</p>
    <p> {blog.content}</p>
    </div>
  )
}
