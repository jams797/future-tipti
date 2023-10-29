

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/guitar.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.E_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.A_LP__0.geometry} material={materials.A_LP__0} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.D_LP__0.geometry} material={materials.A_LP__0} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.G_LP__0.geometry} material={materials.A_LP__0} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.B_LP__0.geometry} material={materials.A_LP__0} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.e_LP__0.geometry} material={materials.A_LP__0} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.MiddlePickUp_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.UpperPickUp_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.LowerPickUp_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.BackPlastic_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.MetalPlate_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.ScrewNut_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.PickGuard_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Body_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.LowerKnob_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.MiddleKnob_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.UpperKnob_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Bridge_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.BridgeHolder_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.LowerStrapHolder_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.UpperStrapHolder_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.CableJack_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Screw_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Neck_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Frets_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Nut_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Lever_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.MachineHeads_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.TuningPeg_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.TuningMachine_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.BridgeScrews_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.StringHolder_LP_Stratocaster_0.geometry} material={materials.Stratocaster} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/guitar.gltf')
