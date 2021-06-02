import { BsFillTerminalFill, BsToggleOn } from "react-icons/bs";
import { RiStore2Line } from "react-icons/ri";
import { HiChevronDown, HiDocumentReport } from "react-icons/hi";
import { FcHome } from "react-icons/fc";
import { BiListCheck } from "react-icons/bi";
import { FaCube, FaMoneyBillWaveAlt } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";
import { CgArrowsExchangeV } from "react-icons/cg";
import { IoPersonCircleSharp, IoSettingsSharp } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="sidebar">

      {/* New Business Section */ }
      <div className="new-business">
        <div className="store-icon">
          <RiStore2Line />
        </div>
        <h1 className="title">New Business</h1>
        <HiChevronDown />
      </div>

      {/* Menu */ }
      <div className="sidebar-menu">
        <ul>
          <li><FcHome className="icon" />Home</li>
          <li><BiListCheck className="icon" />Activate you account</li>
          <br />
          <li><FaMoneyBillWaveAlt className="icon" />Payments</li>
          <li className="active"> <CgArrowsExchangeV className="icon" />Balances</li>
          <li><IoPersonCircleSharp className="icon" />Customers</li>
          <li><FiCircle className="icon" />Connected accounts</li>
          <li><FaCube className="icon" />Products</li>
          <li><HiDocumentReport className="icon" />Reports</li>
          <br />
          <li><BsFillTerminalFill className="icon" />Developers</li>
          <li><BsToggleOn className="icon" />Viewing test data</li>
          <li><IoSettingsSharp className="icon" />Settings</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;