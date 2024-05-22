import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-white rounded-md">
      <h3 className="text-md font-semibold p-2 m-4">{title}</h3>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark:PropTypes.object,
};
export default Bookmark;
