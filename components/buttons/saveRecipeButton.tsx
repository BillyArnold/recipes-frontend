"use client";

import useAuth from "@/app/hooks/useAuth";
import { Button } from "../ui/button";
import { IoMdHeart } from "react-icons/io";
import favouriteRecipe from "@/app/actions/favouriteRecipe";
import toast from "react-hot-toast";
import { useEffect } from "react";

interface SaveRecipeButtonProps {
  recipeId: number;
}
export default function SaveRecipeButton({ recipeId }: SaveRecipeButtonProps) {
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
    <Button
      onClick={() => saveRecipe(recipeId)}
      className="absolute top-2 p-0 right-2"
      size="icon"
      variant="ghost"
    >
      <IoMdHeart className="text-gray-800 hover:text-red-500" size={20} />
      <span className="sr-only">Favorite</span>
    </Button>
  );
}
