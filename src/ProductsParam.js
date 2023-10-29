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

import ComidaChina from './components/ComidaChina';
import JugueteSuperheroe from './components/JugueteSuperheroe';

// import CocaCola from './components/CocaCola';

import {Canvas} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export const ProductsParam = [
    {
        id: 1,
        categoryId: 1,
        name: 'Antigüo Nintendo',
        canva: {
            ambientLight: 2,
            element: <Tv/>,
        },
        value: 78.00,
    },
    {
        id: 2,
        categoryId: 1,
        name: 'iPhone 13 Pro',
        canva: {
            ambientLight: 2,
            element: <Iphone13/>,
        },
        value: 63.00,
    },
    {
        id: 3,
        categoryId: 1,
        name: 'Kogan Curved Monitor',
        canva: {
            ambientLight: 3,
            element: <Monitor/>,
        },
        value: 45.00,
    },
    {
        id: 4,
        categoryId: 1,
        name: 'Samsung 85 smart',
        canva: {
            ambientLight: 3,
            element: <Smarttv/>,
        },
        value: 30.00,
    },


    {
        id: 5,
        categoryId: 2,
        name: 'Nike Airmax Monster',
        canva: {
            ambientLight: 0.5,
            element: <Shoes/>,
        },
        value: 20.00,
    },
    {
        id: 6,
        categoryId: 2,
        name: 'Laptop Alien',
        canva: {
            ambientLight: 3,
            element: <Laptop/>,
        },
        value: 40.00,
    },
    {
        id: 7,
        categoryId: 2,
        name: 'Mesa de billar',
        canva: {
            ambientLight: 0.5,
            element: <Pooltable/>,
        },
        value: 10.00,
    },
    {
        id: 8,
        categoryId: 2,
        name: '1969 Bajo',
        canva: {
            ambientLight: 0.5,
            element: <Guitar/>,
        },
        value: 90.00,
    },

    {
        id: 9,
        categoryId: 3,
        name: 'Comida china',
        canva: {
            ambientLight: 0.5,
            element: <ComidaChina/>,
        },
        value: 8.00,
    },
    {
        id: 9,
        categoryId: 4,
        name: 'Juguete Superheroe',
        canva: {
            ambientLight: 0.5,
            element: <JugueteSuperheroe/>,
        },
        value: 7.00,
    },
]