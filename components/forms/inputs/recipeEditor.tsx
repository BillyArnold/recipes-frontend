"use client";

import updateRecipe from "@/app/actions/updateRecipe";
import { Editor } from "novel";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface RecipeEditorProps {
  recipeId: number;
  defaultContent: any;
}

export default function RecipeEditor({
  recipeId,
  defaultContent,
}: RecipeEditorProps) {
  useEffect(() => {
    if (defaultContent) {
      localStorage.setItem("novel__content", defaultContent);
    } else {
      localStorage.setItem("novel__content", "{}");
    }
  }, []);

  const handleContentUpdate = async (novelContent: any) => {
    const recipeDetails = {
      id: recipeId,
      instructions: JSON.stringify(novelContent),
    };
    const updatedRecipe = await updateRecipe(recipeDetails);
    if (updatedRecipe) {
      toast.success("Recipe Saved");
    }
  };

  return (
    <div className="w-[1100px] mx-auto max-w-full mb-2 px-8 mt-0">
      <Editor
        defaultValue={"hello"}
        className="w-full bg-white text-black shadow-lg rounded-md mb-10"
        onDebouncedUpdate={(Editor) => handleContentUpdate(Editor?.getJSON())}
      />
    </div>
  );
}
