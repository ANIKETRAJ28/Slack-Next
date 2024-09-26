import User from "@/db/models/user";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials: any) {
                const page = credentials.page;
                if(page === "signin") {
                    try {
                        const user = await User.findOne({
                            where: {
                                userName: credentials.userName,
                            }
                        });
                        if(!user) throw new Error("User does not exists");
                        if(user.password !== credentials.password) throw new Error("Wrong password");
                        return user;
                    } catch (error) {
                        throw error;
                    }
                } else {
                    try {
                        const user = await User.findOne({
                            where: {
                                userName: credentials.userName,
                            }
                        });
                        if(user) throw new Error("User already exists");
                        // return user;
                        const newUser = await User.create({
                            userName: credentials.userName,
                            name: credentials.name,
                            password: credentials.password,
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
            clientSecret: process.env.GITHUB_SECRET || "",
        })
    ],
    secret: process.env.NEXTAUTH_SECRET || "secret",
    callbacks: {
        signIn: async ({ account, profile }: any) => {
            if(account.provider === "github") {
                const user = await User.findOne({
                    where: {userName: profile.login}
                });
                if(user) return user;
                await User.create({
                    name: profile.name,
                    userName: profile.login,
                    provider: "Github"
                });
            }
            return true;
        },
        session: ({ session, token }: any) => {
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