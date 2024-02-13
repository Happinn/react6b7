import Link from "next/link"

export default function Navbar() {
    return(
        <nav>
            <ul className="flex justify-between px-4 bg-slate-950 text-white">
                <Link href='/'><li>Home</li></Link>
                <Link href='/about'><li>About</li></Link>
                <Link href='/contacts'><li>Contact</li></Link>
                            
            </ul>
        </nav>

    )
}

