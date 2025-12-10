import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Float, MeshDistortMaterial, Text, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

const SmartGlasses = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, 0, 0]} scale={1.5}>
        {/* Frame */}
        <RoundedBox args={[2.4, 0.6, 0.15]} radius={0.08} position={[0, 0, 0]}>
          <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
        </RoundedBox>
        
        {/* Left lens */}
        <RoundedBox args={[0.9, 0.5, 0.05]} radius={0.05} position={[-0.55, 0, 0.05]}>
          <meshStandardMaterial 
            color="#00D4D4" 
            metalness={0.3} 
            roughness={0.1} 
            transparent 
            opacity={0.4}
            emissive="#00D4D4"
            emissiveIntensity={0.3}
          />
        </RoundedBox>
        
        {/* Right lens */}
        <RoundedBox args={[0.9, 0.5, 0.05]} radius={0.05} position={[0.55, 0, 0.05]}>
          <meshStandardMaterial 
            color="#00D4D4" 
            metalness={0.3} 
            roughness={0.1} 
            transparent 
            opacity={0.4}
            emissive="#00D4D4"
            emissiveIntensity={0.3}
          />
        </RoundedBox>
        
        {/* Temple arms */}
        <RoundedBox args={[0.8, 0.1, 0.08]} radius={0.02} position={[-1.4, 0, -0.35]} rotation={[0, -0.3, 0]}>
          <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
        </RoundedBox>
        <RoundedBox args={[0.8, 0.1, 0.08]} radius={0.02} position={[1.4, 0, -0.35]} rotation={[0, 0.3, 0]}>
          <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
        </RoundedBox>
        
        {/* LED indicator */}
        <mesh position={[1.1, 0.2, 0.1]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial color="#00ff88" />
        </mesh>
      </group>
    </Float>
  );
};

const DataOrbs = () => {
  const orbsData = [
    { position: [-2, 1, -1] as [number, number, number], color: "#00D4D4", size: 0.15 },
    { position: [2, -0.5, -0.5] as [number, number, number], color: "#7C3AED", size: 0.12 },
    { position: [-1.5, -1, 0] as [number, number, number], color: "#A78BFA", size: 0.1 },
    { position: [1.8, 1.2, -1] as [number, number, number], color: "#00D4D4", size: 0.13 },
    { position: [0, 1.5, -0.5] as [number, number, number], color: "#7C3AED", size: 0.11 },
  ];

  return (
    <>
      {orbsData.map((orb, i) => (
        <Float key={i} speed={1.5 + i * 0.2} rotationIntensity={0.2} floatIntensity={0.8}>
          <mesh position={orb.position}>
            <sphereGeometry args={[orb.size, 32, 32]} />
            <MeshDistortMaterial
              color={orb.color}
              distort={0.3}
              speed={2}
              roughness={0.2}
              metalness={0.8}
              transparent
              opacity={0.7}
              emissive={orb.color}
              emissiveIntensity={0.5}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#00D4D4" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#7C3AED" />
      <spotLight position={[0, 5, 0]} intensity={0.8} color="#ffffff" angle={0.5} />
      
      <SmartGlasses />
      <DataOrbs />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 2.5}
      />
    </>
  );
};

export const ProductViewer3D = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden glass-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-50" />
      
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
      
      {/* Overlay info */}
      <motion.div
        className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-background/80 backdrop-blur-sm border border-primary/20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 5 }}
        transition={{ duration: 0.3 }}
      >
        <h4 className="text-lg font-semibold text-foreground">Smart AR Glasses</h4>
        <p className="text-sm text-muted-foreground">Interactive 3D Preview • Drag to rotate</p>
      </motion.div>
    </motion.div>
  );
};
