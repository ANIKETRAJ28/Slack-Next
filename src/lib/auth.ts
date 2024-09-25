import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
            email: { label: "Email", type: "email", placeholder: "abc@def.com" },
            password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any) {
                return {
                    id: "user1",
                    email: credentials.email,
                    password: credentials.password
                }
            },
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET || "secret",
    callbacks: {
        session: ({ session, token }) => {
            // session.user.id = token.userId;
            if(session && session.user) {
                session.user.id = token.sub;
            }
            return session;
        }
    }
};