

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/monitor.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, Math.PI]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.009}>
          <group rotation={[0, 0, Math.PI / 2]} scale={[19.41, 536.21, 242.2]}>
            <mesh geometry={nodes.Ultrawide_Monitor_Screen_0.geometry} material={materials.Screen} />
            <mesh geometry={nodes.Ultrawide_Monitor_Body_0.geometry} material={materials.Body} />
            <mesh geometry={nodes.Ultrawide_Monitor_Body_0_1.geometry} material={materials.Body} />
            <mesh geometry={nodes.Ultrawide_Monitor_Lights_0.geometry} material={materials.Lights} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/monitor.gltf')
