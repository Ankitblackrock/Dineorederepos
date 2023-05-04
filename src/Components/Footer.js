import Logo2 from "../assets/Logo (2).png";
import mail from "../assets/mail.png";
import phone from "../assets/phone-call.png";
import apple from "../assets/Apple Logo.png";
import android from "../assets/Apple Logo (1).png";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={Logo2} alt="logo2" />
        <br />
        <p className="text-left text-[#797979]">
          It is a long established fact that from
          <br /> will be distracted by the readable
          <br /> from when looking.
        </p>
        <br />
        <div className="mail">
          <img src={mail} alt="mail" />
          <div>
            <address className="not-italic  text-[#797979]">
              dineorder@gmail.com
            </address>
            <address className="not-italic  text-[#797979]">
              mail@dineorder.com
            </address>
          </div>
        </div>
        <br />
        <div className="mail">
          <img src={phone} alt="phone" />
          <div>
            <address className="not-italic  text-[#797979]">
              +123 6541 3654
            </address>
            <address className="not-italic  text-[#797979]">
              +001 6547 6589
            </address>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-left font-semibold text-xl">Pages</h1>
        <br />
        <hr />
        <br />
        <ul>
          <li className="page">
            <a href="/">Home</a>
          </li>
          <li className="page">
            <a href="/">About Us</a>
          </li>
          <li className="page">
            <a href="/">Service</a>
          </li>
          <li className="page">
            <a href="/">Product</a>
          </li>
          <li className="page">
            <a href="/">Order Online</a>
          </li>
          <li className="page">
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-left font-semibold text-xl">Other Pages</h1>
        <br />
        <hr />
        <br />
        <ul>
          <li className="page">
            <a href="/">Android POS</a>
          </li>
          <li className="page">
            <a href="/">Management</a>
          </li>
          <li className="page">
            <a href="/">Feedback Kiosk</a>
          </li>
          <li className="page">
            <a href="/">KUICK</a>
          </li>
          <li className="page">
            <a href="/">Login</a>
          </li>
          <li className="page">
            <a href="/">Register</a>
          </li>
        </ul>
      </div>
      <div className="app">
        <h4 className="text-[#fa6420] font-semibold">Download</h4>
        <br />
        <h1 className="text-2xl font-bold">
          Its suitable to all
          <br /> decvices and screens
        </h1>
        <br />
        <p className="text-[#797979] text-lg">
          It is a long established fact that a reader
          <br /> will be distracted layout.
        </p>
        <br />
        <div className="flex flex-row gap-2">
          <button className="rounded-full p-4 bg-black text-white flex justify-center items-center gap-2">
            <img src={apple} alt="apple" />
            Apple Store
          </button>
          <br />
          <button className="rounded-full p-4 bg-[#d3d3d3] text-black flex justify-center items-center gap-2">
            <img src={android} alt="android" />
            PlayStore
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
