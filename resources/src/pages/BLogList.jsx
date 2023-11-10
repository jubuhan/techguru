import { Link,useParams } from "react-router-dom";




const BlogList = ({ blogs, title }) => {
    const {id}=useParams()
  return (
    <div className="blog-list">
      <h1>{title}</h1>

      {blogs.map((blog) => (
        <Link to='blog' content={blog}>
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.Title}</h2>
            <p>writen by {blog.Author}</p>
        
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;


