import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import CanvasErrorBoundary from "./ErrorBoundary";

// 3D Model Component
const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={10} groundColor="white" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.62 : 0.92}
        position={isMobile ? [0, -1.2, -1.8] : [0, -1.6, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Canvas Wrapper with Responsive Behavior & Error Protection
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div className="w-full -mt-10 sm:-mt-16 md:-mt-20 h-[320px] xs:h-[400px] sm:h-[480px] md:h-[580px] lg:h-[660px] flex items-center justify-center">
      <CanvasErrorBoundary>
        <Canvas
          frameloop="demand"
          shadows
          dpr={[1, 1.5]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{
            preserveDrawingBuffer: false,
            powerPreference: "high-performance",
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
};

useGLTF.preload("./desktop_pc/scene.gltf");

export default ComputersCanvas;
