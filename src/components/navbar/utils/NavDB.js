import { MdOutlineDashboard,MdOutlineLogout } from 'react-icons/md';
import { FiShoppingCart,FiUser,FiSettings } from 'react-icons/fi';
import { HiOutlineChatAlt } from 'react-icons/hi';


export const navLinks = [
  {
    id: 0,
    title: "Dashboard",
    icon: <MdOutlineDashboard className="nav-icon" />,
  },
  {
    id: 1,
    title: "Market",
    icon: <FiShoppingCart className="nav-icon" />,
  },
  {
    id: 2,
    title: "Portfolio",
    icon: <FiUser className="nav-icon" />,
  },
  {
    id: 3,
    title: "News",
    icon: <HiOutlineChatAlt className="nav-icon" />,
  },
  {
    id: 4,
    title: "Settings",
    icon: <FiSettings className="nav-icon" />,
  },
  {
    id: 5,
    title: "LogOut",
    icon: <MdOutlineLogout className="nav-icon" />,
  },
];