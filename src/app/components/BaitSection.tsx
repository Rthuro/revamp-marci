'use client'
import { MaskedText } from "./MaskedText";
import Link from "next/link";
import {motion} from "framer-motion";

export function BaitSection() {
    return <section className="flex flex-col w-full my-12">
        <motion.div 
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        transition={{
            duration: 1,
            ease: "easeOut",
        }}  
        viewport={{
            once: true,
            amount: 0.2,
        }}
        className="flex flex-col gap-8 bg-white p-12 overflow-hidden origin-left">
            <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                delay: 0.5,
                duration: 0.8,
                ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="text-4xl font-cormorant whitespace-nowrap">
                Featured Listings
            </motion.p>

        </motion.div>

    </section>
}