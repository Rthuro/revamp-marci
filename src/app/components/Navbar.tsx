"use client";

import { MenuBtn } from "./MenuBtn";
import logo from "@/app/assets/logo.svg";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const navLinks = [
    { id: 1, name: "Home" },
    { id: 2, name: "Listings" },
    { id: 3, name: "Let's Move" },
    { id: 4, name: "About Us" },
];

const menuVariants: Variants = {
    hidden: {
        clipPath: "inset(0 0 100% 0)",
    },

    visible: {
        clipPath: "inset(0 0 0% 0)",
        transition: {
            duration: 0.8,
            ease: [0.2, 0.1, 1, 0], 
        },
    },

    exit: {
        clipPath: "inset(0 0 100% 0)",
        transition: {
            duration: 0.5,
            ease: [0.3, 0, 1, 0.4],
        },
    },
};

const listVariants: Variants = {
    hidden: {},

    visible: {
        transition: {
            delayChildren: 0.65,
            staggerChildren: 0.08,
        },
    },

    exit: {
        transition: {
            staggerChildren: 0.03,
            staggerDirection: -1,
        },
    },
};

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },

    exit: {
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.25,
            ease: "easeIn",
        },
    },
};

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 1,
                delay: 1,
                ease: "easeOut",
            }}
            className="fixed top-0 left-0 right-0 w-full py-2 px-8 z-50 backdrop-blur-xs bg-primary/20"
        >
            {/* Navbar */}
            <div className="relative flex items-center justify-between md:justify-around">
                <div className="hidden md:block flex-1 " />

                <Image
                    src={logo}
                    alt="logo"
                    className="flex-1 size-16 relative z-50"
                />

                <div
                    className="flex-1 relative z-50 flex justify-end cursor-pointer"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <MenuBtn isOpen={isOpen} />
                </div>
            </div>

            {/* Fullscreen menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 w-screen h-screen bg-primary text-secondary z-40"
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <motion.ul
                                variants={listVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="flex flex-col items-center justify-center gap-8 font-epilogue text-3xl"
                            >
                                {navLinks.map((navLink) => (
                                    <motion.li
                                        key={navLink.id}
                                        variants={itemVariants}
                                        className="cursor-pointer"
                                    >
                                        {navLink.name}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}