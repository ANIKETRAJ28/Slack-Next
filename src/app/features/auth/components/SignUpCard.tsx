import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardDescription, 
    CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SignFlow } from "../signFlow";

interface signType {
    setSign: (state: SignFlow) => void
};

export const SignUpCard = ({ setSign }: signType) => {
    return (
        <Card className="h-full w-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle>Sign up to continue</CardTitle>
                <CardDescription>Create an account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                    <Input
                        placeholder="Email"
                        type="email"
                        value=""
                        onChange={() => {}}
                        required
                        disabled={false}
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        value=""
                        onChange={() => {}}
                        required
                        disabled={false}
                    />
                    <Button type="submit" className="w-full" size="lg" disabled={false}>
                        Continue
                    </Button>
                </form>
                <Separator/>
                <Button 
                    className="w-full relative" 
                    size="lg" 
                    disabled={false}
                    onClick={() => {}}
                    variant="outline"
                >
                    <FcGoogle className="size-5 absolute top-2.5 left-2.5"/>
                    Continue with Google
                </Button>
                <Button className="w-full relative" 
                    size="lg" 
                    disabled={false}
                    onClick={() => {}}
                    variant="outline"
                >
                    <FaGithub className="size-5 absolute top-2.5 left-2.5"/>
                    Continue with Github
                </Button>
                <p 
                    className="text-xs text-muted-foreground"
                    onClick={() => setSign("signIn")}
                >
                    Already have an account? <span className="text-sky-700 hover:underline cursor-pointer">Sign In</span>
                </p>
            </CardContent>
        </Card>
    );
}