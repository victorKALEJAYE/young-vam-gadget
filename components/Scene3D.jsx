'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';

const BLUE = '#2f5bff';
const NAVY = '#141c46';
const CHALK = '#eef2ff';
const GOLD = '#ffc94d';

function Body({ color = NAVY }) {
  return <meshStandardMaterial color={color} metalness={0.85} roughness={0.25} />;
}

function Screen() {
  return <meshStandardMaterial color={BLUE} emissive={BLUE} emissiveIntensity={0.55} metalness={0.3} roughness={0.2} />;
}

function Phone(props) {
  return (
    <group {...props}>
      <RoundedBox args={[1.6, 3.2, 0.18]} radius={0.14} smoothness={4}>
        <Body />
      </RoundedBox>
      <mesh position={[0, 0, 0.095]}>
        <planeGeometry args={[1.42, 2.98]} />
        <Screen />
      </mesh>
      <mesh position={[-0.42, 1.18, -0.11]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.06, 24]} />
        <meshStandardMaterial color={CHALK} metalness={0.4} roughness={0.2} />
      </mesh>
    </group>
  );
}

function Laptop(props) {
  return (
    <group {...props}>
      <RoundedBox args={[3.2, 0.12, 2.1]} radius={0.05} smoothness={3}>
        <Body color="#c9d4ff" />
      </RoundedBox>
      <group position={[0, 0.06, -1.03]} rotation={[-0.32, 0, 0]}>
        <RoundedBox args={[3.2, 2.1, 0.08]} radius={0.05} smoothness={3} position={[0, 1.05, 0]}>
          <Body color="#c9d4ff" />
        </RoundedBox>
        <mesh position={[0, 1.05, 0.045]}>
          <planeGeometry args={[2.95, 1.85]} />
          <Screen />
        </mesh>
      </group>
    </group>
  );
}

function Headphones(props) {
  return (
    <group {...props}>
      <mesh>
        <torusGeometry args={[1.1, 0.12, 16, 48, Math.PI]} />
        <meshStandardMaterial color={CHALK} metalness={0.3} roughness={0.35} />
      </mesh>
      {[-1.1, 1.1].map((x) => (
        <mesh key={x} position={[x, -0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.45, 0.45, 0.38, 32]} />
          <meshStandardMaterial color={BLUE} metalness={0.6} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function Watch(props) {
  return (
    <group {...props}>
      <RoundedBox args={[0.7, 3, 0.08]} radius={0.03} smoothness={2} position={[0, 0, -0.12]}>
        <meshStandardMaterial color={GOLD} roughness={0.6} />
      </RoundedBox>
      <RoundedBox args={[1, 1.2, 0.3]} radius={0.18} smoothness={4}>
        <Body />
      </RoundedBox>
      <mesh position={[0, 0, 0.155]}>
        <planeGeometry args={[0.78, 0.98]} />
        <Screen />
      </mesh>
    </group>
  );
}

function BudsCase(props) {
  return (
    <group {...props}>
      <RoundedBox args={[1.5, 1.2, 0.7]} radius={0.3} smoothness={5}>
        <meshStandardMaterial color={CHALK} roughness={0.25} metalness={0.1} />
      </RoundedBox>
      <mesh position={[0, 0.18, 0.36]}>
        <boxGeometry args={[1.3, 0.02, 0.02]} />
        <meshStandardMaterial color="#9aa6d6" />
      </mesh>
    </group>
  );
}

function Dust({ count = 600 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 36;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 24;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.02;
    ref.current.rotation.x = state.pointer.y * 0.08;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#8fb0ff" size={0.05} sizeAttenuation transparent opacity={0.8} />
    </points>
  );
}

function Rig({ children }) {
  const group = useRef();
  useFrame((state) => {
    const scroll = typeof window !== 'undefined' ? window.scrollY : 0;
    const narrow = state.size.width < 700;
    const targetZ = narrow ? 21 : 14;
    state.camera.position.x += (state.pointer.x * 2 - state.camera.position.x) * 0.05;
    state.camera.position.y += (state.pointer.y * 1.4 - state.camera.position.y) * 0.05;
    state.camera.position.z += (targetZ - state.camera.position.z) * 0.05;
    state.camera.lookAt(0, 0, 0);
    if (group.current) {
      group.current.position.y = scroll * 0.004;
      group.current.rotation.y = scroll * 0.0006;
    }
  });
  return <group ref={group}>{children}</group>;
}

export default function Scene3D() {
  const reduce =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const speed = reduce ? 0 : 1.4;

  return (
    <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 14], fov: 50 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.6} color="#6f86ff" />
      <pointLight position={[6, 5, 8]} intensity={120} color={BLUE} />
      <pointLight position={[-8, -4, 6]} intensity={60} color={GOLD} />
      <directionalLight position={[0, 6, 10]} intensity={1.2} />
      <Rig>
        <Float speed={speed} rotationIntensity={1.2} floatIntensity={1.4}>
          <Phone position={[-7, 3, -2]} rotation={[0.2, 0.5, 0.1]} />
        </Float>
        <Float speed={speed * 0.8} rotationIntensity={0.8} floatIntensity={1}>
          <Laptop position={[7.5, -3.5, -4]} rotation={[0.4, -0.6, 0]} scale={0.9} />
        </Float>
        <Float speed={speed} rotationIntensity={1.5} floatIntensity={1.2}>
          <Headphones position={[6.5, 3.8, -1]} rotation={[0.3, -0.4, 0.2]} />
        </Float>
        <Float speed={speed * 1.2} rotationIntensity={1.4} floatIntensity={1.4}>
          <Watch position={[-6.5, -3.6, 0]} rotation={[0.3, 0.6, -0.3]} scale={0.9} />
        </Float>
        <Float speed={speed} rotationIntensity={1} floatIntensity={1}>
          <Phone position={[2.5, -6, -6]} rotation={[-0.3, -0.8, 0.4]} scale={0.8} />
        </Float>
        <Float speed={speed * 0.9} rotationIntensity={1.6} floatIntensity={1.6}>
          <BudsCase position={[-2.5, 6, -6]} rotation={[0.5, 0.4, 0]} />
        </Float>
        <Float speed={speed * 0.7} rotationIntensity={2} floatIntensity={1}>
          <mesh position={[-10, -0.5, -7]}>
            <icosahedronGeometry args={[1.4, 1]} />
            <meshBasicMaterial color="#8fb0ff" wireframe transparent opacity={0.35} />
          </mesh>
        </Float>
      </Rig>
      <Dust />
    </Canvas>
  );
}
