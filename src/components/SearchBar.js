import { FiSearch } from "react-icons/fi";
import { IoIosMegaphone } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { BsFillQuestionCircleFill, BsFillPersonFill } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div><FiSearch className="icon-close" />Search...</div>
      <div>
        <IoIosMegaphone className="icon" />
        Feedback?
        <IoNotifications className="icon-block" />
        <BsFillQuestionCircleFill className="icon" />
        <BsFillPersonFill className="icon" />
      </div>
    </div>
  );
}

export default SearchBar;