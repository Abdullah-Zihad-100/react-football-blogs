import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog,handleReadingTime,handleBookmarks
}) => {
  const { id, cover, title, author, author_img, date, reading_time, hashtags } =
    blog;
  //  

  return (
    <div className="my-7">
      <img
        className="rounded-md object-cover w-full"
        src={cover}
        alt=""
      />
      <div className="flex justify-between items-center my-5">
        <div className="flex justify-between items-center gap-4">
          <img
            className="rounded-full w-[60px] object-cover h-[60px]"
            src={author_img}
            alt=""
          />
          <div>
            <h5 className="font-semibold md:text-lg text-md">{author}</h5>
            <p className="text-gray-500 md:text-sm text-[13px]">
              <span>{date}</span>
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center gap-3">
          <p className="text-gray-500">{reading_time} min read</p>
          <button
            onClick={() => handleBookmarks(blog)}
            className="text-gray-500 text-2xl"
          >
            <CiBookmark></CiBookmark>
          </button>
        </div>
      </div>
      <h3 className="text-xl md:text-3xl leading-relaxed font-semibold">{title}</h3>
      <p>
        {hashtags.map((hash, index) => (
          <span className="me-2 text-sm hashtags text-gray-500" key={index}>
            {hash}
          </span>
        ))}
      </p>
      <button
        onClick={()=>handleReadingTime(id,reading_time)} className="text-blue-800 block my-2 underline">
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes={
  blog:PropTypes.object,
  handleBookmarks:PropTypes.func,
  handleReadingTime:PropTypes.func
}
export default Blog;
