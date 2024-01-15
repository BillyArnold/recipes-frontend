'use client';

import updateRecipe from "@/app/actions/updateRecipe";
import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";

interface TitleInputProps {
    title?: string
    recipeId: number
}
export default function TitleInput({ title, recipeId }: TitleInputProps) {
    const [inputValue, setInputValue] = useState(title);

    const handleDebouncedChange = (value: string) => {
        // Your logic remains the same
        const recipeDetails = {
            name: value,
            id: recipeId
        };

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
        
        if (title !== value) {
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
    }, [inputValue, recipeId]); // Add recipeId to the dependencies to handle changes in recipeId

    return (
        <input
            className="text-5xl text-white block w-full bg-transparent font-bold border-0"
            placeholder="Recipe Name"
            value={inputValue || ''}
            onChange={(e) => setInputValue(e.target.value)}
        />
    );
}