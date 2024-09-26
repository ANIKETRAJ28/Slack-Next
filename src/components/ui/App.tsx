"use client";
import { signIn, signOut, useSession } from "next-auth/react"
import { UserButton } from "../user/UserButton";

export const Appbar = () => {
  const session = useSession();
    return <div>
      <div>
        {JSON.stringify(session)}
      </div>
    <UserButton image={session.data?.user?.image || ""} name={session.data?.user?.name || ""} status={session.status}/>
  </div>
}