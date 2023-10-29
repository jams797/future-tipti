import { OrbitControls, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { VideoPlane } from '../components/VideoPlane';
import { Mall } from '../models/Mall';
import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

const axiWallY = 8;
const axiWallZBack = -24;

const estiloCanvasMall = {
    position: 'fixed',
    inset: 0,
};

const CanvasMall = () => {
    const navigate = useNavigate();

    const handleClick = (ruta) => {
        // Redirige a la ruta que desees
        navigate(`/${ruta}`);
    };

    return (
        <Canvas style={estiloCanvasMall} shadows camera={{ position: [24, 13, 60], fov: 30 }}>
            <OrbitControls />
            <Environment background preset="city" />
            <ambientLight />
            <group position={[-14, -8, 0]}>
                /*------------------Wall Pharmacy------------------*/
                <VideoPlane videourl="./medicity-video.mp4" position={[-23.6, axiWallY, -12.01]} rotation-y={Math.PI / 2} />
                <VideoPlane videourl="./medicity-video.mp4" position={[-24.8, axiWallY, -12.01]} rotation-y={-Math.PI / 2} />
                <mesh
                    castShadow
                    receiveShadow
                    position={[-24.2, axiWallY, -12]}
                    onClick={() => {
                        handleClick('product');
                    }}>
                    <boxGeometry args={[1, 3.5, 5.5]} />
                    <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
                </mesh>
                /*------------------Wall Bakery------------------*/
                <VideoPlane videourl="./tipti-video.mp4" position={[-16.4, axiWallY, 0.51]} />
                <VideoPlane videourl="./tipti-video.mp4" position={[-16.4, axiWallY, -0.51]} rotation-y={Math.PI} />
                <mesh
                    castShadow
                    receiveShadow
                    position={[-16.4, axiWallY, 0]}
                    onClick={() => {
                        handleClick('product');
                    }}>
                    <boxGeometry args={[5.5, 3.5, 1]} />
                    <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
                </mesh>
                /*------------------Wall Cafe------------------*/
                <VideoPlane videourl="./macdonal-video.mp4" />
                <VideoPlane videourl="./macdonal-video.mp4" position={[0, axiWallY, -0.51]} rotation-y={Math.PI} />
                <mesh
                    castShadow
                    receiveShadow
                    position={[0, axiWallY, 0]}
                    onClick={() => {
                        handleClick('product');
                    }}>
                    <boxGeometry args={[5.5, 3.5, 1]} />
                    <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
                </mesh>
                /*------------------Wall Seafood------------------*/
                <VideoPlane videourl="./aki-video.mp4" position={[18.4, axiWallY, 0.51]} />
                <VideoPlane videourl="./aki-video.mp4" position={[18.4, axiWallY, -0.51]} rotation-y={Math.PI} />
                <mesh
                    castShadow
                    receiveShadow
                    position={[18.4, axiWallY, 0]}
                    onClick={() => {
                        handleClick('product');
                    }}>
                    <boxGeometry args={[5.5, 3.5, 1]} />
                    <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
                </mesh>
                /*------------------Wall Electronics------------------*/
                <VideoPlane videourl="./computron-video.mp4" position={[36.4, axiWallY, 0.51]} />
                <VideoPlane videourl="./computron-video.mp4" position={[36.4, axiWallY, -0.51]} rotation-y={Math.PI} />
                <mesh
                    castShadow
                    receiveShadow
                    position={[36.4, axiWallY, 0]}
                    onClick={() => {
                        handleClick('product');
                    }}>
                    <boxGeometry args={[5.5, 3.5, 1]} />
                    <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
                </mesh>
                /*------------------Wall Sweet------------------*/
                <VideoPlane videourl="./guayaquil-video.mp4" position={[-16.4, axiWallY, -24.51]} rotation-y={Math.PI} />
                <VideoPlane videourl="./guayaquil-video.mp4" position={[-16.4, axiWallY, -23.49]} />
                <mesh
                    castShadow
                    receiveShadow
                    position={[-16.4, axiWallY, axiWallZBack]}
                    onClick={() => {
                        handleClick('product');
                    }}>
                    <boxGeometry args={[5.5, 3.5, 1]} />
                    <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
                </mesh>
                /*------------------Wall Beauty Shop------------------*/
                <VideoPlane videourl="./PayPhone-video.mp4" position={[-0.01, axiWallY, -24.51]} rotation-y={Math.PI} />
                <VideoPlane videourl="./PayPhone-video.mp4" position={[-0.01, axiWallY, -23.49]} />
                <mesh
                    castShadow
                    receiveShadow
                    position={[0, axiWallY, axiWallZBack]}
                    onClick={() => {
                        handleClick('product');
                    }}>
                    <boxGeometry args={[5.5, 3.5, 1]} />
                    <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
                </mesh>
                /*------------------Wall Fruits------------------*/
                <VideoPlane videourl="./jugueton-video.mp4" position={[18.4, axiWallY, -24.51]} rotation-y={Math.PI} />
                <VideoPlane videourl="./jugueton-video.mp4" position={[18.4, axiWallY, -23.49]} />
                <mesh
                    castShadow
                    receiveShadow
                    position={[18.4, axiWallY, axiWallZBack]}
                    onClick={() => {
                        handleClick('product');
                    }}>
                    <boxGeometry args={[5.5, 3.5, 1]} />
                    <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
                </mesh>
                /*------------------Wall Clothing Store------------------*/
                <VideoPlane videourl="./kfc-video.mp4" position={[36.4, axiWallY, -24.51]} rotation-y={Math.PI} />
                <VideoPlane videourl="./kfc-video.mp4" position={[36.4, axiWallY, -23.49]} />
                <mesh
                    castShadow
                    receiveShadow
                    position={[36.4, axiWallY, axiWallZBack]}
                    onClick={() => {
                        handleClick('product');
                    }}>
                    <boxGeometry args={[5.5, 3.5, 1]} />
                    <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
                </mesh>
                /*------------------Mall------------------*/
                <Mall />
            </group>
        </Canvas>
    );
};

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
