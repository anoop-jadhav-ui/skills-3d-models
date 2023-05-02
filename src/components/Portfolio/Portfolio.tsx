import { Globals } from "@react-spring/three";
import { OrbitControls, PresentationControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { Suspense } from "react";
import { LoadingCube } from "../Loader3D/LoadingCube";
import React from "react";

const Model = React.lazy(() => import("./Model/Model"));

Globals.assign({
  frameLoop: "always",
});

export function Portfolio() {
  const canvasColor = useControls("Canvas Color", {
    color: "#fce3e8",
  });

  return (
    <>
      <Leva collapsed />
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
        frameloop="always"
        dpr={window?.devicePixelRatio}
        camera={{ fov: 25, position: [0, 0, 25] }}
        flat
        onCreated={(state) => {
          state.gl.setClearColor(canvasColor.color);
        }}
      >
        <Stage environment="city" shadows={false} adjustCamera={false}>
          <PresentationControls
            snap
            global
            zoom={0.8}
            rotation={[0, -Math.PI / 6, 0]}
            polar={[0, Math.PI / 6]}
            azimuth={[-Math.PI / 6, Math.PI / 6]}
          >
            <Suspense fallback={<LoadingCube />}>
              <Model />
              <OrbitControls />
            </Suspense>
          </PresentationControls>
        </Stage>
      </Canvas>
    </>
  );
}
