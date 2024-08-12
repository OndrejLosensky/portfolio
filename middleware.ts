import { NextRequest, NextResponse } from "next/server"
import { isValidPass } from "@/lib/isValidPass"

export async function middleware (req: NextRequest) {
    if((await isAuthentificated(req)) === false) {
        return new NextResponse("Unauthorized", {
            status: 401,
            headers: { "WWW-Authenticate": "Basic "},
        })
    }
}

async function isAuthentificated(req: NextRequest){
    const authHeader = req.headers.get("authorization") || req.headers.get("Authorization")

    if (authHeader == null) {
        return false
    }

    

    const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64").toString().split(":")
      
    return username === process.env.ADMIN_USERNAME && (await isValidPass(password, process.env.HASHED_ADMIN_PASSWORD as string))

}

export const config = {
    matcher: "/admin"
}