'use client'
import { TrustBuilder } from "./TrustBuilder";
import { MaskedText } from "./MaskedText";
import LogoLoop from "@/components/LogoLoop";
import { motion } from "motion/react";
import a1 from '../assets/affiliations/1.png'
import a2 from '../assets/affiliations/2.png'
import a3 from '../assets/affiliations/3.png'
import a4 from '../assets/affiliations/4.png'

const imageLogos = [a1, a2, a3, a4]


export function SecondSection() {
    return <section className="flex flex-col items-center gap-18 w-full px-4">

        <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col items-center text-2xl md:text-3xl font-cormorant font-medium text-primarylight w-full py-14 text-center">
                <MaskedText delay={0}>
                    <p>For 2 decades, we have built lasting relationships,</p>
                </MaskedText>
                <MaskedText delay={0.1}>
                    <p>mastered our local market, and delivered exceptional service.</p>
                </MaskedText>
                <MaskedText delay={0.2}>
                    <p>Our proven track record speaks for itself.</p>
                </MaskedText>
            </div>

            <div className="flex flex-col md:flex-row  gap-18 md:gap-0 items-center justify-around w-full">
                <TrustBuilder text="Years of Experience" number={30} />
                <TrustBuilder text="Clients Helped Annually" number={90} />
                <TrustBuilder text="Annual Sales" number={28.5} />
            </div>
        </div>
        
        <MaskedText delay={0.2} viewOnce={true}>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-primarylight uppercase mt-6">Our Affiliations</h2>
        </MaskedText>

        <LogoLoop
        logos={imageLogos}
        speed={30}
        direction="left"
        logoHeight={80}
        gap={120}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#F7F2EC"
        ariaLabel="Our Affiliations"
      />
    </section>
}