export type SignFlow = "signin" | "signup";
export interface authCredentials {
    name: string,
    email: string,
    password: string,
    page: SignFlow
};