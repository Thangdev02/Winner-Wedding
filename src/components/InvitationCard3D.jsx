import React, { useRef, Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Html, Text } from '@react-three/drei';
import * as THREE from 'three';

function TextOverlay({ content }) {
  return (
    <group position={[0, 0, 0.035]}>

      <Text
        position={[0, 0.45, 0]}
        fontSize={0.13}
        color="#2d3436"
        anchorX="center"
        anchorY="middle"
      >
        {content.message}
      </Text>

      <Text
        position={[0, 0.2, 0]}
        fontSize={0.18}
        color="#1e272e"
        anchorX="center"
        anchorY="middle"
      >
        {content.brideName}
      </Text>

      <Text
        position={[0, 0.05, 0]}
        fontSize={0.1}
        color="#636e72"
        anchorX="center"
        anchorY="middle"
      >
        &
      </Text>

      <Text
        position={[0, -0.1, 0]}
        fontSize={0.18}
        color="#1e272e"
        anchorX="center"
        anchorY="middle"
      >
        {content.groomName}
      </Text>

      <Text
        position={[0, -0.35, 0]}
        fontSize={0.1}
        color="#636e72"
        anchorX="center"
        anchorY="middle"
      >
        {content.date}
      </Text>

      <Text
        position={[0, -0.5, 0]}
        fontSize={0.08}
        color="#636e72"
        maxWidth={2}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
      >
        {content.venue}
      </Text>

    </group>
  );
}



function Model({ showOverlay, content }) {
  const { scene } = useGLTF('/Invitation.glb');
  
  return (
    <group>
      <primitive 
        object={scene} 
        scale={1.5} 
        position={[0, 0, 0]}
      />
      
      {/* Overlay với nội dung tùy chỉnh */}
      {showOverlay && <TextOverlay content={content} />}
    </group>
  );
}

function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#8B9D83] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Đang tải thiệp 3D...</p>
      </div>
    </div>
  );
}

const InvitationCard3D = ({ currentSection, customContent = null }) => {
  // Nội dung mặc định
  const defaultContent = {
    groomName: 'Muhamad Reyhan',
    brideName: 'Junitasari Rahmayanti',
    date: '07.08.2021',
    venue: 'Masjid Istiqlal Islam\nGrand Wisata, Tambun\n06.30-11.00 wib',
    message: 'Baarakallahu laka,\nwa baaraka \'alaika,\nwa jama\'a aynakunaa fii khair'
  };

  const content = customContent || defaultContent;

  return (
    <div className="w-full h-[600px] relative">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          <spotLight position={[0, 10, 0]} angle={0.3} intensity={0.8} />

          {/* Environment for reflections */}
          <Environment preset="sunset" />

          {/* Model với overlay */}
          <Model showOverlay={false} content={content} />

          {/* OrbitControls for manual control */}
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={2}
            maxDistance={10}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

// Preload the model
useGLTF.preload('/Invitation.glb');

export default InvitationCard3D;