"use client";

import updateMealPlan from "@/app/actions/updateMealPlan";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface MealPlanTitleInputProps {
  title?: string;
  mealPlanId: number;
}
export default function MealPlanTitleInput({
  title,
  mealPlanId,
}: MealPlanTitleInputProps) {
  const [inputValue, setInputValue] = useState(title);

  const handleDebouncedChange = (value: string) => {
    // Your logic remains the same
    const details = {
      name: value,
      id: mealPlanId,
    };

    const updateMealPlanTitle = async (details: any) => {
      try {
        const mealPlan = await updateMealPlan(details);
        if (mealPlan) {
          toast.success("Meal Plan Title Updated");
        }
      } catch {
        toast.error("Something went wrong updating the meal plan");
      }
    };

    if (title !== value) {
      updateMealPlanTitle(details);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue) {
        handleDebouncedChange(inputValue);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue, mealPlanId]); // add recipeid to the dependencies to handle changes in recipeid

  return (
    <input
      className="text-5xl text-white block w-full bg-transparent font-bold border-0"
      placeholder="Meal Plan Title"
      value={inputValue || ""}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}
