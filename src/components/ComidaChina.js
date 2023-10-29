

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/comida china.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chinese_Takeout_Container_With_Chopsticks1.geometry}
        material={nodes.Chinese_Takeout_Container_With_Chopsticks1.material}
        scale={0.1}
      />
    </group>
  )
}

useGLTF.preload('/comida china.glb')
