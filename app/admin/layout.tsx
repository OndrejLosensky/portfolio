import Link from "next/link";
import { CiGlobe } from "react-icons/ci";

export default function AdminDashboardLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <main className="flex flex-col">
            <div className="w-full p-4 bg-bermuda-800">
                <Link href="/" className="hover:bg-black/30 duration-300 rounded-lg px-4 py-2 flex flex-row items-center gap-x-2"> <CiGlobe/> <span>Zpět na web</span></Link>
            </div>
            <div>
                {children}
            </div>
        </main>
    )
}