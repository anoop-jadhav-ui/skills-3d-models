import { useControls } from "leva";
import { MeshPhysicalMaterial } from "three";
import { SubModelProps } from "../Model";
import { color } from "../materials";

const Monitor = ({ nodes, materials }: SubModelProps) => {
  const { dark, screen, grey, light1, light2 } = useControls("Monitor", {
    dark: color.BLACK,
    screen: color.BLUE,
    grey: color.LIGHT_GREY,
    light1: color.RED,
    light2: color.PURPLE,
  });

  const darkMaterial = new MeshPhysicalMaterial({
    color: dark,
    roughness: 1,
    clearcoat: 1,
  });
  const greyMaterial = new MeshPhysicalMaterial({
    color: grey,
    flatShading: true,
    clearcoat: 1,
    roughness: 1,
  });
  const screenMaterial = new MeshPhysicalMaterial({
    color: screen,
    roughness: 1,
    emissive: screen,
    emissiveIntensity: 2,
    clearcoat: 1,
  });
  const light1Material = new MeshPhysicalMaterial({
    color: light1,
    roughness: 1,
    emissive: light1,
    emissiveIntensity: 2,
    clearcoat: 1,
  });
  const light2Material = new MeshPhysicalMaterial({
    color: light2,
    roughness: 1,
    emissive: light2,
    emissiveIntensity: 2,
    clearcoat: 1,
  });

  return (
    <>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desktopWindow.geometry}
          material={materials.MONITOR_SCREEN_TEXTURE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desktopWindowTab.geometry}
          material={materials.MONITOR_SCREEN_TEXTURE}
        />
      </group>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.monitor_1.geometry}
          material={greyMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.monitor_2.geometry}
          material={screenMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.monitor_3.geometry}
          material={darkMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.monitor_5.geometry}
          material={light1Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.monitor_4.geometry}
          material={light2Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.macStandBase.geometry}
          material={greyMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.macStandHinge.geometry}
          material={greyMaterial}
        />
      </group>
    </>
  );
};

export default Monitor;
