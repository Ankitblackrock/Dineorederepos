import Image1 from "../assets/Image(1).png";
import "./Comp.css";
import backgrd4 from "../assets/Background (4).png";

function Pos() {
  return (
    <div className="pos">
      <div className="posback">
        <h1 className="text-left font-bold text-3xl">
          <span>POS- A point of sale</span>
          <br /> <span>system to take your</span>
          <br />
          <span>business to the next</span>
          <br /> level
        </h1>
        <br />
        <br />
        <p className="text-left p2">
          Make sure your takeaway runs smoothly. Handle all orders
          <br /> quickly and smoothly, take reservations, update menus and
          <br /> do a lot more!
        </p>
      </div>
      <div className="bg4">
        <img src={backgrd4} alt="bg4" />
      </div>
      <div className="posimage">
        <img src={Image1} alt="image1" />
      </div>
    </div>
  );
}
export default Pos;
