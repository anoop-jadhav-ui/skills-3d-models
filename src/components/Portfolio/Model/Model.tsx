import { animated, useSpring } from "@react-spring/three";
import { Float, useGLTF, useProgress } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useMemo, useRef, useTransition } from "react";
import { Group, Material, MeshPhysicalMaterial } from "three";
import { CubeFloat } from "./AnimationUtils";
import { color } from "./materials";

interface SubModelProps {
  materials: {
    [key: string]: Material;
  };
  nodes: {
    [key: string]: {
      geometry: any;
    };
  };
}
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
const Pen = ({ nodes, materials }: SubModelProps) => {
  const { accentColor, penColor } = useControls("Pen", {
    accentColor: color.PEN_RED,
    penColor: color.BLACK,
  });

  const accentMaterial = new MeshPhysicalMaterial({
    color: accentColor,
    clearcoat: 1,
    roughness: 1,
  });
  const penMaterial = new MeshPhysicalMaterial({
    color: penColor,
    clearcoat: 1,
    roughness: 1,
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
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pen_1.geometry}
          material={penMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pen_2.geometry}
          material={accentMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pen_3.geometry}
          material={materials.WHITE}
        />
      </group>
    </Float>
  );
};
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.scaleBox.geometry}
        material={materials.BROWN_TEXTURE}
      />
    </>
  );
};
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
const NoteBook = ({ nodes }: SubModelProps) => {
  const { rubber, cover, bookmark1, pages, bookmark2 } = useControls(
    "Notebook",
    {
      bookmark1: color.RED,
      bookmark2: color.NOTEBOOK_YELLOW,
      rubber: color.NOTEBOOK_RUBBER,
      pages: color.WHITE,
      cover: color.NOTEBOOK_COVER,
    }
  );
  const bookmark1Material = new MeshPhysicalMaterial({
    color: bookmark1,
    clearcoat: 1,
    roughness: 1,
  });
  const rubberMaterial = new MeshPhysicalMaterial({
    color: rubber,
    clearcoat: 1,
    roughness: 1,
  });
  const coverMaterial = new MeshPhysicalMaterial({
    color: cover,
    clearcoat: 1,
    roughness: 1,
  });
  const pagesMaterial = new MeshPhysicalMaterial({
    color: pages,
    clearcoat: 1,
    roughness: 1,
  });
  const bookmark2Material = new MeshPhysicalMaterial({
    color: bookmark2,
    clearcoat: 1,
    roughness: 1,
  });
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.notebook.geometry}
      material={coverMaterial}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.notebookPages_1.geometry}
        material={pagesMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.notebookPages_2.geometry}
        material={bookmark1Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.notebookPages_3.geometry}
        material={bookmark2Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.notebookRubber.geometry}
        material={rubberMaterial}
      />
    </mesh>
  );
};
const ColorCards = ({ nodes, materials }: SubModelProps) => {
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.colorPalette.geometry}
      material={materials.COLOR_CARD_1}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.colorPaletteCard2.geometry}
        material={materials.COLOR_CARD_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.colorPaletteCard3.geometry}
        material={materials.COLOR_CARD_3}
      />
    </mesh>
  );
};
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

export const Model = (props: GroupProps) => {
  const { nodes, materials } = useGLTF(
    "/portfolio.glb"
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
