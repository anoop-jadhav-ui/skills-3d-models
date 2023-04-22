import { useControls } from "leva";
import { MeshPhysicalMaterial } from "three";
import { SubModelProps } from "../Model";
import { color } from "../materials";

const LatteCup = ({ nodes, materials }: SubModelProps) => {
  const { lid } = useControls("LatteCup", {
    lid: color.LATTE_LID_RED,
  });

  const lidMaterial = new MeshPhysicalMaterial({
    color: lid,
    clearcoat: 1,
    roughness: 1,
  });

  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.latteMug_1.geometry}
        material={materials.CUP_TEXTURE}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.latteMug_2.geometry}
        material={lidMaterial}
      />
    </>
  );
};

export default LatteCup;
