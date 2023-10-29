import { OrbitControls, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { VideoPlane } from '../components/VideoPlane';
import { Mall } from '../models/Mall';
import React, { Suspense } from 'react';

const axiWallY = 8;
const axiWallZBack = -24;

const CanvasMall = () => {
  return (
    <Canvas className=".canvas-mall" shadows camera={{ position: [24, 13, 60], fov: 30 }}>
                    <OrbitControls />
                    <Environment background preset="city" />
                    <ambientLight />
                    <group position={[-14, -8, 0]}>
                        /*------------------Wall Pharmacy------------------*/
                        <VideoPlane videourl="./tipti-video.mp4" position={[-23.6, axiWallY, -12.01]} rotation-y={Math.PI / 2} />
                        <VideoPlane videourl="./tipti-video.mp4" position={[-24.8, axiWallY, -12.01]} rotation-y={-Math.PI / 2} />
                        <mesh castShadow receiveShadow position={[-24.2, axiWallY, -12]} onClick={(e) => console.log('Pharmacy')}>
                            <boxGeometry args={[1, 3.5, 5.5]} />
                            <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
                        </mesh>
                        /*------------------Wall Bakery------------------*/
                        <VideoPlane videourl="./tipti-video.mp4" position={[-16.4, axiWallY, 0.51]} />
                        <VideoPlane videourl="./tipti-video.mp4" position={[-16.4, axiWallY, -0.51]} rotation-y={Math.PI} />
                        <mesh castShadow receiveShadow position={[-16.4, axiWallY, 0]} onClick={(e) => console.log('Bakery')}>
                            <boxGeometry args={[5.5, 3.5, 1]} />
                            <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
                        </mesh>
                        /*------------------Wall Cafe------------------*/
                        <VideoPlane videourl="./tipti-video.mp4" />
                        <VideoPlane videourl="./tipti-video.mp4" position={[0, axiWallY, -0.51]} rotation-y={Math.PI} />
                        <mesh castShadow receiveShadow position={[0, axiWallY, 0]} onClick={(e) => console.log('Cafe')}>
                            <boxGeometry args={[5.5, 3.5, 1]} />
                            <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
                        </mesh>
                        /*------------------Wall Seafood------------------*/
                        <VideoPlane videourl="./tipti-video.mp4" position={[18.4, axiWallY, 0.51]} />
                        <VideoPlane videourl="./tipti-video.mp4" position={[18.4, axiWallY, -0.51]} rotation-y={Math.PI} />
                        <mesh castShadow receiveShadow position={[18.4, axiWallY, 0]} onClick={(e) => console.log('Seafood')}>
                            <boxGeometry args={[5.5, 3.5, 1]} />
                            <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
                        </mesh>
                        /*------------------Wall Electronics------------------*/
                        <VideoPlane videourl="./tipti-video.mp4" position={[36.4, axiWallY, 0.51]} />
                        <VideoPlane videourl="./tipti-video.mp4" position={[36.4, axiWallY, -0.51]} rotation-y={Math.PI} />
                        <mesh castShadow receiveShadow position={[36.4, axiWallY, 0]} onClick={(e) => console.log('Electronics')}>
                            <boxGeometry args={[5.5, 3.5, 1]} />
                            <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
                        </mesh>
                        /*------------------Wall Sweet------------------*/
                        <VideoPlane videourl="./tipti-video.mp4" position={[-16.4, axiWallY, -24.51]} rotation-y={Math.PI} />
                        <VideoPlane videourl="./tipti-video.mp4" position={[-16.4, axiWallY, -23.49]} />
                        <mesh castShadow receiveShadow position={[-16.4, axiWallY, axiWallZBack]} onClick={(e) => console.log('Sweet')}>
                            <boxGeometry args={[5.5, 3.5, 1]} />
                            <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
                        </mesh>
                        /*------------------Wall Beauty Shop------------------*/
                        <VideoPlane videourl="./tipti-video.mp4" position={[-0.01, axiWallY, -24.51]} rotation-y={Math.PI} />
                        <VideoPlane videourl="./tipti-video.mp4" position={[-0.01, axiWallY, -23.49]} />
                        <mesh castShadow receiveShadow position={[0, axiWallY, axiWallZBack]} onClick={(e) => console.log('Beauty')}>
                            <boxGeometry args={[5.5, 3.5, 1]} />
                            <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
                        </mesh>
                        /*------------------Wall Fruits------------------*/
                        <VideoPlane videourl="./tipti-video.mp4" position={[18.4, axiWallY, -24.51]} rotation-y={Math.PI} />
                        <VideoPlane videourl="./tipti-video.mp4" position={[18.4, axiWallY, -23.49]} />
                        <mesh castShadow receiveShadow position={[18.4, axiWallY, axiWallZBack]} onClick={(e) => console.log('Fruits')}>
                            <boxGeometry args={[5.5, 3.5, 1]} />
                            <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
                        </mesh>
                        /*------------------Wall Clothing Store------------------*/
                        <VideoPlane videourl="./tipti-video.mp4" position={[36.4, axiWallY, -24.51]} rotation-y={Math.PI} />
                        <VideoPlane videourl="./tipti-video.mp4" position={[36.4, axiWallY, -23.49]} />
                        <mesh castShadow receiveShadow position={[36.4, axiWallY, axiWallZBack]} onClick={(e) => console.log('Clothing')}>
                            <boxGeometry args={[5.5, 3.5, 1]} />
                            <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
                        </mesh>
                        /*------------------Mall------------------*/
                        <Mall />
                    </group>
                </Canvas>
  )
}

const LoadingIndicator = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <p>Cargando...</p>
            {/* Puedes agregar aquí un spinner, una animación, o cualquier otra cosa */}
        </div>
    );
};

export const HomeScene = () => {
    return (
        <div>
            <Suspense fallback={null}>
                <CanvasMall />
            </Suspense>
        </div>
    );
};
