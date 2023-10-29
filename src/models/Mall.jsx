import { useGLTF } from '@react-three/drei';

export const Mall = () => {
    const gltf = useGLTF('./mall.glb');
    return (
        <>
            <primitive object={ gltf.scene} scale="10"/>
        </>
    );
};