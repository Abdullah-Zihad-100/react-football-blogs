import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {

    return (
      <div className="md:w-1/3 h-full bg-gray-100 rounded-lg p-5 mt-7 w-full mx-auto">
        <div className="bg-purple-200 border-purple-500 border-2 rounded-lg p-2 mb-3 font-semibold">
          <h3 className="text-xl text-purple-700">
            Spent time on read : {readingTime} min
          </h3>
        </div>
        <h3 className="text-md font-bold">
          Blogs Bookmarks : {bookmarks.length}
        </h3>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime:PropTypes.array
};
export default Bookmarks;