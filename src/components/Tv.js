

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/tv.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-1.6, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
          <group position={[-0.05, -6.05, -2.35]}>
            <mesh geometry={nodes.Screws_LP_lambert1_0.geometry} material={nodes.Screws_LP_lambert1_0.material} />
          </group>
          <group position={[-0.05, -8.57, -2]}>
            <mesh
              geometry={nodes.Bottom_and_back_LP_lambert1_0.geometry}
              material={nodes.Bottom_and_back_LP_lambert1_0.material}
            />
          </group>
          <group position={[0.68, -6.06, -17.55]}>
            <mesh geometry={nodes.Cable_cap_LP_lambert1_0.geometry} material={nodes.Cable_cap_LP_lambert1_0.material} />
          </group>
          <group position={[11.08, -8.66, -17.83]}>
            <mesh
              geometry={nodes.Back_Knobs_LP_lambert1_0.geometry}
              material={nodes.Back_Knobs_LP_lambert1_0.material}
            />
          </group>
          <group position={[-2.28, -12.25, -18.28]}>
            <mesh geometry={nodes.Back_Clip_LP_lambert1_0.geometry} material={nodes.Back_Clip_LP_lambert1_0.material} />
          </group>
          <group position={[-0.05, -5.11, -18.63]}>
            <mesh
              geometry={nodes.Back_trim_black_LP_lambert1_0.geometry}
              material={nodes.Back_trim_black_LP_lambert1_0.material}
            />
          </group>
          <group position={[11.08, -1.14, -15.93]}>
            <mesh
              geometry={nodes.Antenna_Base_LP_lambert1_0.geometry}
              material={nodes.Antenna_Base_LP_lambert1_0.material}
            />
          </group>
          <mesh geometry={nodes.Antenna_LP_lambert1_0.geometry} material={nodes.Antenna_LP_lambert1_0.material} />
          <group position={[-2.07, 2.68, -2.41]}>
            <mesh geometry={nodes.POPUP_TV_LP_lambert1_0.geometry} material={nodes.POPUP_TV_LP_lambert1_0.material} />
          </group>
          <group position={[4.94, 0.53, 5.84]} rotation={[-0.41, 0.47, 1.43]}>
            <mesh geometry={nodes.Knob_VHF_LP_lambert1_0.geometry} material={nodes.Knob_VHF_LP_lambert1_0.material} />
          </group>
          <group position={[4.94, 5.93, 3.04]} rotation={[-0.18, -0.38, -0.87]}>
            <mesh geometry={nodes.Knob_UHF_LP_lambert1_0.geometry} material={nodes.Knob_UHF_LP_lambert1_0.material} />
          </group>
          <group position={[-5.47, 3.52, 4.18]}>
            <mesh geometry={nodes.TV_Screen_LP_lambert2_0.geometry} material={nodes.TV_Screen_LP_lambert2_0.material} />
          </group>
          <group position={[11.08, -1.2, -1.18]}>
            <mesh
              geometry={nodes.Antenna_Holder_LP_lambert1_0.geometry}
              material={nodes.Antenna_Holder_LP_lambert1_0.material}
            />
          </group>
          <group position={[-0.28, 0.31, 16.29]}>
            <mesh
              geometry={nodes.POP_Button_LP_lambert1_0.geometry}
              material={nodes.POP_Button_LP_lambert1_0.material}
            />
          </group>
          <group position={[-3.34, -0.57, -16.94]}>
            <mesh
              geometry={nodes.Top_Surface_LP_lambert1_0.geometry}
              material={nodes.Top_Surface_LP_lambert1_0.material}
            />
          </group>
          <group position={[-14.9, -5.11, -1.8]}>
            <mesh geometry={nodes.Gray_Left_LP_lambert1_0.geometry} material={nodes.Gray_Left_LP_lambert1_0.material} />
          </group>
          <group position={[14.8, -5.11, -1.8]}>
            <mesh
              geometry={nodes.Gray_Right_LP_lambert1_0.geometry}
              material={nodes.Gray_Right_LP_lambert1_0.material}
            />
          </group>
          <group position={[-0.05, 0, 16.34]}>
            <mesh
              geometry={nodes.Black_Front_LP_lambert1_0.geometry}
              material={nodes.Black_Front_LP_lambert1_0.material}
            />
          </group>
          <group position={[12.18, -4.77, 16.25]} rotation={[-0.14, 0, 0]}>
            <mesh
              geometry={nodes.Switch_ON_OFF_LP_lambert1_0.geometry}
              material={nodes.Switch_ON_OFF_LP_lambert1_0.material}
            />
          </group>
          <group position={[9.14, -4.88, 16.08]} rotation={[0, 0, -1.27]}>
            <mesh
              geometry={nodes.Knob_Volume_LP_lambert1_0.geometry}
              material={nodes.Knob_Volume_LP_lambert1_0.material}
            />
          </group>
          <group position={[6.1, -4.88, 16.08]} rotation={[0, 0, 1.21]}>
            <mesh
              geometry={nodes.Knob_Contrast_LP_lambert1_0.geometry}
              material={nodes.Knob_Contrast_LP_lambert1_0.material}
            />
          </group>
          <group position={[3.07, -4.88, 16.08]} rotation={[0, 0, -0.68]}>
            <mesh
              geometry={nodes.Knob_Bright_LP_lambert1_0.geometry}
              material={nodes.Knob_Bright_LP_lambert1_0.material}
            />
          </group>
          <group position={[-0.29, -4.9, 15.36]}>
            <mesh
              geometry={nodes.Knob_AM_FM_LP_lambert1_0.geometry}
              material={nodes.Knob_AM_FM_LP_lambert1_0.material}
            />
          </group>
          <group position={[-4.99, -4.97, 16.28]} rotation={[0, 0, -0.13]}>
            <mesh geometry={nodes.Big_Knob_LP_lambert1_0.geometry} material={nodes.Big_Knob_LP_lambert1_0.material} />
          </group>
          <group position={[12.18, -4.9, 15.53]}>
            <mesh
              geometry={nodes.ON_OFF_Trim_LP_lambert1_0.geometry}
              material={nodes.ON_OFF_Trim_LP_lambert1_0.material}
            />
          </group>
          <group position={[4.32, -4.9, 15.77]}>
            <mesh
              geometry={nodes.Knob_Trims_LP_lambert1_0.geometry}
              material={nodes.Knob_Trims_LP_lambert1_0.material}
            />
          </group>
          <group position={[-8.57, -4.97, 15.88]}>
            <mesh
              geometry={nodes.AM_FM_Radio_Trim_LP_lambert2_0.geometry}
              material={nodes.AM_FM_Radio_Trim_LP_lambert2_0.material}
            />
          </group>
          <group position={[-0.05, -5.11, 15.86]}>
            <mesh
              geometry={nodes.Beige_Front_LP_lambert1_0.geometry}
              material={nodes.Beige_Front_LP_lambert1_0.material}
            />
          </group>
          <group position={[-0.05, -14.9, 14.62]}>
            <mesh
              geometry={nodes.Handle_Black_LP_lambert1_0.geometry}
              material={nodes.Handle_Black_LP_lambert1_0.material}
            />
          </group>
          <group position={[-0.05, -9.96, 13.06]}>
            <mesh
              geometry={nodes.Handle_Metal_LP_lambert1_0.geometry}
              material={nodes.Handle_Metal_LP_lambert1_0.material}
            />
          </group>
          <group position={[0.19, -6.07, -17.42]}>
            <mesh geometry={nodes.Cable_LP_lambert1_0.geometry} material={nodes.Cable_LP_lambert1_0.material} />
          </group>
          <mesh geometry={nodes.Pins_LP_lambert1_0.geometry} material={nodes.Pins_LP_lambert1_0.material} />
          <group position={[0, 0, -0.08]}>
            <mesh
              geometry={nodes.AMFMScween_LP_lambert1_0.geometry}
              material={nodes.AMFMScween_LP_lambert1_0.material}
            />
          </group>
          <mesh geometry={nodes.polySurface3_lambert3_0.geometry} material={nodes.polySurface3_lambert3_0.material} />
          <mesh geometry={nodes.polySurface4_lambert3_0.geometry} material={nodes.polySurface4_lambert3_0.material} />
          <mesh geometry={nodes.polySurface5_lambert3_0.geometry} material={nodes.polySurface5_lambert3_0.material} />
          <mesh geometry={nodes.polySurface6_lambert3_0.geometry} material={nodes.polySurface6_lambert3_0.material} />
          <mesh geometry={nodes.polySurface7_lambert3_0.geometry} material={nodes.polySurface7_lambert3_0.material} />
          <mesh geometry={nodes.polySurface8_lambert3_0.geometry} material={nodes.polySurface8_lambert3_0.material} />
          <mesh geometry={nodes.polySurface9_lambert3_0.geometry} material={nodes.polySurface9_lambert3_0.material} />
          <mesh geometry={nodes.polySurface10_lambert3_0.geometry} material={nodes.polySurface10_lambert3_0.material} />
          <mesh geometry={nodes.polySurface11_lambert3_0.geometry} material={nodes.polySurface11_lambert3_0.material} />
          <mesh geometry={nodes.polySurface12_lambert3_0.geometry} material={nodes.polySurface12_lambert3_0.material} />
          <mesh geometry={nodes.polySurface13_lambert3_0.geometry} material={nodes.polySurface13_lambert3_0.material} />
          <mesh geometry={nodes.polySurface14_lambert3_0.geometry} material={nodes.polySurface14_lambert3_0.material} />
          <group position={[-11.06, 0, 0]}>
            <mesh
              geometry={nodes.polySurface15_lambert3_0.geometry}
              material={nodes.polySurface15_lambert3_0.material}
            />
          </group>
          <group position={[-1.13, -4.98, -14.35]} scale={0.15}>
            <mesh
              geometry={nodes.polySurface16_lambert3_0.geometry}
              material={nodes.polySurface16_lambert3_0.material}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/tv.gltf')
