import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Line, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Globe = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  const linesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  // Generate latitude lines
  const latitudeLines = useMemo(() => {
    const lines: [number, number, number][][] = [];
    for (let lat = -60; lat <= 60; lat += 30) {
      const points: [number, number, number][] = [];
      for (let lng = 0; lng <= 360; lng += 10) {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = lng * (Math.PI / 180);
        const x = 2 * Math.sin(phi) * Math.cos(theta);
        const y = 2 * Math.cos(phi);
        const z = 2 * Math.sin(phi) * Math.sin(theta);
        points.push([x, y, z]);
      }
      lines.push(points);
    }
    return lines;
  }, []);

  // Generate longitude lines
  const longitudeLines = useMemo(() => {
    const lines: [number, number, number][][] = [];
    for (let lng = 0; lng < 360; lng += 30) {
      const points: [number, number, number][] = [];
      for (let lat = -90; lat <= 90; lat += 10) {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = lng * (Math.PI / 180);
        const x = 2 * Math.sin(phi) * Math.cos(theta);
        const y = 2 * Math.cos(phi);
        const z = 2 * Math.sin(phi) * Math.sin(theta);
        points.push([x, y, z]);
      }
      lines.push(points);
    }
    return lines;
  }, []);

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
      {/* Main globe sphere */}
      <Sphere ref={globeRef} args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#0A0F2A"
          transparent
          opacity={0.3}
          roughness={0.8}
          metalness={0.2}
        />
      </Sphere>

      {/* Grid lines */}
      <group ref={linesRef}>
        {latitudeLines.map((points, i) => (
          <Line
            key={`lat-${i}`}
            points={points}
            color="#00D4D4"
            lineWidth={0.5}
            transparent
            opacity={0.3}
          />
        ))}
        {longitudeLines.map((points, i) => (
          <Line
            key={`lng-${i}`}
            points={points}
            color="#7C3AED"
            lineWidth={0.5}
            transparent
            opacity={0.3}
          />
        ))}
      </group>

      {/* Connection arcs */}
      {connectionPoints.map((connection, i) => (
        <ConnectionArc key={i} start={connection.start} end={connection.end} />
      ))}

      {/* Glow points */}
      <GlowPoint position={[1.5, 0.5, 1]} />
      <GlowPoint position={[-1, 1, 1.5]} />
      <GlowPoint position={[-1.5, -0.3, 1.2]} />
      <GlowPoint position={[1.2, 0.8, -1]} />
      <GlowPoint position={[0.5, 1.5, 1]} />
    </group>
  );
};

const ConnectionArc = ({ start, end }: { start: [number, number, number]; end: [number, number, number] }) => {
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
      points={points}
      color="#00D4D4"
      lineWidth={1.5}
      transparent
      opacity={0.6}
    />
  );
};

const GlowPoint = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.08, 16, 16]} position={position}>
      <meshBasicMaterial color="#00D4D4" />
    </Sphere>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D4D4" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7C3AED" />
      <Globe />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
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
