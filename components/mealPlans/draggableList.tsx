"use client";

import { Reorder } from "framer-motion";
import { useState } from "react";

interface DraggableListProps {
  mealPlan: any;
}

export default function DraggableList({ mealPlan }: DraggableListProps) {
  const [recipes, setRecipes] = useState(mealPlan.recipes);

  const getRecipeIds = (mealPlan: any) => {
    const recipeIds: any[] = [];

    mealPlan.recipes.forEach((recipe: any) => {
      recipeIds.push(recipe.recipe.id);
    });

    return recipeIds;
  };

  const [values, setValues] = useState(getRecipeIds(mealPlan));

  return (
    <Reorder.Group axis="y" values={values} onReorder={setRecipes}>
      {recipes.map((recipe: any) => (
        <Reorder.Item
          className="bg-white p-6 shadow-lg mb-6 cursor-pointer rounded-md text-black"
          key={recipe.id}
          value={recipe.day}
        >
          {recipe.recipe.name}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
