import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";

export default function AdminDashboardLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <main className="flex flex-col">
            <div className="w-full p-4 bg-bermuda-800">
                <Button className="active:scale-90 dark:hover:bg-bermuda-500 duration-300">
                    <Link href="/" className="flex flex-row items-center gap-x-2"> 
                        <CiGlobe className="w-5 h-5"/> 
                        <span>Zpět na web</span>
                    </Link>
                </Button>
            </div>
            <div>
                {children}
            </div>
        </main>
    )
}