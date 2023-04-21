import { Globals } from "@react-spring/three";
import "./App.css";
import { CanvasWrapper } from "./components/Summary/CanvasWrapper";

Globals.assign({
  frameLoop: "always",
});

function App() {
  return <CanvasWrapper />;
}

export default App;
