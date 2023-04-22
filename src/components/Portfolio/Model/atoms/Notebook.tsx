import { useControls } from "leva";
import { MeshPhysicalMaterial } from "three";
import { SubModelProps } from "../Model";
import { color } from "../materials";

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

export default NoteBook;
