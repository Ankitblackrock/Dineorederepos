import Bg6 from "../assets/Background (6).png";
import grph4 from "../assets/Image (2).png";

function Content() {
  return (
    <div>
      <div className="cont">
        <img src={Bg6} alt="bg6" />
        <div className="contents">
          <div className="p5">
            <h1 className="font-bold text-3xl text-white">
              How we can make <br />
              things better
            </h1>
            <br />
            <ul className="text-white list-disc">
              <li>Fast and secure payments</li>
              <li>
                Increase online visibility with the use of
                <br /> Digital Marketing tools
              </li>
            </ul>
          </div>
          <div>
            <img src={grph4} alt="grph4" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
