import React, { Suspense, useRef } from "react";
import { Html, Stage } from '@react-three/drei'
import { Canvas, useFrame,useThree} from "@react-three/fiber";
import { OrbitControls, useGLTF,PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { ContactShadows } from '@react-three/drei'


import { YG } from "./YG";
import { PointLightHelperProps } from "react-three-fiber";
import { PointLight } from "three";


const deg2rad = (degrees) => degrees * (Math.PI / 180);

function Rig() {
    const { camera, mouse } = useThree()
    const vec = new THREE.Vector3()
    return useFrame(() => camera.position.lerp(vec.set(mouse.x * 8, mouse.y * 4, camera.position.z), 0.1))
  }


export default function ModelViewer() {
   
  return (
   <div >
      <Canvas  dpr={[1, 3]} camera={{ position: [40,0,100],fov: 110 }}>
        <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
          <pointLight position = {[10,20,10]} />
           <YG />
           <directionalLight castShadow position={[90, 20, -10]} intensity={4} />
        </Suspense>
        <Rig/>
      </Canvas>
    </div>

  )
}
