import { Float } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo } from "react";
import { MeshPhysicalMaterial } from "three";
import { SubModelProps } from "../Model";
import { color } from "../materials";

const Dropper = ({ nodes }: SubModelProps) => {
  const { dropperLiquidColor, dropperHolderColor } = useControls("Dropper", {
    dropperLiquidColor: color.DROPPER_RED,
    dropperHolderColor: color.ORANGE,
  });

  const glassMaterial = new MeshPhysicalMaterial({
    color: color.WHITE,
    roughness: 0,
    transmission: 1,
    ior: 1.5,
    clearcoat: 1,
  });

  const dropperLiquidMaterial = new MeshPhysicalMaterial({
    color: dropperLiquidColor,
    roughness: 1,
    clearcoat: 1,
  });
  const dropperHolderMaterial = new MeshPhysicalMaterial({
    color: dropperHolderColor,
    roughness: 1,
    clearcoat: 1,
  });

  const floatSpeed = useMemo(() => {
    return Math.random() + 1;
  }, []);

  return (
    <Float
      position={[0, 0, 0]}
      floatingRange={[0, 0.25]}
      rotation={[Math.PI / 8, 0, 0]}
      rotationIntensity={1}
      floatIntensity={1}
      speed={floatSpeed}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dropper_1.geometry}
        material={glassMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dropper_2.geometry}
        material={dropperHolderMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dropperFluid.geometry}
        material={dropperLiquidMaterial}
      />
    </Float>
  );
};

export default Dropper;
