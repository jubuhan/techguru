import React from 'react'
 const Collection=({blogs})=> {
  
  return (
    <div className="collections">
              {blogs.map((blog) => (
         
        <div className="blogs">
        
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.Title}</h2>
            <p>writen by {blog.Author}</p>
            
            
        
          </div>
          <div className="blog-content">
            <p>{blog.Domain}</p>
            <p>{blog.content}</p>
          </div>
          </div>
      ))}
    </div>
    
  )
}
export default Collection
