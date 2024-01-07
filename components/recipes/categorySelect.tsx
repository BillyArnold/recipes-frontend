'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface CategorySelectProps {
    RecipeCategory: any
    recipeId: number
}

export default function CategorySelect({ RecipeCategory, recipeId}: CategorySelectProps) {
    return (
        <>
                    {RecipeCategory.map((category: any) => (
                        <div className="flex items-center justify-center gap-2" key={category.id}>
                            <Badge variant="secondary" key={category.id}>{category.category.name}</Badge>
                            <Button variant="outline" className="rounded-2xl p-2 h-6 flex items-center justify-center">x</Button>
                        </div>
                    ))}
        </>
    )
}