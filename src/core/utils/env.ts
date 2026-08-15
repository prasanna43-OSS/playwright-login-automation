import dotenv from 'dotenv';
import path from 'path';

const environment = process.env.ENV ?? 'qa';

const envFilePath = path.resolve(
    process.cwd(),
    `config/environments/${environment}.env`
);

dotenv.config({
    path: envFilePath
});

export const env = {
    environment,
    baseUrl: process.env.BASE_URL ?? '',
    loginUsername: process.env.LOGIN_USERNAME ?? '',
    loginPassword: process.env.LOGIN_PASSWORD ?? ''
};