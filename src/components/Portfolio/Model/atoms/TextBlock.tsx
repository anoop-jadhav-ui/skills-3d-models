import { useControls } from "leva";
import { MeshPhysicalMaterial } from "three";
import { color } from "../materials";
import { SubModelProps } from "../Model";

const TextBlock = ({ nodes, materials }: SubModelProps) => {
  const { red, blue } = useControls("TextBlock", {
    red: color.TEXTBLOCK_RED,
    blue: color.TEXTBLOCK_BLUE,
  });

  const redMaterial = new MeshPhysicalMaterial({
    color: red,
    clearcoat: 1,
  });
  const blueMaterial = new MeshPhysicalMaterial({
    color: blue,
    clearcoat: 1,
  });

  return (
    <>
      <group position={[0, -0.02, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.textBlocks_1.geometry}
          material={redMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.textBlocks_2.geometry}
          material={blueMaterial}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.scaleBox.geometry}
        material={materials.BROWN_TEXTURE}
      />
    </>
  );
};

export default TextBlock;
