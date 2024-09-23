export const options = {
    HOST: process.env.DB_HOST as string,
    USER: process.env.DB_USER as string,
    PASSWORD: process.env.DB_PASSWORD as string,
    DB: process.env.DB_DB as string,
    DIALECT: "mysql"
};