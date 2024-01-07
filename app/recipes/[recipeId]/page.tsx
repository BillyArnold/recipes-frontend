import getRecipeById from "@/app/actions/getRecipeById";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { Editor } from "novel";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import getCategories from "@/app/actions/getCategories";
import CategorySelect from "@/components/recipes/categorySelect";

const ListingPage = async ({ params }: { params: { recipeId: number } }) => {

    const recipe = await getRecipeById(params.recipeId);
    const categories = await getCategories();

    if (!recipe) {
        return (
            <p>No Recipe</p>
        );
    }

    return (
        <>
            <div className="mb-10 text-center">
                <h1 className="text-5xl text-white font-bold">{recipe.name}</h1>
                <p className="text-gray-500 text-sm mt-2">Fast and easy stir fry recipe for a healthy meal.</p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <CategorySelect RecipeCategory={recipe.RecipeCategory} recipeId={recipe.id} />
                    <Select>
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
                </div>
            </div>
            <div className="w-[1100px] max-w-full">
                <Editor defaultValue={"hello"} className="w-full bg-white text-black shadow-lg rounded-2xl mb-10" />
            </div>
        </>
    );
}

export default ListingPage;