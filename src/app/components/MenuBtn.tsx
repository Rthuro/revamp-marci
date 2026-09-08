import { motion } from "framer-motion"

export function MenuBtn({ isOpen }: { isOpen: boolean }) {
    return (
        <div className="relative w-[50px] h-[26px] cursor-pointer ml-auto">
            <div className="flex flex-col items-center justify-center gap-1.5">
                <motion.div
                    animate={{
                        rotate: isOpen ? 45 : 0,
                        y: isOpen ? 8 : 0,
                        width: isOpen ? 30 : 40,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className=" h-0.5 bg-white origin-center"
                />
                <motion.div
                    animate={{
                        opacity: isOpen ? 0 : 1,
                        width: isOpen ? 0 : 30,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="h-0.5 bg-white"
                />
                <motion.div
                    animate={{
                        rotate: isOpen ? -45 : 0,
                        y: isOpen ? -8 : 0,
                        width: isOpen ? 30 : 20,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className=" h-0.5 bg-white origin-center"
                />
            </div>

        </div>
    )
}