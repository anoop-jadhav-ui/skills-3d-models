import { animated, useSpring } from "@react-spring/three";
import { Float } from "@react-three/drei";
import { ReactNode, useMemo, useTransition } from "react";

export const ScaleOnHover = ({ children }: { children: ReactNode }) => {
  const [, startTransition] = useTransition();
  const [springs, api] = useSpring(
    () => ({
      scale: 1,
      config: {
        mass: 1,
        friction: 50,
      },
    }),
    []
  );

  const handlePointerEnter = () => {
    startTransition(() => {
      api.start({
        scale: 1.1,
      });
    });
  };

  const handlePointerLeave = () => {
    startTransition(() => {
      api.start({
        scale: 1,
      });
    });
  };

  return (
    <animated.group
      scale={springs.scale}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </animated.group>
  );
};

export const CubeFloat = ({ children }: { children: ReactNode }) => {
  const speed = useMemo(() => {
    return Math.random() + 0.25;
  }, []);
  return (
    <Float
      position={[0, 0.5, 0]}
      floatingRange={[0, 1]}
      rotation={[Math.PI / 8, 0, 0]}
      rotationIntensity={2}
      floatIntensity={1}
      speed={speed}
    >
      {children}
    </Float>
  );
};
