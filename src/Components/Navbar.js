import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Comp.css";
import Bg5 from "../assets/Background (5).png";

function Navbar() {
  return (
    <>
      <nav className="main">
        <div className="Navbar">
          <div className="logo">
            <img src={logo} alt="dineorderepos" />
          </div>
          <div className="nav">
            <ul className="h-10 w-80 border border-transparent rounded-full space-x-4 px-5 py-1.5 text-sm bg-white/[0.2] text-white">
              <NavLink>Product</NavLink>

              <NavLink>About</NavLink>

              <NavLink>Service</NavLink>

              <NavLink>Blog</NavLink>

              <NavLink>Packages</NavLink>
            </ul>
          </div>
          <div className="login">
            <div className="h-9 w-20 border border-FFFFFF rounded-full p-2 text-xs bg-white font-semibold">
              <NavLink>Login</NavLink>
            </div>
          </div>
        </div>
        <div className="object">
          <img src={Bg5} alt="bg5" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
