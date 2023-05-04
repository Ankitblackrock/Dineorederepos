import "./Comp.css";
import graph0 from "../assets/image.png";
import video from "../assets/video.png";
import icon from "../assets/icon.png";
import { NavLink } from "react-router-dom";

function Text() {
  return (
    <>
      <div className="Text">
        <div className="image">
          <img src={graph0} alt="graph0" />
        </div>
        <div className="heading">
          <h1 className="text-5xl font-bold">
            Manage your <br />
            <span>takeaway like a</span> <br />
            pro!
          </h1>
          <br />
          <p className="text-stone-500">
            Stand out with your own brand! We’ll help you set up,
            <br /> start and grow your own business, without bringing
            <br /> you under a common umbrella.
          </p>
        </div>
        <br />
        <br />
        <div className="Button flex space-x-4">
          <div className="h-9 w-40 border rounded-full p-2 text-sm btn1">
            <NavLink>Get Started</NavLink>
          </div>
          <div className="h-9 w-15 border rounded-full p-2 text-xs btn2">
            <NavLink className="flex flex-row ">
              <div className="readmore font-semibold">Read More</div>
              <span className="vidbutton">
                <img src={video} alt="video" />
              </span>
            </NavLink>
          </div>
        </div>
        <div className="icon">
          <img src={icon} alt="icon" />
        </div>
      </div>
    </>
  );
}

export default Text;
