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
    token: string;
    checkToken: () => void;
    logInUser: (email: string, password: string, token: string | null) => Promise<void>;
    logOutUser: () => void;
    signUpUser(email: string, password: string): unknown;
}

const useAuth = create<UserStore>()(
    persist(set => ({
        user: null,
        token: '',
        checkToken: async () => {
            console.log('checking token');
        },
        logInUser: async (email: string, password: string, token: string | null) => {
            //await fetch('/api/authentication/login', {
            //    method: 'POST',
            //    credentials: 'same-origin',
            //    body: JSON.stringify({ email, password, _token: token })
            //})
            //    .then(response => response.json())
            //    .then(response => {
            //        // eslint-disable-next-line prefer-const
            //        const { status, message, data } = response;
            //        const errors = data.errors;
            //        if (data && data.user) {
            //            set({ user: data.user });
            //        }
            //        return {
            //            status, message, errors
            //        };
            //    })
            //    .catch(error => {
            //        console.warn('failed fetching user', error);
            //        return { status: 'failed', message: 'WRONG' };
            //    });
        },
        logOutUser: () => {
            //set({ user: null });
            //fetch('/account/logout', {
            //    credentials: 'same-origin',
            //  }).then(() => {
            //    set({ user: null });
            //  });
        },
        signUpUser: async (
            email: string, 
            password: string
        ) => {
            //await fetch('/api/authentication/signup', {
            //    method: 'POST',
            //    credentials: 'same-origin',
            //    body: JSON.stringify({
            //      email,
            //      phone,
            //      firstName,
            //      lastName,
            //      sex,
            //      optIn,
            //      _token: token,
            //      country
            //    })
            //  })
            //    .then(response => response.json())
            //    .then(response => {
            //        console.log(response);
            //      const { status, message, data } = response;
            //      const errors = data.errors;
            //      if (data && data.user) {
            //        set({ user: data.user });
            //      }
            //      return { status, message, errors };
            //    })
            //    .catch(error => {
            //      console.warn('failed fetching user', error);
            //      return { status: 'failed', message: 'WRONG' };
            //    });
        }
    }),
        {
            name: 'user-store'
        }
    )
);

export default useAuth;
