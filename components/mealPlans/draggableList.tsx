"use client";

import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";
import { start } from "repl";

interface DraggableListProps {
  mealPlan: any;
}

export default function DraggableList({ mealPlan }: DraggableListProps) {
  const [recipes, setRecipes] = useState(mealPlan.recipes);
  const [startingDaysRecipes, setStartingDaysRecipes] = useState(
    mealPlan.recipes,
  );

  useEffect(() => {
    //when recipes change, check the order and change days around
    setRecipes((prevRecipes: any) => {
      let updatedRecipes = prevRecipes;

      for (let i = 0; i < updatedRecipes.length; i++) {
        const updatedItem = updatedRecipes[i];
        updatedItem.day = startingDaysRecipes[i].day;

        updatedRecipes[i] = updatedItem;
      }

      console.log("test", updatedRecipes);

      return updatedRecipes;
    });
  }, [recipes]);

  return (
    <Reorder.Group axis="y" values={recipes} onReorder={setRecipes}>
      {recipes.map((recipe: any) => (
        <Reorder.Item
          className="bg-white p-6 shadow-lg mb-6 cursor-pointer rounded-md text-black"
          key={recipe.id}
          value={recipe}
        >
          {recipe.recipe.name}
          {recipe.day}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
