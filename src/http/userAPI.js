import { $authHost, $host } from "./index";
import {jwtDecode} from "jwt-decode";

const saveToken = (token) => {
    localStorage.setItem('token', token);
    return jwtDecode(token);
};

export const registration = async (email, password) => {
    try {
        const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'});
        return saveToken(data.token);
    } catch (error) {
        console.error("Registration error:", error);
        throw error;
    }
};

export const login = async (email, password) => {
    try {
        const {data} = await $host.post('api/user/login', {email, password});
        return saveToken(data.token);
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};

export const check = async () => {
    try {
        const {data} = await $authHost.get('api/user/auth');
        return saveToken(data.token);
    } catch (error) {
        console.error("Check error:", error);
        throw error;
    }
};
