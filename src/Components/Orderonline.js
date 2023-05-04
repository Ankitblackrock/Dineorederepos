import Top from "../assets/Top Section.png";
import bag from "../assets/Icon.svg";
import "./Comp.css";
import backgr2 from "../assets/Background (2).png";
function Orderonline() {
  return (
    <div className="order">
      <div className="bg2">
        <img src={backgr2} alt="bg2" />
      </div>
      <div className="flex space-x-28">
        <img src={Top} alt="top" className="top" />
        <div className="orderpara">
          <div className="svgpic flex space-x-5">
            <img src={bag} alt="bag" />
            <h1 className="font-bold text-4xl">
              Online Ordering- Your
              <br /> business can do a lot
              <br /> better online!
            </h1>
          </div>

          <br />
          <p className="para3">
            Increase visibility, gather more orders and take advantage
            <br /> of digital marketing facilities by taking your business
            <br />
            online.
          </p>
          <div>
            <a href="./">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orderonline;
