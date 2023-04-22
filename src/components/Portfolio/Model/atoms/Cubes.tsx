import { useControls } from "leva";
import { MeshPhysicalMaterial } from "three";
import { SubModelProps } from "../Model";
import { color } from "../materials";
import { CubeFloat } from "../AnimationUtils";

const Cubes = ({ nodes }: SubModelProps) => {
  const { cubeColor } = useControls("Cubes", {
    cubeColor: color.CUBE_COLOR,
  });

  const material = new MeshPhysicalMaterial({
    color: cubeColor,
    roughness: 1,
    clearcoat: 1,
  });

  return (
    <>
      <CubeFloat>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.randomCube0.geometry}
          material={material}
        />
      </CubeFloat>
      <CubeFloat>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.randomCube3.geometry}
          material={material}
        />
      </CubeFloat>
      <CubeFloat>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.randomCube4.geometry}
          material={material}
        />
      </CubeFloat>
      <CubeFloat>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.randomCube5.geometry}
          material={material}
        />
      </CubeFloat>
    </>
  );
};

export default Cubes;
