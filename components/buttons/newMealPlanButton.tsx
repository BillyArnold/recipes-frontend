'use client'

import { Button } from "../ui/button";
import createNewMealPlan from "@/app/actions/createNewMealPlan";
import { useRouter } from "next/navigation";

export default function NewMealPlanButton() {
    const router = useRouter();

    const createNewBlankMealPlan = async () => {
        const newRecipe = await createNewMealPlan().then((data: any) => {
            router.push(`/mealplans/${data.id}`);
        });
    }

    return (
        <Button onClick={() => createNewBlankMealPlan()} className="mr-4 p-4 shadow-md rounded-2xl bg-white text-black">
            New MealPlan
        </Button>
    );
}
