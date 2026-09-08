import CountUp from "@/components/CountUp"

export function TrustBuilder ({text, number} : {text: string, number: number}) {
    return <div className="flex  flex-1 flex-col gap-3 items-center">
        <div className="flex items-center gap-1 font-sans font-semibold text-5xl">
            {text.includes('Sales') && <p>$</p>}
            <CountUp
            from={0}
            to={number}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
            delay={0}
            />
            <p>+</p>
        </div>
        <p className="font-epilogue text-primarylight text-lg md:text-xl">{text}</p>
    </div>
}