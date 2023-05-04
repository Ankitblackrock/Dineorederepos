import Bg9 from "../assets/Background (9).png";
import Bg7 from "../assets/Background (7).png";
import userimg from "../assets/User.png";
import { NavLink } from "react-router-dom";

function Testimonial() {
  return (
    <div>
      <div className="test">
        <img src={Bg9} alt="bg9" />
        <img src={Bg7} alt="bg7" className="test2" />
        <div className="para7">
          <NavLink className="testimonial">Testimonial</NavLink>
          <br />
          <h1 className="font-bold text-4xl">
            Trusted by millions of clients.
          </h1>
          <br />
          <h1 className="font-bold text-4xl">“</h1>
          <br />
          <p className="italic font-semibold">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
            <br /> suffered alteration in some form, by injected humour, or
            randomised words which don't look
            <br /> even slightly believable. If you are going to use a passage.
          </p>
          <br />
          <img src={userimg} alt="user" />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
