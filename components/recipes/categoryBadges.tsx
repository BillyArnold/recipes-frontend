'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import toast from "react-hot-toast"
import deleteRecipeCategory from "@/app/actions/deleteRecipeCategory"
import createRecipeCategory from "@/app/actions/createRecipeCategory"
import { useRef, useState } from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface CategoryBadgesProps {
    RecipeCategory: [],
    recipeId: number,
    allCategories: []
}

export default function CategoryBadges({ RecipeCategory, recipeId, allCategories }: CategoryBadgesProps) {
    const [categories, setCategories] = useState<any>(RecipeCategory);
    const [defaultValue, setDefaultValue] = useState<any>(null);
    const selectRef = useRef<any>(null);
    const deleteRC = (recipeCategoryId: number) => {
        const data = deleteRecipeCategory(recipeCategoryId)
            .then((data) => {
                setCategories((prev: any) => prev.filter((category: any) => category.id !== recipeCategoryId));
                toast.success("Recipe Category Deleted");
            })
            .catch((error) => {
                toast.error("Something went wrong");
            });
    }

    const addRC = (recipeId: number, categoryId: number) => {
        if (!categoryId) {
            toast.error("Please select a category");
            return;
        }
        const data = createRecipeCategory(categoryId, recipeId)
            .then((data) => {
                if (data.category) {
                    setDefaultValue(null)
                    setCategories((prev: any) => [...prev, data]);
                    toast.success("Recipe Category Added");
                }
            }).catch((error) => {
                console.log(error);
                toast.error("Something went wrong");
            });
    }

    return (
        <div>
            <div className="flex items-center justify-center gap-2 mb-2">
                {categories && categories.map((category: any) => (
                    <div className="flex items-center justify-center gap-2" key={category.id}>
                        <Badge variant="secondary" key={category.id}>{category.category.name}</Badge>
                        <Button onClick={() => deleteRC(category.id)} variant="outline" className="rounded-2xl p-2 h-6 flex items-center justify-center">x</Button>
                    </div>
                ))}
                <Select value={defaultValue} onValueChange={(value) => addRC(recipeId, parseInt(value))}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {allCategories && allCategories.map((category: any) => (
                                <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}