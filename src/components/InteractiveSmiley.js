import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function SmileyFace({ mouse }) {
  const faceRef = useRef();
  const handRef = useRef();

  // Animate face to follow mouse
  useFrame(() => {
    if (faceRef.current) {
      faceRef.current.rotation.y = mouse.current.x / 200;
      faceRef.current.rotation.x = -mouse.current.y / 200;
    }
    // Waving hand animation
    if (handRef.current) {
      handRef.current.rotation.z = Math.sin(Date.now() * 0.003) * 0.5 + 0.5;
    }
  });

  // Helper to create an arc (for smile and eyes)
  function Arc({
    radius,
    startAngle,
    endAngle,
    thickness = 0.12,
    position,
    rotation,
  }) {
    const curve = new THREE.ArcCurve(0, 0, radius, startAngle, endAngle, false);
    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return (
      <line position={position} rotation={rotation} geometry={geometry}>
        <lineBasicMaterial
          attach="material"
          color="#2196f3"
          linewidth={thickness}
        />
      </line>
    );
  }

  // Helper to create a finger (rounded end)
  function Finger({ angle, length = 0.38, thickness = 0.07, offset = 0.32 }) {
    // Finger base position
    const x = offset * Math.cos(angle);
    const y = offset * Math.sin(angle);
    // Finger tip position
    const tipX = (offset + length / 2) * Math.cos(angle);
    const tipY = (offset + length / 2) * Math.sin(angle);
    return (
      <group position={[x, y, 0]} rotation={[0, 0, angle - Math.PI / 2]}>
        {/* Finger shaft */}
        <mesh>
          <cylinderGeometry args={[thickness / 2, thickness / 2, length, 16]} />
          <meshBasicMaterial
            color="#2196f3"
            wireframe={false}
            side={THREE.DoubleSide}
          />
        </mesh>
        {/* Finger tip (rounded) */}
        <mesh position={[0, length / 2, 0]}>
          <sphereGeometry args={[thickness / 2, 16, 16]} />
          <meshBasicMaterial
            color="#2196f3"
            wireframe={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    );
  }

  // Angles for fingers (spread out more)
  const fingerAngles = [
    Math.PI / 6, // thumb
    Math.PI / 3.5,
    Math.PI / 2.3,
    Math.PI / 1.7,
    Math.PI / 1.3, // pinky
  ];

  return (
    <group ref={faceRef}>
      {/* Face Outline */}
      <mesh>
        <ringGeometry args={[1.38, 1.5, 64]} />
        <meshBasicMaterial
          color="#2196f3"
          side={THREE.DoubleSide}
          wireframe={false}
        />
      </mesh>
      {/* Smile (happy, upward arc) */}
      <Arc
        radius={0.7}
        startAngle={0.15 * Math.PI}
        endAngle={0.85 * Math.PI}
        position={[0, -0.25, 0.01]}
        rotation={[Math.PI, 0, 0]}
        thickness={0.13}
      />
      {/* Left Eye (arched upward) */}
      <Arc
        radius={0.16}
        startAngle={1.15 * Math.PI}
        endAngle={1.85 * Math.PI}
        position={[-0.5, 0.45, 0.01]}
        thickness={0.11}
      />
      {/* Right Eye (arched upward) */}
      <Arc
        radius={0.16}
        startAngle={1.15 * Math.PI}
        endAngle={1.85 * Math.PI}
        position={[0.5, 0.45, 0.01]}
        thickness={0.11}
      />
      {/* Waving Hand */}
      <group ref={handRef} position={[1.55, 0.7, 0]} rotation={[0, 0, 0]}>
        {/* Palm (outline) */}
        <mesh>
          <ringGeometry args={[0.23, 0.28, 32]} />
          <meshBasicMaterial
            color="#2196f3"
            side={THREE.DoubleSide}
            wireframe={false}
          />
        </mesh>
        {/* Fingers (rounded, spaced) */}
        {fingerAngles.map((angle, i) => (
          <Finger key={i} angle={angle} />
        ))}
      </group>
    </group>
  );
}

export default function InteractiveSmiley() {
  const mouse = React.useRef({ x: 0, y: 0 });

  return (
    <div
      style={{ width: 180, height: 180, cursor: "pointer" }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouse.current.x = e.clientX - rect.left - rect.width / 2;
        mouse.current.y = e.clientY - rect.top - rect.height / 2;
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <SmileyFace mouse={mouse} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}
