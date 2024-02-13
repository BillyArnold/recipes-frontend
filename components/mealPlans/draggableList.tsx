"use client";

import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

interface DraggableListProps {
  mealPlan: any;
}

export default function DraggableList({ mealPlan }: DraggableListProps) {
  const [recipes, setRecipes] = useState(mealPlan.recipes);

  return (
    <Reorder.Group axis="y" values={recipes} onReorder={setRecipes}>
      {recipes.map((recipe: any) => (
        <Reorder.Item
          className="bg-white p-6 shadow-lg mb-6 cursor-pointer rounded-md text-black"
          key={recipe.id}
          value={recipe}
        >
          <Link href={`/recipes/${recipe.recipe.id}`}>
            {recipe.recipe.name}
          </Link>
          {recipe.day}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
