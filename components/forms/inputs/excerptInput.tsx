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

    const handleDebouncedChange = (value: string) => {
        const recipeDetails = {
            excerpt: value,
            id: recipeId
        }

        const updateRecipeTitle = async (recipeDetails: any) => {
            try {
                const recipe = await updateRecipe(recipeDetails);
                if (recipe) {
                    toast.success("Recipe excerpt Updated");
                }
            } catch {
                toast.error("Something went wrong updating the recipe");
            }
        }

        if (excerpt !== value) {
            updateRecipeTitle(recipeDetails);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (inputValue) {
                handleDebouncedChange(inputValue);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [inputValue, recipeId]); 

    return (
        <input
            className="text-md block text-white w-full bg-transparent border-0"
            placeholder="Recipe excerpt"
            value={inputValue || ''}
            onChange={(e) => setInputValue(e.target.value)}
        />
    );
}