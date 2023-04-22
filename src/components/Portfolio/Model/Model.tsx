import { animated, useSpring } from "@react-spring/three";
import { useGLTF, useProgress } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useRef, useTransition } from "react";
import { Group, Material } from "three";
import { GLTF } from "three-stdlib";
import Background from "./atoms/Background";
import Bulb from "./atoms/Bulb";
import ColorCards from "./atoms/ColorCards";
import Cubes from "./atoms/Cubes";
import Dropper from "./atoms/Dropper";
import LatteCup from "./atoms/LatteCup";
import Monitor from "./atoms/Monitor";
import NoteBook from "./atoms/Notebook";
import Pen from "./atoms/Pen";
import TextBlock from "./atoms/TextBlock";
import TrackPad from "./atoms/TrackPad";

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

type GLTFResult = GLTF & {
  nodes: {
    background: THREE.Mesh;
    background2: THREE.Mesh;
    background3: THREE.Mesh;
    background4: THREE.Mesh;
    monitor_1: THREE.Mesh;
    monitor_2: THREE.Mesh;
    monitor_3: THREE.Mesh;
    monitor_4: THREE.Mesh;
    monitor_5: THREE.Mesh;
    macStandBase: THREE.Mesh;
    macStandHinge: THREE.Mesh;
    trackpad: THREE.Mesh;
    trackpadBottom: THREE.Mesh;
    bulb_1: THREE.Mesh;
    bulb_2: THREE.Mesh;
    pen_1: THREE.Mesh;
    pen_2: THREE.Mesh;
    pen_3: THREE.Mesh;
    textBlocks_1: THREE.Mesh;
    textBlocks_2: THREE.Mesh;
    scaleBox: THREE.Mesh;
    notebook: THREE.Mesh;
    notebookPages_1: THREE.Mesh;
    notebookPages_2: THREE.Mesh;
    notebookPages_3: THREE.Mesh;
    notebookRubber: THREE.Mesh;
    dropper_1: THREE.Mesh;
    dropper_2: THREE.Mesh;
    dropperFluid: THREE.Mesh;
    latteMug_1: THREE.Mesh;
    latteMug_2: THREE.Mesh;
    colorPalette: THREE.Mesh;
    colorPaletteCard2: THREE.Mesh;
    colorPaletteCard3: THREE.Mesh;
    randomCube0: THREE.Mesh;
    randomCube3: THREE.Mesh;
    randomCube4: THREE.Mesh;
    randomCube5: THREE.Mesh;
    desktopWindow: THREE.Mesh;
    desktopWindowTab: THREE.Mesh;
  };
  materials: {
    bgGRADIENT: THREE.MeshStandardMaterial;
    GREY_METAL: THREE.MeshStandardMaterial;
    LIGHT_BLUE_EMISSIVE: THREE.MeshStandardMaterial;
    BLACK: THREE.MeshStandardMaterial;
    MONITOR_TEXTURE: THREE.MeshStandardMaterial;
    RED: THREE.MeshStandardMaterial;
    WHITE: THREE.MeshStandardMaterial;
    YELLOW: THREE.MeshStandardMaterial;
    DARK_BLUE: THREE.MeshStandardMaterial;
    BROWN_TEXTURE: THREE.MeshStandardMaterial;
    CUP_TEXTURE: THREE.MeshStandardMaterial;
    LIGHT_BLUE: THREE.MeshStandardMaterial;
    GLASS: THREE.MeshPhysicalMaterial;
    ORANGE: THREE.MeshStandardMaterial;
    COLOR_CARD_1: THREE.MeshStandardMaterial;
    COLOR_CARD_2: THREE.MeshStandardMaterial;
    COLOR_CARD_3: THREE.MeshStandardMaterial;
    LIGHT_PURPLE: THREE.MeshStandardMaterial;
    MONITOR_SCREEN_TEXTURE: THREE.MeshStandardMaterial;
  };
};

export const Model = (props: GroupProps) => {
  const { nodes, materials } = useGLTF(
    "/portfolio-transformed.glb"
  ) as GLTFResult;

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

useGLTF.preload("/portfolio-transformed.glb");
