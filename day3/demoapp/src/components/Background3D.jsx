import { Canvas } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";

function FloatingOrb() {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={3}>
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#6366f1"
          emissive="#6366f1"
          emissiveIntensity={2}
        />
      </mesh>
    </Float>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Canvas
        camera={{ position: [0, 0, 8] }}
        style={{ background: "#000" }}
      >
        <color attach="background" args={["#000000"]} />

        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} />

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          fade
        />

        <FloatingOrb />
      </Canvas>
    </div>
  );
}