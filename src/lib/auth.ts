import User from "@/db/models/user";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
            name: { label: "Name", type: "text", placeholder: "abc" },
            email: { label: "Email", type: "email", placeholder: "abc@def.com" },
            password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any) {
                const page = credentials.page;
                if(page === "signin") {
                    try {
                        const user = await User.findOne({
                            where: {
                                email: credentials.email,
                                provider: "Credentials"
                            }
                        });
                        if(!user) throw new Error("User does not exists");
                        if(user.password !== credentials.password) throw new Error("Wrong password");
                        return user;
                    } catch (error) {
                        throw error;
                    }
                } else {
                    return credentials;
                    try {
                        const user = await User.findOne({
                            where: {
                                email: credentials.email,
                                provider: "Credentials"
                            }
                        });
                        console.log(`user is... ${user}`);
                        if(user) throw new Error("User already exists");
                        return user;
                        const newUser = await User.create({
                            name: credentials.name,
                            password: credentials.password,
                            email: credentials.email,
                            provider: "Credentials"
                        });
                        return newUser;
                    } catch (error) {
                        throw error;
                    }
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
        session: ({ session, token }: any) => {
            // session.user.id = token.userId;
            if(session && session.user) {
                session.user.id = token.sub;
            }
            return session;
        }
    },
    pages: {
        signIn: "/signin"
    }
};