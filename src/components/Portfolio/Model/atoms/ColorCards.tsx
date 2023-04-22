import { SubModelProps } from "../Model";

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

export default ColorCards;
