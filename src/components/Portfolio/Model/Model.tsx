import { animated, useSpring } from "@react-spring/three";
import { useGLTF, useProgress } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useRef, useTransition } from "react";
import { Group, Material } from "three";
import TrackPad from "./atoms/TrackPad";
import TextBlock from "./atoms/TextBlock";
import Bulb from "./atoms/Bulb";
import Cubes from "./atoms/Cubes";
import Monitor from "./atoms/Monitor";
import Dropper from "./atoms/Dropper";
import Pen from "./atoms/Pen";
import LatteCup from "./atoms/LatteCup";
import NoteBook from "./atoms/Notebook";
import ColorCards from "./atoms/ColorCards";
import Background from "./atoms/Background";

export interface SubModelProps {
  materials: {
    [key: string]: Material;
  };
  nodes: {
    [key: string]: {
      geometry: any;
    };
  };
}

export const Model = (props: GroupProps) => {
  const { nodes, materials } = useGLTF(
    "/portfolio-transformed.glb"
  ) as unknown as SubModelProps;

  const { modelPosition, modelRotation } = useControls("modelSettings", {
    modelPosition: [0, -1.5, 0],
    modelRotation: [0, 0, 0],
  });

  const [, startTransition] = useTransition();

  const { progress } = useProgress();
  const [springs, api] = useSpring(() => ({
    scale: 0,
    rotation: 0,
    config: {
      mass: 4,
      friction: 35,
    },
  }));

  const groupRef = useRef<Group>(null);

  useEffect(() => {
    startTransition(() => {
      if (progress === 100) {
        api.start({
          scale: 1,
        });
      }
    });
  });

  // useFrame(({ clock }) => {
  //   startTransition(() => {
  //     if (groupRef.current)
  //       groupRef.current.rotation.y =
  //         Math.sin(clock.getElapsedTime() / 2) + Math.PI / 6;
  //   });
  // });

  return (
    <animated.group
      {...props}
      dispose={null}
      scale={springs.scale}
      position={modelPosition}
      rotation={modelRotation}
      ref={groupRef}
    >
      <TrackPad nodes={nodes} materials={materials} />
      <TextBlock nodes={nodes} materials={materials} />
      <Bulb nodes={nodes} materials={materials} />
      <Cubes nodes={nodes} materials={materials} />
      <Monitor nodes={nodes} materials={materials} />
      <Dropper nodes={nodes} materials={materials} />
      <Pen nodes={nodes} materials={materials} />
      <LatteCup nodes={nodes} materials={materials} />
      <NoteBook nodes={nodes} materials={materials} />
      <ColorCards nodes={nodes} materials={materials} />
      <Background nodes={nodes} materials={materials} />
    </animated.group>
  );
};

useGLTF.preload("/portfolio.glb");
