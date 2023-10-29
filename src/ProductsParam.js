import React, { Suspense } from 'react'
import Tv from './components/Tv';
import Carousel from './components/Carousel';
import Chat from './components/Chat';
import Monitor from './components/Monitor';
import Iphone13 from './components/Iphone13';
import Pooltable from './components/Pooltable';
import Guitar from './components/Guitar';
import Shoes from './components/Shoes';
import Smarttv from './components/Smarttv';
import Laptop from './components/Laptop';
import {Canvas} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export const ProductsParam = [
    {
        id: 1,
        name: 'Antigüo Nintendo',
        canva: {
            ambientLight: 2,
            element: <Tv/>,
        },
        value: 140.00,
    },
    {
        id: 2,
        name: 'iPhone 13 Pro',
        canva: {
            ambientLight: 2,
            element: <Iphone13/>,
        },
        value: 700.00,
    },
    {
        id: 3,
        name: 'Kogan Curved Monitor',
        canva: {
            ambientLight: 3,
            element: <Monitor/>,
        },
        value: 400.00,
    },
    {
        id: 4,
        name: 'Samsung 85 smart',
        canva: {
            ambientLight: 3,
            element: <Smarttv/>,
        },
        value: 3000.00,
    },


    {
        id: 5,
        name: 'Nike Airmax Monster',
        canva: {
            ambientLight: 0.5,
            element: <Shoes/>,
        },
        value: 200.00,
    },
    {
        id: 6,
        name: 'Laptop Alien',
        canva: {
            ambientLight: 3,
            element: <Laptop/>,
        },
        value: 3000.00,
    },
    {
        id: 7,
        name: 'Mesa de billar',
        canva: {
            ambientLight: 0.5,
            element: <Pooltable/>,
        },
        value: 400.00,
    },
    {
        id: 8,
        name: '1969 Bajo',
        canva: {
            ambientLight: 0.5,
            element: <Guitar/>,
        },
        value: 4000.00,
    },
]