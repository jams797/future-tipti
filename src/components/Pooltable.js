

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/pooltable.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.None} />
      </group>
    </group>
  )
}

useGLTF.preload('/pooltable.gltf')
