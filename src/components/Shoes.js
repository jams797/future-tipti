

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoes.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.2}>
          <mesh geometry={nodes.g0.geometry} material={materials.material} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/shoes.gltf')
