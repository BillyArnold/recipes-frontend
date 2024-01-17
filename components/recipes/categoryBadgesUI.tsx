'use client'

import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface CategoryBadgesProps {
    RecipeCategory: [],
}

export default function CategoryBadgesUI({ RecipeCategory }: CategoryBadgesProps) {
    const [categories, setCategories] = useState<any>(RecipeCategory);

    return (
        <div>
            <div className="flex items-center gap-2 py-2">
                {categories && categories.map((category: any) => (
                    <div className="flex items-center justify-center gap-2" key={category.id}>
                        <Badge variant="secondary" key={category.id}>{category.category.name}</Badge>
                    </div>
                ))}
            </div>
        </div>
    )
}