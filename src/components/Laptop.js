

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/laptop.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.39, 0.3, 0.32]} scale={[0.05, 0.02, 0.05]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials['Material.006']} />
            <mesh geometry={nodes.Object_5.geometry} material={materials['Material.031']} />
          </group>
          <group position={[0.48, 0.24, 0.12]} scale={[0.82, 1, 1]}>
            <mesh geometry={nodes.Object_7.geometry} material={materials['Material.025']} />
            <mesh geometry={nodes.Object_8.geometry} material={materials['Material.002']} />
            <mesh geometry={nodes.Object_9.geometry} material={materials['Material.007']} />
            <mesh geometry={nodes.Object_10.geometry} material={materials['Material.005']} />
          </group>
          <group position={[0.48, 0.29, -0.28]} rotation={[0.02, 0, 0]} scale={[0.82, 1, 1]}>
            <mesh geometry={nodes.Object_12.geometry} material={materials['Material.006']} />
            <mesh geometry={nodes.Object_13.geometry} material={materials['Material.007']} />
          </group>
          <group position={[0.48, 0.32, 0.72]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 0.61, 1]}>
            <mesh geometry={nodes.Object_15.geometry} material={materials['Material.025']} />
            <mesh geometry={nodes.Object_16.geometry} material={materials['Material.003']} />
            <mesh geometry={nodes.Object_17.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.Object_18.geometry} material={materials['Material.008']} />
          </group>
          <group position={[0.47, 0.19, 0.66]}>
            <mesh geometry={nodes.Object_20.geometry} material={materials['Material.025']} />
            <mesh geometry={nodes.Object_21.geometry} material={materials['Material.002']} />
          </group>
          <group position={[1.37, 0.18, 0.66]} scale={[1, 1.72, 1]}>
            <mesh geometry={nodes.Object_23.geometry} material={materials['Material.007']} />
            <mesh geometry={nodes.Object_24.geometry} material={materials['Material.006']} />
          </group>
          <group position={[1.4, 0.3, 0.72]} rotation={[0.17, 0, 0]} scale={[1.2, 0.95, 0.95]}>
            <mesh geometry={nodes.Object_26.geometry} material={materials['Material.005']} />
          </group>
          <group position={[1.4, 0.26, 0.14]} scale={[0.02, 0, 0.03]}>
            <mesh geometry={nodes.Object_28.geometry} material={materials['Material.010']} />
            <mesh geometry={nodes.Object_29.geometry} material={materials['Material.011']} />
          </group>
          <group position={[1.4, 0.26, 0.07]} scale={[0.02, 0, 0.03]}>
            <mesh geometry={nodes.Object_31.geometry} material={materials['Material.010']} />
            <mesh geometry={nodes.Object_32.geometry} material={materials['Material.011']} />
          </group>
          <group position={[1.4, 0.26, 0.14]} scale={[0.02, 0, 0.03]}>
            <mesh geometry={nodes.Object_34.geometry} material={materials['Material.010']} />
            <mesh geometry={nodes.Object_35.geometry} material={materials['Material.011']} />
          </group>
          <group position={[0.48, 0.24, 0.16]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.82, 1, 1]}>
            <mesh geometry={nodes.Object_37.geometry} material={materials['Material.005']} />
          </group>
          <group position={[-0.43, 0.26, 0.13]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.02, 0, 0.03]}>
            <mesh geometry={nodes.Object_39.geometry} material={materials['Material.010']} />
            <mesh geometry={nodes.Object_40.geometry} material={materials['Material.011']} />
          </group>
          <group position={[0.48, 0.24, 0.24]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.82, 1, 1]}>
            <mesh geometry={nodes.Object_42.geometry} material={materials['Material.005']} />
          </group>
          <group position={[-0.43, 0.26, 0.21]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.02, 0, 0.03]}>
            <mesh geometry={nodes.Object_44.geometry} material={materials['Material.010']} />
            <mesh geometry={nodes.Object_45.geometry} material={materials['Material.011']} />
          </group>
          <group position={[0.48, 0.22, 0.67]} rotation={[0, -Math.PI / 2, 0]} scale={[0.02, 0, 0.04]}>
            <mesh geometry={nodes.Object_47.geometry} material={materials['Material.010']} />
            <mesh geometry={nodes.Object_48.geometry} material={materials['Material.011']} />
          </group>
          <group position={[0.46, 1.04, 0.74]} rotation={[Math.PI / 2, 0, 0]} scale={[0.14, 0.1, 0.1]}>
            <mesh geometry={nodes.Object_50.geometry} material={materials['Material.025']} />
          </group>
          <group position={[-0.46, 0.26, 0.05]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.01, 0, 0.02]}>
            <mesh geometry={nodes.Object_52.geometry} material={materials['Material.010']} />
            <mesh geometry={nodes.Object_53.geometry} material={materials['Material.011']} />
          </group>
          <group position={[-0.5, 0.26, 0.01]} rotation={[0, 0, -Math.PI / 2]} scale={0}>
            <mesh geometry={nodes.Object_55.geometry} material={materials.material_0} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/laptop.gltf')
