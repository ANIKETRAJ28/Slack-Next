"use-client"

import { FaGithub } from "react-icons/fa";
import { 
    Card, 
    CardContent, 
    CardHeader,
    CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { authCredentials, SignFlow } from "@/lib/authOptions";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export const AuthCard = ({ page }: { page: SignFlow }) => {

    const router = useRouter();

    const [credentials, setCredentials] = useState<authCredentials>({
        name: "",
        email: "",
        password: "",
        page: page
    });

    const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }
        
    return (
        <Card className="h-full w-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle>
                    { page === "signin" ?  "Login to continue" : "Signup to continue"}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                    {page === "signup" && <Input
                        placeholder="Nane"
                        type="text"
                        name = "name"
                        value={credentials.name}
                        onChange={(e) => setValue(e)}
                        required
                        disabled={false}
                    />}
                    <Input
                        placeholder="Email"
                        type="email"
                        name = "email"
                        value={credentials.email}
                        onChange={(e) => setValue(e)}
                        required
                        disabled={false}
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        name = "password"
                        value={credentials.password}
                        onChange={(e) => setValue(e)}
                        required
                        disabled={false}
                    />
                    <Button 
                        type="submit" 
                        className="w-full" 
                        size="lg" 
                        disabled={false}
                        onClick={ async (e) => {
                            e.preventDefault();
                            if(page === "signin" && credentials.email === "" && credentials.password === ""
                                || page === "signup" && credentials.name === "" && credentials.email === "" && credentials.password === ""
                            ) return;
                            const res = await signIn("credentials", {
                                name: credentials.name,
                                password: credentials.password,
                                email: credentials.password,
                                provider: "Credentials",
                                page: page,
                                // redirect: true,
                                // callbackUrl: "http://localhost:3000"
                            });
                            console.log(res);
                            return res;
                        }}
                    >
                        Continue
                    </Button>
                </form>
                <Separator/>
                <Button className="w-full relative" 
                    size="lg" 
                    disabled={false}
                    onClick={async () => await signIn("github")}
                    variant="outline"
                >
                    <FaGithub className="size-5 absolute top-2.5 left-2.5"/>
                    Continue with Github
                </Button>
                <p 
                    className="text-xs text-muted-foreground"
                    onClick={() => {
                        if(page === "signin") router.push("/signup");
                        else router.push("/signin");
                    }}
                >
                    {page === "signin" ? "Don&apos;t have an account?" : "Already have an account?"} <span className="text-sky-700 hover:underline cursor-pointer">{page === "signin" ? "Sign Up" : "Log In"}</span>
                </p>
            </CardContent>
        </Card>
    );
}