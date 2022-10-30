/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export function Text(props) {
  const { nodes, materials } = useGLTF('/models/Text.gltf')
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera makeDefault={false} far={36.75} near={0.01} fov={35} position={[0.01, 0.09, 0.46]} />
      <mesh geometry={nodes.Merged_Objects_1.geometry} material={materials['Terrace View']} position={[0.01, 0.02, 0.01]} rotation={[-Math.PI / 2, 0, 0]} scale={0.5} />
    </group>
  )
}

useGLTF.preload('/models/Text.gltf')