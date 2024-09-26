"use-client"

import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Loader, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export const UserButton = ({ name, image, status }: { name: string, image: string, status: string }) => {
    if(status !== "authenticated") return <Loader className="size-4 animate-spin text-muted-foreground"/>
    const avatarFallbackImg = name.charAt(0).toUpperCase();
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="outline-none relative">
                <Avatar className="size-10 hover:opacity-75 transition">
                    <AvatarImage alt={name} src={image} className="bg-transparent"/>
                    <AvatarFallback className="bg-sky-500 text-white">
                        {avatarFallbackImg}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" side="right" className="w-60">
                <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut className="size-4 mr-2"/>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}