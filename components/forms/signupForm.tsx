'use client';

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";

type Inputs = {
    username: string
    password: string
  }

export default function SignupForm() {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<Inputs>({
        defaultValues: {
            username: '',
            password: '',
        }
    });


    const onSubmit: SubmitHandler<Inputs> = async data => {
        setIsLoading(true);
        // TO DO:
        // Validation errors with signup still exist
        console.log('submitted', data);
        setIsLoading(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">

                <Label className="text-gray-600" htmlFor="username">
                    Username
                </Label>
                <input
                    className="border-2 text-black border-blue-200 rounded-md p-2 focus:border-blue-500 focus:outline-none w-full"
                    type="text"
                    {...register("username", { required: true })}
                    />
            </div>
            <div className="space-y-2">
                <Label className="text-gray-600" htmlFor="password">
                    Password
                </Label>
                <Input
                    className="border-2 text-black border-blue-200 rounded-md p-2 focus:border-blue-500 focus:outline-none w-full"
                    type="password"
                    {...register("password", { required: true })}
                    />
            </div>
        </form>
    );
}
