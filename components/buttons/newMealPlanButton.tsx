"use client";

import { Button } from "../ui/button";
import createNewMealPlan from "@/app/actions/createNewMealPlan";
import { useRouter } from "next/navigation";
import useAuth from "../../app/hooks/useAuth";

export default function NewMealPlanButton() {
  const router = useRouter();
  const auth = useAuth();

  if (!auth.user) {
    return null;
  }

  const createNewBlankMealPlan = async () => {
    const newRecipe = await createNewMealPlan(auth.user.id).then(
      (data: any) => {
        router.push(`/mealplans/${data[0].id}`);
      },
    );
  };

  return (
    <Button
      onClick={() => createNewBlankMealPlan()}
      className="mr-4 p-4 shadow-md rounded-2xl bg-white text-black"
    >
      New MealPlan
    </Button>
  );
}
