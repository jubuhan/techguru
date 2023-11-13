import { Link,useParams } from "react-router-dom";

import { useState } from "react";


const BlogList = ({ blogs, title }) => {


const [btnvalue,setbtnvalue]=useState("see more..")
  const [isDivVisible, setDivVisible] = useState(false);

  const toggleDiv = () => {
    setDivVisible(!isDivVisible);
    if(!isDivVisible){
      setbtnvalue("see less")
    }else{
      setbtnvalue("see more")
    }
    
  };


  return (
    <div className="blog-list">
      <h1>{title}</h1>

      {blogs.map((blog) => (
         
        <div className="blogs">
        
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.Title}</h2>
            <p>writen by {blog.Author}</p>
            <button onClick={toggleDiv}>{btnvalue}</button>
            
        
          </div>
          {isDivVisible&&<div className="blog-content">
            <p>{blog.Domain}</p>
            <p>{blog.content}</p>
          </div>}
          </div>
      ))}
    </div>
  );
};

export default BlogList;






