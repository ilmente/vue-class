export interface User {
    username: string;
    password: string;
    isAuthenticated: boolean;
}

const userContext: User = {
    username: '',
    password: '',
    isAuthenticated: false,
}

export const authenticate = (username: string, password: string): User => {
    userContext.username = username;
    userContext.password = password;
    userContext.isAuthenticated = Boolean(username) && Boolean(password) && username.includes(password);
    return { ...userContext };
}

export const isAuthenticated = (): boolean => userContext.isAuthenticated;

export const signOut = (): void => {
    userContext.isAuthenticated = false;
}
