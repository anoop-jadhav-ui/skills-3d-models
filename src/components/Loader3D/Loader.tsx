import { useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();

  return <div>Loading {progress.toFixed()}</div>;
}

export default Loader;
