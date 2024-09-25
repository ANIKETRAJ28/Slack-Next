import { Appbar } from "@/components/ui/App";
import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const session = await getServerSession(NEXT_AUTH);
    if(session?.user) return <Appbar/>
    else redirect("/api/auth/signin");
}