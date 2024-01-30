"use client";

import getSavedRecipesForUser from "@/app/actions/getSavedRecipesForUser";
import useAuth from "@/app/hooks/useAuth";
import LogoutButton from "@/components/buttons/logoutButton";
import NewMealPlanButton from "@/components/buttons/newMealPlanButton";
import RecipeCarousel from "@/components/recipeCarousel";
import MealPlanCarousel from "@/components/mealPlanCarousel";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const auth = useAuth();
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [savedMealPlans, setSavedMealPlans] = useState([]);

  useEffect(() => {
    const getSavedRecipes = async (auth: any) => {
      const data = await getSavedRecipesForUser(auth.user).then((data) => {
        setSavedRecipes(data.recipes);
        setSavedMealPlans(data.mealPlans);
      });
    };

    getSavedRecipes(auth);
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col px-6 pt-36 bg-gradient-to-r  from-blue-700 via-teal-800 to-green-900  space-y-10">
      <div className="mb-10">
        <h1 className="text-5xl text-white font-bold">My Account</h1>
        <p className="text-xl text-white mt-2 mb-2">
          Your saved recipes and mealplans
        </p>
        <NewMealPlanButton />
        <LogoutButton />
        <br />
        <br />

        <h2 className="text-3xl font-bold">Saved Recipes</h2>

        <div className="py-4"></div>

        <RecipeCarousel recipes={savedRecipes} />

        <div className="py-4"></div>
        <h2 className="text-3xl font-bold">Saved MealPlans</h2>
        <div className="py-4"></div>
        <MealPlanCarousel mealPlans={savedMealPlans} />
        <div className="py-4"></div>
      </div>
    </main>
  );
}
