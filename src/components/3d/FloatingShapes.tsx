import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Box, Torus, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  particles: string;
}

const lightColors: ThemeColors = {
  primary: "#F97316",    // Orange
  secondary: "#EC4899",  // Pink
  accent: "#8B5CF6",     // Purple
  particles: "#F59E0B",  // Amber particles
};

const darkColors: ThemeColors = {
  primary: "#00D4D4",    // Cyan
  secondary: "#A855F7",  // Purple
  accent: "#F472B6",     // Pink
  particles: "#06B6D4",  // Sky blue particles
};

const FloatingIcosahedron = ({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Icosahedron ref={meshRef} args={[1, 1]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Icosahedron>
    </Float>
  );
};

const FloatingSphere = ({ position, color, size = 0.5 }: { position: [number, number, number]; color: string; size?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
        <MeshWobbleMaterial
          color={color}
          attach="material"
          factor={0.3}
          speed={2}
          roughness={0.05}
          metalness={0.95}
          transparent
          opacity={0.75}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </Sphere>
    </Float>
  );
};

const FloatingTorus = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
      <Torus ref={meshRef} args={[0.6, 0.2, 16, 32]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.95}
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={0.25}
        />
      </Torus>
    </Float>
  );
};

const GlowingBox = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.9}>
      <Box ref={meshRef} args={[0.8, 0.8, 0.8]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={3}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.75}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </Box>
    </Float>
  );
};

const ParticleField = ({ color, isLight = false }: { color: string; isLight?: boolean }) => {
  const count = isLight ? 60 : 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={isLight ? 0.03 : 0.05} 
        color={color} 
        transparent 
        opacity={isLight ? 0.3 : 0.6} 
        sizeAttenuation 
      />
    </points>
  );
};

const Scene = ({ colors, isLight = false }: { colors: ThemeColors; isLight?: boolean }) => {
  return (
    <>
      <ambientLight intensity={isLight ? 0.4 : 0.3} />
      <pointLight position={[10, 10, 10]} intensity={isLight ? 0.6 : 1} color={colors.primary} />
      <pointLight position={[-10, -10, -10]} intensity={isLight ? 0.3 : 0.5} color={colors.secondary} />
      <spotLight position={[0, 10, 0]} intensity={isLight ? 0.5 : 0.8} color={colors.accent} angle={0.3} />

      {/* Primary colored shapes */}
      <FloatingIcosahedron position={[-4, 2, -2]} color={colors.primary} speed={0.8} />
      {/* <FloatingIcosahedron position={[4, -1, -3]} color={colors.secondary} speed={1.2} /> */}
      <FloatingIcosahedron position={[1, 3, -5]} color={colors.accent} speed={0.9} />
      
      {/* Spheres with varied colors */}
      {/* <FloatingSphere position={[-3, -2, -1]} color={colors.accent} size={0.4} /> */}
      <FloatingSphere position={[3, 2, -2]} color={colors.primary} size={0.6} />
      {/* <FloatingSphere position={[-1, -3, -4]} color={colors.secondary} size={0.3} /> */}
      <FloatingSphere position={[5, 0, -3]} color="#10B981" size={0.5} />
      
      {/* Torus shapes */}
      <FloatingTorus position={[6, 3, -4]} color={colors.secondary} />
      {/* <FloatingTorus position={[-5, -1, -2]} color={colors.accent} /> */}
      
      {/* Glowing boxes */}
      <GlowingBox position={[-2, 0, -3]} color={colors.primary} />
      {/* <GlowingBox position={[2, -2, -2]} color={colors.accent} />
      <GlowingBox position={[0, -4, -3]} color={colors.secondary} /> */}
      <GlowingBox position={[-4, 4, -5]} color="#EF4444" />
      
      {/* Additional colorful elements */}
      <FloatingSphere position={[6, 1, -4]} color="#F59E0B" size={0.4} />
      {/* <FloatingIcosahedron position={[-6, -2, -3]} color="#10B981" speed={1.1} />
      <FloatingSphere position={[2, 4, -6]} color="#EF4444" size={0.35} /> */}
      
      <ParticleField color={colors.particles} isLight={isLight} />
    </>
  );
};

interface FloatingShapes3DProps {
  theme?: 'light' | 'dark';
}

export const FloatingShapes3D = ({ theme = 'dark' }: FloatingShapes3DProps) => {
  const colors = theme === 'light' ? lightColors : darkColors;
  const isLight = theme === 'light';
  
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene colors={colors} isLight={isLight} />
      </Canvas>
    </div>
  );
};
