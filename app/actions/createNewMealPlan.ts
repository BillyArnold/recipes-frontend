const createNewMealPlan = async () => {
    const body = {
        name: 'New Meal Plan',
    }

    const response = await fetch(`${process.env.API_URL}/mealplans`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-store',
        body: JSON.stringify(body),
    });

    const data = await response.json();

    return data;
};

export default createNewMealPlan;
