import React from 'react'
import { doc,deleteDoc } from 'firebase/firestore';
import { getAuth} from 'firebase/auth';
import { app,db} from '../firebase_setup/firebase';
 const Collection=({blogs})=> {
 
const deleteblog=async(blogid)=>{
const docRef = doc(db,"blogs",blogid);

deleteDoc(docRef)
.then(() => {
    console.log("Entire Document has been deleted successfully.")
})
.catch(error => {
    console.log(error);
})
}


  

  const auth = getAuth(app)
  const usermail = auth.currentUser?.email
  
  
  const data= blogs.filter(item => item.email === usermail);
  
  return (
    <div className="collections">
              {data.map((blog) => (
         
        <div className="blogs">
        
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.Title}</h2>
            <p>writen by {blog.Author}</p>
            
            
        
          </div>
          <div className="blog-content">
            <p>{blog.Domain}</p>
            <p>{blog.content}</p>
            
          </div>
          <button onClick={()=>deleteblog(blog.id)}>delete</button>
          </div>
      ))}
    </div>
    
  )
}
export default Collection
