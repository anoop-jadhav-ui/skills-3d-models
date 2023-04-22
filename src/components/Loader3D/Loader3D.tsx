import { animated } from "@react-spring/three";
import { Html, useProgress } from "@react-three/drei";
import { useControls } from "leva";
import { color } from "../Portfolio/Model/materials";

function Loader3D() {
  const { progress } = useProgress();

  const { position, textColor } = useControls("loader", {
    position: [0, 0, 0],
    textColor: color.BLACK,
  });

  return (
    <animated.mesh position={position} scale={2}>
      <sphereGeometry args={[0.4, 32]} />
      <meshNormalMaterial />
      <Html
        as="div"
        role="progressbar"
        style={{
          position: "relative",
          textAlign: "center",
        }}
        center
      >
        <p
          style={{
            fontSize: 24,
            color: textColor,
            fontWeight: "bold",
            position: "absolute",
            left: "-1.25rem",
            top: "3rem",
          }}
        >
          {progress.toFixed()}%
        </p>
      </Html>
    </animated.mesh>
  );
}

export default animated(Loader3D);
