const createMealPlanRecipe = async (
  mealPlanId: number,
  day: string,
  recipeId: number,
) => {
  const body = {
    day,
    mealPlan: {
      connect: {
        id: mealPlanId,
      },
    },
    recipe: {
      connect: {
        id: recipeId,
      },
    },
  };
  const response = await fetch(`${process.env.API_URL}/mealplans/recipe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
};

export default createMealPlanRecipe;
