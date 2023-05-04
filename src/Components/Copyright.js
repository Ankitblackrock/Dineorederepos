import Line from "../assets/Line.png";
import social from "../assets/Social Media.png";
function Copyright() {
  return (
    <footer className="copywrite">
      <img src={Line} alt="line" />
      <br />
      <div className="dinecopy">
        <h3>Copyright © Dineorder</h3>
        <img src={social} alt="social" />
      </div>
    </footer>
  );
}

export default Copyright;
