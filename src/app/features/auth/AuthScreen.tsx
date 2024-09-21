"use client"

import { useState } from "react";
import { SignInCard } from "./components/SignInCard";
import { SignUpCard } from "./components/SignUpCard";
import { SignFlow } from "./signFlow";


export const AuthScreen = () => {
    const [sign, setSign] = useState<SignFlow>("signIn");
    return (
        <div className="h-full flex items-center justify-center bg-[#5c3b58]">
            <div className="md:h-auto md:w-[420px] rounded-lg">
                { sign === "signIn" ? <SignInCard setSign={setSign}/> : <SignUpCard setSign={setSign}/> }     
            </div>
        </div>
    );
}