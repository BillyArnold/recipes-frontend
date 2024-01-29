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

interface SaveRecipeButtonProps {
  recipeId: number;
}
export default function AddToMealPlanButton({
  recipeId,
}: SaveRecipeButtonProps) {
  const auth = useAuth();

  useEffect(() => {}, []);

  const saveRecipe = async (recipeId: number) => {
    if (auth.user?.id) {
      const res = await favouriteRecipe({
        recipe: { connect: { id: recipeId } },
        user: { connect: { id: auth.user.id } },
      }).then((data: any) => {
        if (data) {
          toast.success("Recipe saved");
        }
      });
    } else {
      toast.error("Could not save recipe");
    }
  };

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
