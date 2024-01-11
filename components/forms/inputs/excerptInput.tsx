'use client';

import updateRecipe from "@/app/actions/updateRecipe";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface ExcerptInputProps {
    excerpt?: string
    recipeId: number
}
export default function ExcerptInput({ excerpt, recipeId }: ExcerptInputProps) {
    const [inputValue, setInputValue] = useState(excerpt);
    const [debouncedValue, setDebouncedValue] = useState(excerpt);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 500);
        return () => clearTimeout(timer);
    }, [inputValue]);

    useEffect(() => {
        if (debouncedValue) {
            const recipeDetails = {
                excerpt: debouncedValue,
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
            className="text-md block text-white w-full bg-transparent border-0"
            placeholder="Recipe excerpt"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
    );
}