import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, Float, MeshDistortMaterial, Html, OrbitControls, Billboard } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { Play, Pause, SkipForward } from "lucide-react";

interface HotspotData {
  position: [number, number, number];
  label: string;
  description: string;
  cameraPosition: [number, number, number];
}

const HOTSPOTS: HotspotData[] = [
  {
    position: [1.35, 0.15, 0.2],
    label: "HD Camera",
    description: "12MP camera with AI-powered object recognition and real-time scene analysis",
    cameraPosition: [3, 0.5, 2]
  },
  {
    position: [-0.7, 0, 0.35],
    label: "Left AR Display",
    description: "Holographic micro-LED display with 2K resolution per eye",
    cameraPosition: [-2, 0, 3]
  },
  {
    position: [0.7, 0, 0.35],
    label: "Right AR Display",
    description: "Holographic micro-LED display with 2K resolution per eye",
    cameraPosition: [2, 0, 3]
  },
  {
    position: [1.33, 0, -0.6],
    label: "Tech Module",
    description: "Snapdragon XR2 processor with 8GB RAM and neural processing unit",
    cameraPosition: [3, 0.5, -1]
  },
  {
    position: [-1.2, -0.15, 0.2],
    label: "Microphone",
    description: "Dual noise-canceling mics with voice command recognition",
    cameraPosition: [-3, -0.5, 2]
  },
  {
    position: [1.35, -0.02, -0.35],
    label: "Status LEDs",
    description: "Smart indicators for battery, connection, and recording status",
    cameraPosition: [3, 0, 0]
  },
];

interface HotspotProps {
  position: [number, number, number];
  label: string;
  description: string;
  isActive: boolean;
  onHover: (label: string | null) => void;
}

const Hotspot = ({ position, label, description, isActive, onHover }: HotspotProps) => {
  const ringRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ringRef.current) {
      ringRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.1);
    }
    if (outerRingRef.current) {
      outerRingRef.current.scale.setScalar(1.2 + Math.sin(t * 2 + 1) * 0.15);
      outerRingRef.current.rotation.z = t * 0.5;
    }
  });

  return (
    <Billboard position={position} follow={true} lockX={false} lockY={false} lockZ={false}>
      <group>
        {/* Invisible larger hit area for easier interaction */}
        <mesh
          onPointerOver={(e) => {
            e.stopPropagation();
            onHover(label);
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            onHover(null);
          }}
        >
          <circleGeometry args={[0.15, 32]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
        
        {/* Outer pulsing ring */}
        <mesh ref={outerRingRef}>
          <ringGeometry args={[0.08, 0.1, 32]} />
          <meshBasicMaterial 
            color={isActive ? "#00ff88" : "#00D4D4"} 
            transparent 
            opacity={isActive ? 0.6 : 0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
        
        {/* Inner ring */}
        <mesh ref={ringRef}>
          <ringGeometry args={[0.04, 0.06, 32]} />
          <meshBasicMaterial 
            color={isActive ? "#00ff88" : "#00D4D4"} 
            transparent 
            opacity={isActive ? 1 : 0.8}
            side={THREE.DoubleSide}
          />
        </mesh>
        
        {/* Center dot */}
        <mesh>
          <circleGeometry args={[0.025, 32]} />
          <meshBasicMaterial color={isActive ? "#00ff88" : "#00D4D4"} />
        </mesh>
        
        {/* Tooltip */}
        {isActive && (
          <Html
            position={[0, 0.25, 0]}
            center
            distanceFactor={5}
            style={{
              pointerEvents: 'none',
              userSelect: 'none',
              transition: 'opacity 0.2s ease',
            }}
          >
            <div className="bg-background/95 backdrop-blur-md border border-primary/30 rounded-lg px-3 py-2 min-w-[180px] max-w-[220px] shadow-lg shadow-primary/20 animate-fade-in">
              <h5 className="text-primary font-semibold text-sm mb-1">{label}</h5>
              <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
            </div>
          </Html>
        )}
      </group>
    </Billboard>
  );
};

interface CameraControllerProps {
  tourActive: boolean;
  currentHotspotIndex: number;
}

const CameraController = ({ tourActive, currentHotspotIndex }: CameraControllerProps) => {
  const { camera } = useThree();
  const targetPosition = useRef(new THREE.Vector3(0, 0, 5));
  const defaultPosition = new THREE.Vector3(0, 0, 5);
  
  useFrame((_, delta) => {
    if (tourActive && currentHotspotIndex >= 0 && currentHotspotIndex < HOTSPOTS.length) {
      const hotspot = HOTSPOTS[currentHotspotIndex];
      targetPosition.current.set(...hotspot.cameraPosition);
    } else {
      targetPosition.current.copy(defaultPosition);
    }
    
    // Smooth camera movement
    camera.position.lerp(targetPosition.current, delta * 2);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

const SmartGlasses = ({ activeHotspot, onHotspotHover }: { activeHotspot: string | null; onHotspotHover: (label: string | null) => void }) => {
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
            emissiveIntensity={activeHotspot?.includes("AR Display") ? 0.8 : 0.4}
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
            emissiveIntensity={activeHotspot?.includes("AR Display") ? 0.8 : 0.4}
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
            <meshStandardMaterial 
              color="#0d0d1a" 
              metalness={0.85} 
              roughness={0.15}
              emissive={activeHotspot === "Tech Module" ? "#7C3AED" : "#000000"}
              emissiveIntensity={activeHotspot === "Tech Module" ? 0.3 : 0}
            />
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
          <meshStandardMaterial 
            color="#0a0a15" 
            metalness={0.95} 
            roughness={0.05}
            emissive={activeHotspot === "HD Camera" ? "#00ff88" : "#000000"}
            emissiveIntensity={activeHotspot === "HD Camera" ? 0.5 : 0}
          />
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
          <meshBasicMaterial color={activeHotspot === "Status LEDs" ? "#ff4488" : "#00D4D4"} />
        </mesh>
        
        {/* Microphone pinhole */}
        <mesh position={[-1.2, -0.15, 0.15]}>
          <cylinderGeometry args={[0.015, 0.015, 0.05, 8]} />
          <meshStandardMaterial 
            color="#0a0a15" 
            metalness={0.9} 
            roughness={0.1}
            emissive={activeHotspot === "Microphone" ? "#00D4D4" : "#000000"}
            emissiveIntensity={activeHotspot === "Microphone" ? 0.5 : 0}
          />
        </mesh>
        
        {/* Subtle glow ring around lenses */}
        <mesh position={[-0.7, 0, 0.23]}>
          <ringGeometry args={[0.48, 0.52, 32]} />
          <meshBasicMaterial color="#00D4D4" transparent opacity={activeHotspot?.includes("AR Display") ? 0.4 : 0.15} side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[0.7, 0, 0.23]}>
          <ringGeometry args={[0.48, 0.52, 32]} />
          <meshBasicMaterial color="#00D4D4" transparent opacity={activeHotspot?.includes("AR Display") ? 0.4 : 0.15} side={THREE.DoubleSide} />
        </mesh>

        {/* Interactive Hotspots */}
        {HOTSPOTS.map((hotspot, index) => (
          <Hotspot
            key={index}
            position={hotspot.position}
            label={hotspot.label}
            description={hotspot.description}
            isActive={activeHotspot === hotspot.label}
            onHover={onHotspotHover}
          />
        ))}
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

interface SceneProps {
  activeHotspot: string | null;
  onHotspotHover: (label: string | null) => void;
  tourActive: boolean;
  currentHotspotIndex: number;
}

const Scene = ({ activeHotspot, onHotspotHover, tourActive, currentHotspotIndex }: SceneProps) => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#00D4D4" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#7C3AED" />
      <spotLight position={[0, 5, 0]} intensity={0.8} color="#ffffff" angle={0.5} />
      
      <CameraController 
        tourActive={tourActive} 
        currentHotspotIndex={currentHotspotIndex}
      />
      
      <SmartGlasses activeHotspot={activeHotspot} onHotspotHover={onHotspotHover} />
      <DataOrbs />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={!tourActive}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 2.5}
      />
    </>
  );
};

export const ProductViewer3D = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [tourActive, setTourActive] = useState(false);
  const [currentHotspotIndex, setCurrentHotspotIndex] = useState(-1);
  const [tourProgress, setTourProgress] = useState(0);

  // Auto-tour logic
  useEffect(() => {
    if (!tourActive) {
      setCurrentHotspotIndex(-1);
      setActiveHotspot(null);
      return;
    }

    // Start tour from first hotspot
    setCurrentHotspotIndex(0);
    setActiveHotspot(HOTSPOTS[0].label);

    const interval = setInterval(() => {
      setCurrentHotspotIndex((prev) => {
        const next = prev + 1;
        if (next >= HOTSPOTS.length) {
          setTourActive(false);
          setActiveHotspot(null);
          return -1;
        }
        setActiveHotspot(HOTSPOTS[next].label);
        return next;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [tourActive]);

  // Progress bar animation
  useEffect(() => {
    if (!tourActive || currentHotspotIndex < 0) {
      setTourProgress(0);
      return;
    }

    setTourProgress(0);
    const startTime = Date.now();
    const duration = 3500;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setTourProgress(progress);
      
      if (progress < 1 && tourActive) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [currentHotspotIndex, tourActive]);

  const handleSkip = () => {
    if (currentHotspotIndex < HOTSPOTS.length - 1) {
      const nextIndex = currentHotspotIndex + 1;
      setCurrentHotspotIndex(nextIndex);
      setActiveHotspot(HOTSPOTS[nextIndex].label);
    } else {
      setTourActive(false);
    }
  };

  const handleHotspotHover = (label: string | null) => {
    if (!tourActive) {
      setActiveHotspot(label);
    }
  };

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
        <Scene 
          activeHotspot={activeHotspot} 
          onHotspotHover={handleHotspotHover}
          tourActive={tourActive}
          currentHotspotIndex={currentHotspotIndex}
        />
      </Canvas>
      
      {/* Tour Controls */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-2">
        <motion.button
          onClick={() => setTourActive(!tourActive)}
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground text-xs sm:text-sm font-medium backdrop-blur-sm transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {tourActive ? (
            <>
              <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">Pause</span>
              <span className="xs:hidden">⏸</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Tour</span>
            </>
          )}
        </motion.button>
        
        {tourActive && (
          <motion.button
            onClick={handleSkip}
            className="flex items-center gap-1 px-2.5 sm:px-3 py-2 rounded-full bg-background/60 hover:bg-background/80 text-foreground text-xs sm:text-sm backdrop-blur-sm transition-colors"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SkipForward className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Skip</span>
          </motion.button>
        )}
      </div>

      {/* Tour Progress Indicator */}
      {tourActive && currentHotspotIndex >= 0 && (
        <div className="absolute top-14 sm:top-16 left-3 sm:left-4 right-3 sm:right-4">
          <div className="flex gap-1 sm:gap-1.5">
            {HOTSPOTS.map((_, index) => (
              <div
                key={index}
                className="flex-1 h-1 rounded-full bg-background/30 overflow-hidden"
              >
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{
                    width: index < currentHotspotIndex 
                      ? "100%" 
                      : index === currentHotspotIndex 
                        ? `${tourProgress * 100}%` 
                        : "0%"
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            ))}
          </div>
          <p className="text-[10px] sm:text-xs text-muted-foreground mt-1.5 sm:mt-2 truncate">
            {currentHotspotIndex + 1}/{HOTSPOTS.length}: {HOTSPOTS[currentHotspotIndex]?.label}
          </p>
        </div>
      )}
      
      {/* Overlay info */}
      <motion.div
        className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3 sm:p-4 rounded-xl bg-background/80 backdrop-blur-sm border border-primary/20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered || tourActive ? 1 : 0.7, y: isHovered || tourActive ? 0 : 5 }}
        transition={{ duration: 0.3 }}
      >
        <h4 className="text-base sm:text-lg font-semibold text-foreground">Smart AR Glasses</h4>
        <p className="text-xs sm:text-sm text-muted-foreground">
          {tourActive 
            ? `Tour: ${activeHotspot || 'Starting...'}` 
            : activeHotspot 
              ? `Viewing: ${activeHotspot}` 
              : "Start tour or tap points to explore"}
        </p>
      </motion.div>

      {/* Feature legend - hidden on very small screens */}
      {!tourActive && (
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 hidden sm:flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-background/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Interactive points</span>
          </div>
        </div>
      )}
    </motion.div>
  );
};
