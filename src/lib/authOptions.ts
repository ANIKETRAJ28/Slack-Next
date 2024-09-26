export type SignFlow = "signin" | "signup";
export interface authCredentials {
    userName: string,
    name: string,
    password: string,
    page: SignFlow
};