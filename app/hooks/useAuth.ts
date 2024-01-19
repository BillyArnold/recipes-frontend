import toast from 'react-hot-toast';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
    username: string;
    password: string;
    lastName: string;
    id: number;
}

interface UserStore {
    user: User | null;
    token: string | null;
    checkToken: (token: string) => void;
    logInUser: (email: string, password: string) => Promise<void>;
    logOutUser: () => Promise<void>;
    signUpUser(email: string, password: string): unknown;
}

const useAuth = create<UserStore>()(
    persist(set => ({
        user: null,
        token: null,
        checkToken: async (token: string) => {
            if (!token) {
                toast.error('Your session has expired');
            }
            await fetch(`${process.env.API_URL}/auth/profile`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                })
        },
        logInUser: async (email: string, password: string) => {
            await fetch(`${process.env.API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username:email,
                    password,
                })
            })
                .then(response => response.json())
                .then(response => {
                    if (response.access_token) {
                        set({ user: response, token: response.access_token });
                        toast.success("Successfully logged in");
                    }
                });
        },
        logOutUser: async () => {
            set({ user: null, token: null });
        },
        signUpUser: async (
            email: string, 
            password: string
        ) => {
            await fetch(`${process.env.API_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: email,
                    password
                })
            })
                .then(response => response.json())
                .then(response => {
                    if (response.access_token) {
                        set({ token: response.access_token, user: response });
                        toast(`${response.username} created`);
                    }
                });
        }
    }),
        {
            name: 'user-store'
        }
    )
);

export default useAuth;
