import NextAuth from "next-auth/next";

import { NEXT_AUTH } from "@/lib/auth";

const handle = NextAuth(NEXT_AUTH);

export { handle as GET, handle as POST };