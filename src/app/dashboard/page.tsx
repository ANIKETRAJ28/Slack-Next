import { Appbar } from "@/components/ui/App";
import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const session = await getServerSession(NEXT_AUTH);
    // console.log(session);
    if(session?.user) return <Appbar/>
    else redirect("/signin");
}