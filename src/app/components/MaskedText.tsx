'use client'
import {motion} from "framer-motion";
import React from "react";

export function MaskedText({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <div className="overflow-hidden w-fit">
      <motion.div
        initial={{ y: "100%"}}
        whileInView={{ y: "0%"}}
        transition={{
          delay,
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}