const updateMealPlan = async (details: any) => {
  const body = { ...details };

  const response = await fetch(
    `${process.env.API_URL}/mealplans/${details.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(body),
    },
  );

  const data = await response.json();

  return data;
};

export default updateMealPlan;
