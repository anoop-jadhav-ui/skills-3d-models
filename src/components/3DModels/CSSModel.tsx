/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 --types ./src/assets/3dModels/htmlCssJs.glb --transform -s
*/

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { whiteMaterial } from "./HtmlModel";
import CanvasHOC from "../CanvasHOC/CanvasHOC";

type GLTFResult = GLTF & {
  nodes: {
    ["3"]: THREE.Mesh;
    bgBlock5: THREE.Mesh;
  };
};

const css3Material = new THREE.MeshPhysicalMaterial({
  color: "#0073B6",
  roughness: 1,
  clearcoat: 1,
});

function CssGLB(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF(
    "/htmlCssJs-transformed.glb"
  ) as unknown as GLTFResult;

  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3"].geometry}
        material={whiteMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bgBlock5.geometry}
        material={css3Material}
      />
    </group>
  );
}

useGLTF.preload("/htmlCssJs-transformed.glb");

const CSSModel = CanvasHOC(CssGLB, "CSS");

export default CSSModel;
