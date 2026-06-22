import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function Sphere() {
  return (
    <Float speed={2} rotationIntensity={1}>
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial color="#6366f1" />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 7] }}>
      <ambientLight intensity={2} />
      <Sphere />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}