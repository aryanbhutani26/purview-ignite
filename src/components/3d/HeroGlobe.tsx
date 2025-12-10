import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Line, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Create Earth-like texture procedurally
const createEarthTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;
  
  // Ocean base - deep blue gradient
  const oceanGradient = ctx.createLinearGradient(0, 0, 0, 512);
  oceanGradient.addColorStop(0, '#0a1628');
  oceanGradient.addColorStop(0.3, '#0d2847');
  oceanGradient.addColorStop(0.5, '#0f3460');
  oceanGradient.addColorStop(0.7, '#0d2847');
  oceanGradient.addColorStop(1, '#0a1628');
  ctx.fillStyle = oceanGradient;
  ctx.fillRect(0, 0, 1024, 512);
  
  // Simplified continent shapes with glow effect
  ctx.shadowColor = '#00D4D4';
  ctx.shadowBlur = 15;
  
  const drawContinent = (path: number[][], color: string) => {
    ctx.beginPath();
    ctx.moveTo(path[0][0], path[0][1]);
    for (let i = 1; i < path.length; i++) {
      ctx.lineTo(path[i][0], path[i][1]);
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  };
  
  // North America
  drawContinent([
    [120, 80], [220, 70], [280, 100], [300, 150], [280, 200],
    [240, 220], [180, 230], [140, 200], [100, 150], [110, 100]
  ], '#1a3a4a');
  
  // South America
  drawContinent([
    [220, 250], [260, 240], [290, 280], [300, 350], [280, 420],
    [240, 440], [200, 400], [190, 320], [200, 270]
  ], '#1a3a4a');
  
  // Europe
  drawContinent([
    [480, 80], [540, 70], [580, 90], [570, 140], [530, 160],
    [490, 150], [470, 120]
  ], '#1a3a4a');
  
  // Africa
  drawContinent([
    [480, 180], [560, 170], [600, 220], [590, 320], [550, 380],
    [500, 390], [460, 340], [450, 260], [460, 200]
  ], '#1a3a4a');
  
  // Asia
  drawContinent([
    [580, 60], [750, 50], [850, 80], [900, 140], [880, 200],
    [800, 220], [720, 240], [650, 220], [600, 180], [580, 120]
  ], '#1a3a4a');
  
  // Australia
  drawContinent([
    [780, 320], [860, 300], [900, 340], [890, 400], [840, 420],
    [780, 400], [760, 360]
  ], '#1a3a4a');
  
  // Add some noise/texture for realism
  ctx.shadowBlur = 0;
  for (let i = 0; i < 5000; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 512;
    const size = Math.random() * 2;
    ctx.fillStyle = `rgba(0, 212, 212, ${Math.random() * 0.1})`;
    ctx.fillRect(x, y, size, size);
  }
  
  // Add city lights effect
  const cityLocations = [
    [180, 140], [200, 180], [250, 200], // North America
    [240, 350], [260, 300], // South America
    [510, 120], [530, 100], [550, 130], // Europe
    [500, 250], [540, 280], // Africa
    [700, 150], [750, 120], [800, 180], [650, 200], // Asia
    [830, 360], // Australia
  ];
  
  cityLocations.forEach(([x, y]) => {
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
    gradient.addColorStop(0, 'rgba(0, 212, 212, 0.8)');
    gradient.addColorStop(0.5, 'rgba(0, 212, 212, 0.3)');
    gradient.addColorStop(1, 'rgba(0, 212, 212, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(x - 8, y - 8, 16, 16);
  });
  
  return new THREE.CanvasTexture(canvas);
};

// Create cloud texture
const createCloudTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;
  
  ctx.fillStyle = 'rgba(0, 0, 0, 0)';
  ctx.fillRect(0, 0, 1024, 512);
  
  // Add wispy cloud patterns
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 512;
    const width = 50 + Math.random() * 150;
    const height = 20 + Math.random() * 40;
    const opacity = 0.1 + Math.random() * 0.15;
    
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, width / 2);
    gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
    gradient.addColorStop(0.5, `rgba(255, 255, 255, ${opacity * 0.5})`);
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.ellipse(x, y, width / 2, height / 2, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  
  return new THREE.CanvasTexture(canvas);
};

const Earth = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  
  const earthTexture = useMemo(() => createEarthTexture(), []);
  const cloudTexture = useMemo(() => createCloudTexture(), []);

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group>
      {/* Earth sphere */}
      <Sphere ref={earthRef} args={[2, 64, 64]}>
        <meshStandardMaterial
          map={earthTexture}
          roughness={0.8}
          metalness={0.1}
        />
      </Sphere>
      
      {/* Cloud layer */}
      <Sphere ref={cloudsRef} args={[2.02, 64, 64]}>
        <meshStandardMaterial
          map={cloudTexture}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </Sphere>
      
      {/* Inner atmosphere glow */}
      <Sphere args={[2.05, 64, 64]}>
        <meshBasicMaterial
          color="#00D4D4"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </Sphere>
      
      {/* Outer atmosphere glow */}
      <Sphere ref={atmosphereRef} args={[2.3, 64, 64]}>
        <shaderMaterial
          transparent
          depthWrite={false}
          side={THREE.BackSide}
          uniforms={{
            glowColor: { value: new THREE.Color('#00D4D4') },
          }}
          vertexShader={`
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying vec3 vNormal;
            uniform vec3 glowColor;
            void main() {
              float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
              gl_FragColor = vec4(glowColor, intensity * 0.4);
            }
          `}
        />
      </Sphere>
    </group>
  );
};

const Globe = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  // Generate connection points (simulating global connections)
  const connectionPoints = useMemo(() => {
    const points: { start: [number, number, number]; end: [number, number, number] }[] = [
      { start: [1.5, 0.5, 1], end: [-1, 1, 1.5] },
      { start: [-1.5, -0.3, 1.2], end: [1.2, 0.8, -1] },
      { start: [0.5, 1.5, 1], end: [-1.2, -1, 1] },
      { start: [1, -0.5, 1.5], end: [-0.5, 1.2, -1.3] },
    ];
    return points;
  }, []);

  return (
    <group>
      <Earth />
      
      {/* Connection arcs - rotating with globe */}
      <group ref={groupRef}>
        {connectionPoints.map((connection, i) => (
          <ConnectionArc key={i} start={connection.start} end={connection.end} />
        ))}
        
        {/* Glow points at major tech hubs */}
        <GlowPoint position={[1.5, 0.5, 1]} />
        <GlowPoint position={[-1, 1, 1.5]} />
        <GlowPoint position={[-1.5, -0.3, 1.2]} />
        <GlowPoint position={[1.2, 0.8, -1]} />
        <GlowPoint position={[0.5, 1.5, 1]} />
        <GlowPoint position={[-0.8, -0.5, 1.7]} />
        <GlowPoint position={[1.8, -0.2, 0.8]} />
      </group>
    </group>
  );
};

const ConnectionArc = ({ start, end }: { start: [number, number, number]; end: [number, number, number] }) => {
  const lineRef = useRef<any>(null);
  
  const points = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...start),
      new THREE.Vector3(
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2 + 1.5,
        (start[2] + end[2]) / 2
      ),
      new THREE.Vector3(...end)
    );
    return curve.getPoints(50).map((p) => [p.x, p.y, p.z] as [number, number, number]);
  }, [start, end]);

  return (
    <Line
      ref={lineRef}
      points={points}
      color="#00D4D4"
      lineWidth={1.5}
      transparent
      opacity={0.7}
    />
  );
};

const GlowPoint = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.3;
      meshRef.current.scale.setScalar(scale);
    }
    if (ringRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.5;
      ringRef.current.scale.setScalar(scale);
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity = 0.3 - Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <group position={position}>
      {/* Core glow */}
      <Sphere ref={meshRef} args={[0.06, 16, 16]}>
        <meshBasicMaterial color="#00D4D4" />
      </Sphere>
      {/* Pulsing ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.08, 0.12, 32]} />
        <meshBasicMaterial color="#00D4D4" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#7C3AED" />
      <Globe />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

export const HeroGlobe = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};
