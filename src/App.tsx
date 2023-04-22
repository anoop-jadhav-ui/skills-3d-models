import { Globals } from "@react-spring/three";
import "./App.css";
import { Portfolio } from "./components/Portfolio/Portfolio";
// import { PortfolioTransformed } from "./components/PortfolioTransformed/PortfolioTransformed";

Globals.assign({
  frameLoop: "always",
});

function App() {
  return <Portfolio />;
}

export default App;
