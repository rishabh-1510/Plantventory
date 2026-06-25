import Link from "next/link";
import { Button } from "../ui/Button";

interface NavbarProps {
    variant:"transparent" | "Solid"
}

const navLinks = ["Home","Properties","MarketPlace"];

export const Navbar = ({variant="transparent"}:NavbarProps) => {
    const isTranparent = variant === "transparent";

    return (
    <section className={`top-0 left-0 z-50 w-full 
        ${isTranparent ?`absolute`: `sticky border-b border-black/5 bg-card`}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <nav className={`flex h-20 items-center justify-between
                ${isTranparent ?`mt-6 rounded-3xl border border-white/10 bg-white/5 px-6 backdrop-blur-2xl`:`px-0 `}`}>
                    {/* logo */}
                    <Link href={'/'} className="flex items-center text-2xl font-semibold ">
                        <span className={`${isTranparent ? `text-gray-300`:`text-text`}`}>
                            Next
                        </span>
                        <span className="bg-primary text-white px-2 py-1 rounded-tr-2xl rounded-bl-2xl">
                            Estates
                        </span>
                    </Link>
                    {/* Desktop Links */}
                    <div className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((item)=>(
                            <Link key={item} href={item=="Home"?"/":`${item.toLowerCase()}`} className={`text-sm font-medium transition hover:text-primary
                            ${isTranparent?`text-white/80`:`text-white/70`}`}>
                                {item}
                            </Link>
                        ))}
                    </div>
                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex items-center gap-4 ">
                        <Button>
                            Login
                        </Button>
                    </div>
            </nav>
        </div>
    </section>
  )
}
