import "./Comp.css";
import Icon from "../assets/Icon(1).png";
import Icon2 from "../assets/Icon(2).png";
import Icon3 from "../assets/Icon(3).png";

function Steps() {
  return (
    <div className="Steps">
      <div className="feature text-sm font-semibold">
        <h2>Features</h2>
      </div>
      <div className="sucess text-3xl font-bold">
        <p>3 steps to success</p>
      </div>
      <div className="card flex space-x-32">
        <div>
          <content className="cn1">
            <img src={Icon2} alt="icon1" />
            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Ordering</h4>
              <p className="cn1p text-sm ">
                <span>Set up your business with our state-of-</span>
                <span>the-art EPOS and Online ordering</span>{" "}
                <span>system.</span>
              </p>
              <br />
              <a href="./" className="text-xs underline">
                Learn More
              </a>
            </div>
          </content>
        </div>

        <div>
          <content className="cn1">
            <img src={Icon} alt="icon1" />
            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Growth</h4>
              <p className="cn1p text-sm ">
                <span>Grow your customer base with support</span>
                <span>from our Marketing team.</span>
              </p>
              <br />
              <a href="./" className="text-xs underline">
                Learn More
              </a>
            </div>
          </content>
        </div>

        <div>
          <content className="cn1">
            <img src={Icon3} alt="icon1" />
            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Support</h4>
              <p className="cn1p text-sm ">
                <span>Get 24*7 client support in case you hit-</span>
                <span>any snags and run your business</span>{" "}
                <span>smoothly.</span>
              </p>
              <br />
              <a href="./" className="text-xs underline">
                Learn More
              </a>
            </div>
          </content>
        </div>
      </div>
    </div>
  );
}
export default Steps;
