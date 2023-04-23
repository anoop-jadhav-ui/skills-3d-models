import { OrbitControls, PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { Model } from "./Model/Model";
import { Suspense } from "react";
import { LoadingCube } from "../Loader3D/LoadingCube";

export function Portfolio() {
  const canvasColor = useControls("Canvas Color", {
    color: "#fce3e8",
  });

  const ambientLight = useControls("AmbientLight", {
    intensity: 0.1,
  });

  const directionalLight = useControls("Directional Light", {
    color: "#6394de",
    intensity: 1,
  });

  const hemisphereLight = useControls("Hemisphere Light", {
    color1: "#ffeded",
    color2: "#a275ce",
  });

  return (
    <>
      <Leva flat collapsed />
      <Canvas
        style={{
          height: "100%",
          position: "absolute",
          width: "100%",
          right: 0,
          top: 0,
          pointerEvents: "auto",
          zIndex: 1,
        }}
        frameloop="demand"
        dpr={window?.devicePixelRatio}
        flat
        camera={{ fov: 25, position: [0, 0, 25] }}
      >
        <color attach="background" args={[canvasColor.color]} />
        <PresentationControls
          snap
          global
          zoom={0.8}
          rotation={[0, -Math.PI / 6, 0]}
          polar={[0, Math.PI / 6]}
          azimuth={[-Math.PI / 6, Math.PI / 6]}
        >
          <hemisphereLight
            args={[hemisphereLight.color1, hemisphereLight.color2, 1]}
          />
          <directionalLight {...directionalLight} />
          <ambientLight intensity={ambientLight.intensity} />
          <Suspense fallback={<LoadingCube />}>
            <Model />
          </Suspense>
          {/* <axesHelper args={[5]} /> */}
          <OrbitControls />
        </PresentationControls>
      </Canvas>
    </>
  );
}
