"use client";

import useAuth from "@/app/hooks/useAuth";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import getSavedRecipesForUser from "@/app/actions/getSavedRecipesForUser";

interface SaveRecipeButtonProps {
  recipeId: number;
}
export default function AddToMealPlanButton({
  recipeId,
}: SaveRecipeButtonProps) {
  const [mealPlans, setMealPlans] = useState(null);
  const [loadingMealPlans, setLoadingMealPlans] = useState(true);
  const auth = useAuth();

  useEffect(() => {
    if (auth.user?.id) {
      const res = getSavedRecipesForUser(auth.user).then((data) => {
        setMealPlans(data.mealPlans);
        setLoadingMealPlans(false);
      });
    } else {
      toast.error("Could not save recipe");
    }
  }, []);

  if (!auth.user) {
    return null;
  }

  return (
    <Drawer>
      <DrawerTrigger className="bg-white text-blue-700 p-2 rounded-full shadow-md absolute bottom-4 right-4 font-bold">
        <FaPlus className="text-green-700 hover:text-red-500" size={20} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Which Meal Plan to add to?</DrawerTitle>
          <DrawerDescription>
            {loadingMealPlans ? (
              <div>Loading meal plans...</div>
            ) : (
              <div>Meals loaded</div>
            )}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
