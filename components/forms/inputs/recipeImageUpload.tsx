'use client';

import React from "react"
import { Input } from "../../ui/input"
import { Label } from "../../ui/label"
import { Button } from "@/components/ui/button"
import uploadRecipeImage from '@/app/actions/uploadRecipeImage';
import toast from "react-hot-toast"

interface RecipeImageUploadProps {
    recipeId: number
}
export default function RecipeImageUpload({ recipeId }: RecipeImageUploadProps) {

    const handleFileUpload = async () => {
        const fileInput = document.getElementById("picture") as HTMLInputElement;
        const file = fileInput.files?.[0];
        if (file) {
            try {
                const uploadRecipeImageRes = await uploadRecipeImage(file, recipeId);
            } catch {
                toast.error("Something went wrong uploading the image");
            }
        }
    }

    return (
        <div className="grid w-full max-w-sm items-center gap-1.5 pt-4">
            <Label htmlFor="picture">Recipe Main Image:</Label>
            <Input id="picture" name="file" type="file" />
            <Button onClick={() => handleFileUpload()} className="w-full bg-white text-blue-500 shadow-md">Upload</Button>
        </div>
    )
}