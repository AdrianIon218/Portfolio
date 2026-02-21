import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import styles from "./Globe.module.css";
import { useState } from "react";

function GlobeContainer() {
  const texture = useLoader(THREE.TextureLoader, "/earth_texture.jpg");
  const [pointertType, setPointerType] = useState<"auto" | "grab">("auto");

  return (
    <div className={styles.centered}>
      <div className={styles.canvasContainer}>
        <Canvas
          camera={{ position: [3, 3, 5], fov: 50 }}
          style={{
            cursor: pointertType,
          }}
        >
          <mesh
            rotateX={-50}
            onPointerDown={() => setPointerType("grab")}
            onPointerUp={() => setPointerType("auto")}
          >
            <sphereGeometry args={[2.5, 40, 40]} />
            <meshBasicMaterial map={texture} />
          </mesh>
          <OrbitControls autoRotate enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
}

export default GlobeContainer;
