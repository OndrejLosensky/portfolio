import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-screen max-w-screen gap-y-6 max-h-screen flex flex-col items-center justify-center">
      <h1 className="z-10 text-4xl font-bold"> Page wasn&apos;t found - 404</h1>
      <div>
        <Link href="/">
          {" "}
          <Button> Back to homepage </Button>{" "}
        </Link>
      </div>
    </div>
  );
}
