import { useState } from "react";
import { Icon } from "./canvas-Icon";
import { AnimatePresence } from "framer-motion";
import { motion } from 'framer-motion'
import Image from "next/image";

const Card = ({
    title,
    icon,
    children,
}: {
    title: string;
    icon?: string;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-gray-800 bg-[#091427] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] outline-0"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-gray-800" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-gray-800" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-gray-800" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-gray-800" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:hidden transition duration-200 w-full  mx-auto flex items-center justify-center">
                    <Image src={icon ?? ''} alt="" width={150} height={150} />
                </div>
                <h2 className="dark:text-white text-2xl hidden group-hover/canvas-card:block relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {title}
                </h2>
            </div>
        </div>
    );
};
export default Card