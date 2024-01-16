'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import NewRecipeButton from '../buttons/NewRecipeButton';
import useAuth from '@/app/hooks/useAuth';
import LogoutButton from '../buttons/logoutButton';

export default function Navigation() {
    const auth = useAuth();
    return (
        <nav className='flex fixed top-0 left-0 justify-between items-center w-full p-6'>
            <div>
                <Link href="/">
                    <Button className='mr-4 p-4 rounded-2xl bg-white text-black font-bold shadow-md'>Recipes</Button>
                </Link>
            </div>
            <div>
                {!auth.user && (
                    <div>
                        <Link href="/login">
                            <Button className='mr-4 p-4 rounded-2xl bg-white text-black'>Log in</Button>
                        </Link>
                    </div>
                )}
                {auth.user && (
                    <div>
                        <NewRecipeButton />
                        <LogoutButton />
                        <Link href="/account/dashboard">
                            <Button className='mr-4 p-4 rounded-2xl bg-white text-black shadow-md'>Account</Button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}