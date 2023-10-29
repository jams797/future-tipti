import React, { Suspense } from 'react'
import Tv from './components/Tv';
import {Canvas} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export const ProductsParam = [
    {
        id: 1,
        name: 'Antigüo Nintendo',
        canva: <Canvas className='canvas'>
            <OrbitControls enableZoom={true}/>
            <ambientLight intensity={2}/>
            <pointLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>

            <Tv/>
        
            </Suspense>
        </Canvas>,
        value: 140.00,
    },
    {
        id: 2,
        name: 'iPhone 13 Pro',
        canva: <Canvas className='canvas'>
            <OrbitControls enableZoom={true}/>
            <ambientLight intensity={2}/>
            <pointLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>

            <Tv/>
        
            </Suspense>
        </Canvas>,
        value: 700.00,
    },
    {
        id: 3,
        name: 'Kogan Curved Monitor',
        canva: <Canvas className='canvas'>
            <OrbitControls enableZoom={true}/>
            <ambientLight intensity={2}/>
            <pointLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>

            <Tv/>
        
            </Suspense>
        </Canvas>,
        value: 400.00,
    },
    {
        id: 4,
        name: 'Samsung 85 smart',
        canva: <Canvas className='canvas'>
            <OrbitControls enableZoom={true}/>
            <ambientLight intensity={2}/>
            <pointLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>

            <Tv/>
        
            </Suspense>
        </Canvas>,
        value: 3000.00,
    },
]