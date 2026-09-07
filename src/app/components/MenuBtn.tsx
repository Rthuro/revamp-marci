
export function MenuBtn({ isOpen }: { isOpen: boolean }) {
    return <div className={`flex flex-col ${isOpen ? "gap-0" : "gap-2"}  transition-all`}>
        <div className="w-[50px] h-1.5 "></div>
        <div className="w-[40px] h-1.5 "></div>
        <div className="w-[30px] h-1.5 "></div>
    </div>
}