'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import toast from "react-hot-toast"
import deleteRecipeCategory from "@/app/actions/deleteRecipeCategory"

interface CategoryBadgesProps {
    RecipeCategory: any
}

export default function CategoryBadges({ RecipeCategory}: CategoryBadgesProps) {

    const deleteRC = (recipeCategoryId: number) => {
        const data = deleteRecipeCategory(recipeCategoryId);
        console.log(data);
        toast.success("Recipe Category Deleted");
    }

    return (
        <>
                    {RecipeCategory.map((category: any) => (
                        <div className="flex items-center justify-center gap-2" key={category.id}>
                            <Badge variant="secondary" key={category.id}>{category.category.name}</Badge>
                            <Button onClick={() => deleteRC(category.id)} variant="outline" className="rounded-2xl p-2 h-6 flex items-center justify-center">x</Button>
                        </div>
                    ))}
        </>
    )
}