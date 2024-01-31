"use client";

import useAuth from "@/app/hooks/useAuth";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa";
import favouriteRecipe from "@/app/actions/favouriteRecipe";
import toast from "react-hot-toast";
import { useEffect } from "react";
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
  const auth = useAuth();

  const getUserInfo = async () => {
    if (auth.user?.id) {
      const res = await getSavedRecipesForUser(auth.user.id).then((data) => {
        console.log(data);
        toast.success("TEST");
      });
    } else {
      toast.error("Could not save recipe");
    }
  };

  useEffect(() => {
    getUserInfo();
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
          <DrawerDescription></DrawerDescription>
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
