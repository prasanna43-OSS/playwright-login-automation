import { env } from '../../core/utils/env';

export interface LoginData {
    username: string;
    password: string;
}

export const validLoginData: LoginData = {
    username: env.loginUsername,
    password: env.loginPassword
};

export const invalidLoginData: LoginData = {
    username: 'invalidUser',
    password: 'invalidPassword'
};

export const invalidUsernameData: LoginData = {
    username: 'invalidUser',
    password: env.loginPassword
};

export const invalidPasswordData: LoginData = {
    username: env.loginUsername,
    password: 'invalidPassword'
};

export const blankUsernameData: LoginData = {
    username: '',
    password: env.loginPassword
};
export const blankPasswordData: LoginData = {
    username: env.loginUsername,
    password: ''
};