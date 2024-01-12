'use client';

import updateRecipe from "@/app/actions/updateRecipe";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface TitleInputProps {
    title?: string
    recipeId: number
}
export default function TitleInput({ title, recipeId }: TitleInputProps) {
    const [inputValue, setInputValue] = useState(title);
    const [debouncedValue, setDebouncedValue] = useState(title);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 500);
        return () => clearTimeout(timer);
    }, [inputValue]);

    useEffect(() => {
        if (debouncedValue) {
            const recipeDetails = {
                name: debouncedValue,
                id: recipeId
            }

            const updateRecipeTitle = async (recipeDetails: any) => {
                try {
                    const recipe = await updateRecipe(recipeDetails);
                    if (recipe) {
                        toast.success("Recipe Title Updated");
                    }
                } catch {
                    toast.error("Something went wrong updating the recipe");
                }
            }
            updateRecipeTitle(recipeDetails);
        }
    }, [debouncedValue, recipeId]);
    return (
        <input
            className="text-5xl text-white block w-full bg-transparent font-bold border-0"
            placeholder="Recipe Name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
    );
}