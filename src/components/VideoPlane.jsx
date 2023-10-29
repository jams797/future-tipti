import { useEffect, useState } from "react"
import * as THREE from 'three'

const axiWallY = 8;

export const VideoPlane = ({ videourl, ...props }) => { 
    const [video] = useState(
        () => Object.assign(document.createElement('video'), {src: videourl, crossOrigin: 'Anonymous', loop: true, muted: true})
    )

    useEffect(() => { 
        video.play()
    }, [video])
    
    return (
        <mesh castShadow receiveShadow position={[0, axiWallY, 0.51]} scale={[5, 3, 1]} {...props}>
            <planeGeometry />
            {/* <meshStandardMaterial color="red" envMapIntensity={0.5} roughness={0.2} metalness={0.8}/> */}
            <meshBasicMaterial>
                <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
            </meshBasicMaterial>
        </mesh>
    );
}