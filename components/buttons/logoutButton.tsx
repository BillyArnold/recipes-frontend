
'use client'

import { Button } from "../ui/button";
import createNewRecipe from "@/app/actions/createNewRecipe";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();
    const auth = useAuth();

    const logOut = async () => {
        await auth.logOutUser().then(() => {
            router.push('/login');
        });
    }

    return (
        <Button className='mr-4 p-4 rounded-2xl bg-white text-black shadow-md' onClick={() => logOut()}>Log out</Button>
    );
}