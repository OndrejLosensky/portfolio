import Link from "next/link";

export default function MoreProjectsPage () {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">
                Další projekty
            </span>      
            <Link href="/"> Zpět </Link>
        </div>
    )
}