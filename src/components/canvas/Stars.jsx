import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

import CanvasErrorBoundary from "./ErrorBoundary";

const Stars = (props) => {
  const ref = useRef();
  // 5001 is divisible by 3 (5001 / 3 = 1667 points), avoiding NaN in BufferGeometry boundingSphere!
  const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.2 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1] pointer-events-none'>
      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 1] }}
          dpr={[1, 1.5]}
          gl={{ preserveDrawingBuffer: false, powerPreference: "low-power" }}
        >
          <Suspense fallback={null}>
            <Stars />
          </Suspense>

          <Preload all />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
};

export default StarsCanvas;
