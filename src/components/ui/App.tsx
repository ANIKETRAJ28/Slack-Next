"use client";
import { signIn, signOut, useSession } from "next-auth/react"

export const Appbar = () => {
  const session = useSession();
    return <div>
      <div>
        {JSON.stringify(session)}
      </div>
    <button onClick={() => signIn()}>Signin</button>
    <button onClick={() => signOut()}>Sign out</button>
  </div>
}