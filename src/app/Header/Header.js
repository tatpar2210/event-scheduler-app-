import { Outlet, Link } from "react-router-dom";
import "./Header.scss"
import planing from "../../assets/icons/planning.svg"
import houseKeeping from "../../assets/icons/house-keeping.svg"
import documentation from "../../assets/icons/documentation.svg"
import search from "../../assets/icons/search.svg"
import notificationBell from "../../assets/icons/notification-bell.svg"
import avatar from "../../assets/icons/avatar.svg"
function Header() {
  return(
    <>
      <nav className="header">
        <div className="educator-type" >
          <p>Educator</p>
          <span>Arthshala</span>
        </div>

        <div className="nav-links">
          <Link className="nav-link">
            <img src={planing} alt="planing" />
            <span>Planning</span>
          </Link>

          <Link className="nav-link">
            <img src={documentation} alt="documentation" />
            <span>Documentation</span>
          </Link>

          <Link className="nav-link">
            <img src={houseKeeping} alt="houseKeeping" />
            <span>House Keeping</span>
          </Link>
        </div>

        <div className="header-btns">
          <div>
            <img src={search} alt="search" />
          </div>

          <div>
            <img src={notificationBell} alt="notificationBell" />
          </div>

          <div>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Header