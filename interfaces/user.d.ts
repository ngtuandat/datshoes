export interface newUser {
    firstName: string,
    lastName: string
    email: string
    password: string
}

export interface User {
    email: string
    password: string
}

export interface GetUsersQuery {
    page?: number;
    limit?: number;
}

interface ListUser {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    admin: boolean;
    createdAt?: string;
}

interface Role {
    id: string;
    role: boolean;
}