

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/juguete superheroe.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hero_action_figure1.geometry}
        material={nodes.hero_action_figure1.material}
        scale={0.4}
      />
    </group>
  )
}

useGLTF.preload('/juguete superheroe.glb')
