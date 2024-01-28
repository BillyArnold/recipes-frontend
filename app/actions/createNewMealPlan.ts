const createNewMealPlan = async (userId: any) => {
  const body = {
    name: "New Meal Plan",
  };

  const response = await fetch(`${process.env.API_URL}/mealplans`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify(body),
  });

  const data = await response.json();

  const relationBody = {
    mealPlans: { connect: { id: data.id } },
  };

  const mealPlanRelationRes = await fetch(
    `${process.env.API_URL}/users/${userId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(relationBody),
    },
  );

  const mealPlanRelationResData = await mealPlanRelationRes.json();

  return [data, mealPlanRelationResData];
};

export default createNewMealPlan;
