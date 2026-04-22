import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import classes from "./Globe.module.css";
import { useState } from "react";

function GlobeSection() {
  const texture = useLoader(THREE.TextureLoader, "/earth_texture.jpg");
  const [pointertType, setPointerType] = useState<"auto" | "grab">("auto");

  return (
    <div className={classes.globeSection}>
      <div className={classes.canvasContainer}>
        <Canvas
          camera={{ position: [3, 3, 5], fov: 50 }}
          style={{ cursor: pointertType }}
          className={classes.canvas}
        >
          <mesh
            rotateX={-50}
            onPointerDown={() => setPointerType("grab")}
            onPointerUp={() => setPointerType("auto")}
          >
            <sphereGeometry args={[2.5, 70, 70]} />
            <meshBasicMaterial map={texture} />
          </mesh>
          <OrbitControls autoRotate enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </div>
  );
}

export default GlobeSection;
