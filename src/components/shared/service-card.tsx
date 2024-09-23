'use client'
import React from 'react'

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Card from '../ui/canvas-card';

interface Iservicecard {
    title:string,
    animationSpeed:number,
    containerColor:string,
    icon:string
}
const Servicecard = ({title,animationSpeed,containerColor,icon}:Iservicecard) => {
    return (
        <Card title={title} icon={icon}>
            <CanvasRevealEffect
                animationSpeed={animationSpeed}
                containerClassName={containerColor} />
        </Card>
    )
}

export default Servicecard
