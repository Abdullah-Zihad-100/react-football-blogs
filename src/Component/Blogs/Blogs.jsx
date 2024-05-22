import PropTypes from "prop-types"
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({
  handleBookmarks,handleReadingTime}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("Details.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3 w-full mx-auto">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleBookmarks={handleBookmarks}
          handleReadingTime={handleReadingTime}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes={
handleBookmarks:PropTypes.func,
handleReadingTime:PropTypes.func
}
export default Blogs;
