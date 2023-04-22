import { animated, useSpring } from "@react-spring/three";
import { Float } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useMemo } from "react";
import { MeshPhysicalMaterial } from "three";
import { SubModelProps } from "../Model";

const Bulb = ({ nodes }: SubModelProps) => {
  const [spring, api] = useSpring(() => ({ emissiveIntensity: 1 }), []);
  const { bulbColor, holderColor } = useControls("Bulb", {
    bulbColor: "#ff8e4d",
    holderColor: "#5f5f5f",
  });

  const holderMaterial = new MeshPhysicalMaterial({
    color: holderColor,
    roughness: 1,
    emissive: 1,
    clearcoat: 1,
  });

  const floatSpeed = useMemo(() => {
    return Math.random() + 1;
  }, []);

  useEffect(() => {
    let timeout: number;
    const blink = () => {
      api.start({
        emissiveIntensity: Math.floor(Math.random() * 4) + 1,
      });
      timeout = setTimeout(blink, (0.5 + Math.random() * 2) * 1000);
    };
    blink();
    return () => void clearTimeout(timeout);
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
      <animated.mesh castShadow receiveShadow geometry={nodes.bulb_1.geometry}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <animated.meshPhysicalMaterial
          color={bulbColor}
          roughness={1}
          emissive={bulbColor}
          emissiveIntensity={spring.emissiveIntensity}
          clearcoat={1}
        />
      </animated.mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bulb_2.geometry}
        material={holderMaterial}
      />
    </Float>
  );
};

export default Bulb;
