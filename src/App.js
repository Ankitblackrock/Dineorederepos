import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Text from "./Components/Text";
import Steps from "./Components/Steps";
import Pos from "./Components/Pos";
import Orderonline from "./Components/Orderonline";
import Kuick from "./Components/Kuick";
import Graph from "./Components/Graph";
import Content from "./Components/Content";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Copyright from "./Components/Copyright";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> <Text /> <Steps />
        <Pos /> <Orderonline />
        <Kuick /> <Graph /> <Content /> <Testimonial /> <Footer /> <Copyright />
      </BrowserRouter>
    </div>
  );
}

export default App;
