import { useControls } from "leva";
import { MeshPhysicalMaterial } from "three";
import { SubModelProps } from "../Model";
import { color } from "../materials";

const Background = ({ nodes }: SubModelProps) => {
  const { bgColor } = useControls("background", {
    bgColor: color.BACKGROUND,
  });

  const bgMaterial = new MeshPhysicalMaterial({
    color: bgColor,
    clearcoat: 1,
    roughness: 1,
  });

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.background.geometry}
      material={bgMaterial}
      position={[0, -0.06, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.background4.geometry}
        material={bgMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.background2.geometry}
        material={bgMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.background3.geometry}
        material={bgMaterial}
      />
    </mesh>
  );
};

export default Background;
