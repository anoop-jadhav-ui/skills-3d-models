import { useControls } from "leva";
import { MeshPhysicalMaterial } from "three";
import { SubModelProps } from "../Model";
import { color } from "../materials";

const TrackPad = ({ nodes }: SubModelProps) => {
  const { white, grey } = useControls("Trackpad", {
    white: color.WHITE,
    grey: color.LIGHT_GREY,
  });

  const whiteMaterial = new MeshPhysicalMaterial({
    color: white,
    roughness: 1,
    clearcoat: 1,
  });
  const greyMaterial = new MeshPhysicalMaterial({
    color: grey,
    clearcoat: 1,
  });

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.trackpad.geometry}
      material={whiteMaterial}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.trackpadBottom.geometry}
        material={greyMaterial}
      />
    </mesh>
  );
};

export default TrackPad;
