import Profile from '../../images/profile.png'
const Header = () => {
    return (
      <div>
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-4xl font-semibold">Knowledge Cafe</h2>
          <img src={Profile} />
        </div>
        <hr />
      </div>
    );
};

export default Header;