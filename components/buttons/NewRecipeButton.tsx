
'use client'

import { Button } from "../ui/button";
import createNewRecipe from "@/app/actions/createNewRecipe";
import { useRouter } from "next/navigation";

export default function NewRecipeButton() {
    const router = useRouter();

    const createNewBlankRecipe = async () => {
        const newRecipe = await createNewRecipe().then((data: any) => {
            router.push(`/recipes/${data.id}`);
        });
    }

    return (
        <Button onClick={() => createNewBlankRecipe()} className="mr-4 p-4 shadow-md rounded-2xl bg-white text-black">
            New Recipe
        </Button>
    );
}