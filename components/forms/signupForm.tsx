'use client';

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";
import { Button } from "../ui/button";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";

type Inputs = {
    email: string
    password: string
}

export default function SignupForm() {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const auth = useAuth();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<Inputs>();


    const onSubmit: SubmitHandler<Inputs> = data => {
        setIsLoading(true);
        const signupResponse = auth.signUpUser(data.email, data.password);
        router.push('/')
        setIsLoading(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">

                <Label className="text-gray-600" htmlFor="email">
                    Email
                </Label>
                <input
                    className="border-2 text-black border-blue-200 rounded-md p-2 focus:border-blue-500 focus:outline-none w-full"
                    type="text"
                    {...register("email", { required: true })}
                />
            </div>
            <div className="space-y-2 mb-4">
                <Label className="text-gray-600" htmlFor="password">
                    Password
                </Label>
                <Input
                    className="border-2 text-black border-blue-200 rounded-md p-2 focus:border-blue-500 focus:outline-none w-full"
                    type="password"
                    {...register("password", { required: true })}
                />
            </div>
            <Button disabled={isLoading ? true : false} type="submit" className="w-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-bold py-2 px-4 rounded-md">
                Sign up
            </Button>
        </form>
    );
}
