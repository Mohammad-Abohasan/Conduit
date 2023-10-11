export interface ICreateUserPayload {
    user: {
        username: string;
        email: string;
        password: string;
    }
}