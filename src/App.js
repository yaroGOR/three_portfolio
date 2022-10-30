import React, { Suspense } from "react";
import { useRef } from "react";
import { Stage } from '@react-three/drei'
import { Canvas, UseFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF,PerspectiveCamera } from "@react-three/drei";
import { Text3D } from "./components/Text3d";
import { Model } from "./components/Scene";
import { Text } from "./components/Text";
import { YG } from "./components/YG";
import { PointLightHelperProps } from "react-three-fiber";
import { PointLight } from "three";

export default function App() {
  return (
    <div >
      <Canvas dpr={[1, 3]} camera={{ position:[5,3,13],fov: 45 }}>
        <color attach="background" args={['transparent']} />
        <Suspense fallback={null}>
          <ambientLight/>
          <pointLight position = {[10,10,10]} />
           <YG />
        </Suspense>
      </Canvas>
    <h1> Yaroslav Portfolio </h1>
    </div>

  )
}
