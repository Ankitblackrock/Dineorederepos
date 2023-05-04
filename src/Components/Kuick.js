import five from "../assets/5.png";
import mobile from "../assets/Group.svg";
import backgr3 from "../assets/Background (3).png";

function Kuick() {
  return (
    <div className="">
      <div className="flex space-x-28 order2">
        <div className="orderpara2">
          <div className="svgpic flex space-x-5">
            <img src={mobile} alt="bag" />
            <h1 className="font-bold text-4xl">
              Kuick- Give your
              <br /> business can do a lot
              <br /> experience
            </h1>
          </div>

          <br />
          <p className="para3">
            Get listed on our food ordering platform and take
            <br /> advantage of our huge customer base.
          </p>
          <div>
            <a href="./">Read More</a>
          </div>
          <img src={five} alt="top" className="five" />
          <div className="bg3">
            <img src={backgr3} alt="bg3" />
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Kuick;
