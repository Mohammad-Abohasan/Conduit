export interface ICreateUserResponse {
    user: {
        username: string;
        email: string;
        password: string;
        bio: string;
        image: string;
        token: string;
    }
}