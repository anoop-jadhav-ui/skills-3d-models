import { Globals } from "@react-spring/three";
import "./App.css";
import { Portfolio } from "./components/Portfolio/Portfolio";

Globals.assign({
  frameLoop: "always",
});

function App() {
  return <Portfolio />;
}

export default App;
