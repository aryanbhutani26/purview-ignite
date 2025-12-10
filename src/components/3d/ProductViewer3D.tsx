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
      <group ref={groupRef} position={[0, 0, 0]} scale={1.2}>
        {/* Main frame - sleek wraparound style */}
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[1.3, 0.06, 8, 64, Math.PI]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.95} roughness={0.05} />
        </mesh>
        
        {/* Left lens housing */}
        <RoundedBox args={[1.1, 0.55, 0.12]} radius={0.1} position={[-0.7, 0, 0.15]}>
          <meshStandardMaterial color="#0d0d1a" metalness={0.9} roughness={0.1} />
        </RoundedBox>
        
        {/* Right lens housing */}
        <RoundedBox args={[1.1, 0.55, 0.12]} radius={0.1} position={[0.7, 0, 0.15]}>
          <meshStandardMaterial color="#0d0d1a" metalness={0.9} roughness={0.1} />
        </RoundedBox>
        
        {/* Left lens - holographic display */}
        <RoundedBox args={[0.95, 0.42, 0.02]} radius={0.08} position={[-0.7, 0, 0.22]}>
          <meshStandardMaterial 
            color="#00D4D4" 
            metalness={0.1} 
            roughness={0.05} 
            transparent 
            opacity={0.35}
            emissive="#00D4D4"
            emissiveIntensity={0.4}
          />
        </RoundedBox>
        
        {/* Right lens - holographic display */}
        <RoundedBox args={[0.95, 0.42, 0.02]} radius={0.08} position={[0.7, 0, 0.22]}>
          <meshStandardMaterial 
            color="#00D4D4" 
            metalness={0.1} 
            roughness={0.05} 
            transparent 
            opacity={0.35}
            emissive="#00D4D4"
            emissiveIntensity={0.4}
          />
        </RoundedBox>
        
        {/* Nose bridge */}
        <RoundedBox args={[0.25, 0.15, 0.1]} radius={0.04} position={[0, -0.15, 0.1]}>
          <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
        </RoundedBox>
        
        {/* Left temple arm - angled back */}
        <group position={[-1.25, 0, 0]}>
          <RoundedBox args={[0.15, 0.12, 0.5]} radius={0.03} position={[0, 0, -0.25]} rotation={[0.1, 0.15, 0]}>
            <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
          </RoundedBox>
          <RoundedBox args={[0.12, 0.1, 0.8]} radius={0.03} position={[-0.05, 0, -0.85]} rotation={[0, 0.05, 0]}>
            <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
          </RoundedBox>
          {/* Ear hook */}
          <RoundedBox args={[0.08, 0.08, 0.3]} radius={0.02} position={[-0.08, -0.08, -1.35]} rotation={[0.4, 0, 0]}>
            <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
          </RoundedBox>
        </group>
        
        {/* Right temple arm - with tech module */}
        <group position={[1.25, 0, 0]}>
          <RoundedBox args={[0.15, 0.12, 0.5]} radius={0.03} position={[0, 0, -0.25]} rotation={[0.1, -0.15, 0]}>
            <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
          </RoundedBox>
          {/* Tech module housing */}
          <RoundedBox args={[0.2, 0.18, 0.35]} radius={0.04} position={[0.08, 0.02, -0.6]} rotation={[0, -0.05, 0]}>
            <meshStandardMaterial color="#0d0d1a" metalness={0.85} roughness={0.15} />
          </RoundedBox>
          <RoundedBox args={[0.12, 0.1, 0.6]} radius={0.03} position={[0.05, 0, -1.0]} rotation={[0, -0.05, 0]}>
            <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
          </RoundedBox>
          {/* Ear hook */}
          <RoundedBox args={[0.08, 0.08, 0.3]} radius={0.02} position={[0.08, -0.08, -1.35]} rotation={[0.4, 0, 0]}>
            <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
          </RoundedBox>
        </group>
        
        {/* Camera/sensor module on right side */}
        <mesh position={[1.3, 0.15, 0.1]}>
          <cylinderGeometry args={[0.06, 0.06, 0.08, 16]} />
          <meshStandardMaterial color="#0a0a15" metalness={0.95} roughness={0.05} />
        </mesh>
        <mesh position={[1.3, 0.15, 0.15]}>
          <cylinderGeometry args={[0.04, 0.04, 0.02, 16]} />
          <meshStandardMaterial color="#1a1a3e" metalness={0.3} roughness={0.1} />
        </mesh>
        
        {/* LED status indicators */}
        <mesh position={[1.35, 0.02, -0.35]}>
          <sphereGeometry args={[0.025, 16, 16]} />
          <meshBasicMaterial color="#00ff88" />
        </mesh>
        <mesh position={[1.35, -0.05, -0.35]}>
          <sphereGeometry args={[0.02, 16, 16]} />
          <meshBasicMaterial color="#00D4D4" />
        </mesh>
        
        {/* Microphone pinhole */}
        <mesh position={[-1.2, -0.15, 0.15]}>
          <cylinderGeometry args={[0.015, 0.015, 0.05, 8]} />
          <meshStandardMaterial color="#0a0a15" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Subtle glow ring around lenses */}
        <mesh position={[-0.7, 0, 0.23]}>
          <ringGeometry args={[0.48, 0.52, 32]} />
          <meshBasicMaterial color="#00D4D4" transparent opacity={0.15} side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[0.7, 0, 0.23]}>
          <ringGeometry args={[0.48, 0.52, 32]} />
          <meshBasicMaterial color="#00D4D4" transparent opacity={0.15} side={THREE.DoubleSide} />
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
