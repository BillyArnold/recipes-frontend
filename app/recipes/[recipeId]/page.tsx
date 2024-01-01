import getRecipeById from "@/app/actions/getRecipeById";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { Editor } from "novel";

const ListingPage = async ({ params }: { params: { recipeId: number } }) => {

    const recipe = await getRecipeById(params.recipeId);

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
                            <Badge className="bg-yellow-200 text-yellow-900">Asian</Badge>
                            <Badge className="bg-green-200 text-green-900">Healthy</Badge>
                        </div>
            </div>
            <div className="w-[1100px] max-w-full">
                <Editor defaultValue={"hello"} className="w-full bg-white text-black shadow-lg rounded-2xl mb-10" />
            </div>
        </>
    );
}

export default ListingPage;