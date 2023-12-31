/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 --types ./src/assets/3dModels/htmlCssJs.glb --transform -s
*/

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import CanvasHOC from "../CanvasHOC/CanvasHOC";

type GLTFResult = GLTF & {
  nodes: {
    ["5"]: THREE.Mesh;
    bgBlock5: THREE.Mesh;
  };
};

export const whiteMaterial = new THREE.MeshPhysicalMaterial({
  color: "#fff",
  roughness: 1,
});

const html5Material = new THREE.MeshPhysicalMaterial({
  color: "#ED5133",
  roughness: 1,
  clearcoat: 1,
});

function HtmlGlb(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF(
    "/htmlCssJs-transformed.glb"
  ) as unknown as GLTFResult;

  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["5"].geometry}
        material={whiteMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bgBlock5.geometry}
        material={html5Material}
      />
    </group>
  );
}

useGLTF.preload("/htmlCssJs-transformed.glb");
const HTMLModel = CanvasHOC(HtmlGlb, "HTML");

export default HTMLModel;
