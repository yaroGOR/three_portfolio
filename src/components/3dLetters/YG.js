

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';

export function YG(props) {
  const { nodes, materials } = useGLTF('/models/YG.gltf')
  console.log(materials);
  return (
  
    <group {...props} dispose={null}>
      <pointLight intensity={2} decay={2} distance={10000} color="white" position={[-30, 0, 0.03]} rotation={[-Math.PI / 2, 0, 0]} scale={0.5} />
      <mesh geometry={nodes.Cone_2.geometry} material={materials['Clear Glass']} position={[-55, 40, 15]} rotation={[-0.87, -1.1, 1.25]} scale={0.6} />
      <mesh geometry={nodes.Cone.geometry} material={materials['Clear Glass']} position={[20, 30, 40]} rotation={[-0.62, 0.54, 0]} scale={0.3} />
      <mesh geometry={nodes.Cone_3.geometry} material={materials['Clear Glass']} position={[0, 10, 20]} rotation={[0.51, 0.58, 2.34]} scale={0.7} />
      <mesh geometry={nodes.Cone_1.geometry} material={materials['Clear Glass']} position={[-40, 5, 50]} rotation={[1.9, -0.47, Math.PI]} scale={0.6} />
      <mesh geometry={nodes['3D_Text_1_-_G'].geometry} material={materials.Blue} position={[-10, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1} material-color = 'white' />
      <mesh geometry={nodes['3D_Text_-_Y'].geometry} material={materials.Wax} position={[-40, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1} material-color="white" />
    </group>
  )
}

useGLTF.preload('/models/YG.gltf')
