import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";

export default function AdminDashboardLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <main>    
            <div>
                {children}
            </div>
        </main>
    )
}