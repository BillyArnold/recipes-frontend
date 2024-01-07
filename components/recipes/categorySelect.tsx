'use client'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface CategorySelectProps {
    recipeId: number
    categories: any[]
}

export default function CategorySelect({ recipeId, categories }: CategorySelectProps) {

    const addRecipeCategory = (recipeId: number, categoryId: number) => {
        console.log(recipeId, categoryId);
    }

    return (
        <>
                    <Select onValueChange={(value) => addRecipeCategory(recipeId, parseInt(value))}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {categories && categories.map((category: any) => (
                                    <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
        </>
    )
}