

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Hamburguesa y refresco.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.2}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.hamburger_and_soda.geometry} material={materials.material} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Hamburguesa y refresco.gltf')
