"use client"

import { AuthCard } from "@/components/auth/AuthCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function SignUp() {
    const session = useSession();
    if(session.data?.user) redirect("/");
    return (
        <div className="h-full flex items-center justify-center bg-[#5c3b58]">
            <div className="md:h-auto md:w-[420px] rounded-lg">
                <AuthCard page="signup"/>
            </div>
        </div>
    );
}