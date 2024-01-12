import React from "react"
import { Input } from "../../ui/input"
import { Label } from "../../ui/label"

interface RecipeImageUploadProps {
    recipeId: number
}
export default function RecipeImageUpload({ recipeId }: RecipeImageUploadProps) {

    return (
        <div className="grid w-full max-w-sm items-center gap-1.5 pt-4">
            <Label htmlFor="picture">Recipe Main Image:</Label>
            <Input id="picture" name="file" type="file" />
        </div>
    )
}