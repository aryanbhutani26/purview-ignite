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
  secondary: "#FB923C",  // Light orange
  accent: "#FDBA74",     // Peach
  particles: "#F97316",  // Orange particles
};

const darkColors: ThemeColors = {
  primary: "#00D4D4",    // Cyan
  secondary: "#7C3AED",  // Purple
  accent: "#A78BFA",     // Light purple
  particles: "#00D4D4",  // Cyan particles
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
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.7}
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
          factor={0.2}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.6}
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
          roughness={0.2}
          metalness={0.9}
          transparent
          opacity={0.7}
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
          distort={0.2}
          speed={3}
          roughness={0.3}
          metalness={0.7}
          transparent
          opacity={0.6}
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

      <FloatingIcosahedron position={[-4, 2, -2]} color={colors.primary} speed={0.8} />
      <FloatingIcosahedron position={[4, -1, -3]} color={colors.secondary} speed={1.2} />
      <FloatingSphere position={[-3, -2, -1]} color={colors.accent} size={0.4} />
      <FloatingSphere position={[3, 2, -2]} color={colors.primary} size={0.6} />
      <FloatingTorus position={[0, 3, -4]} color={colors.secondary} />
      <GlowingBox position={[-2, 0, -3]} color={colors.primary} />
      <GlowingBox position={[2, -2, -2]} color={colors.accent} />
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
