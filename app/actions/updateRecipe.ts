const updateRecipe = async (recipeDetails: any) => {
    const body = { ...recipeDetails };

    const response = await fetch(`${process.env.API_URL}/recipes/${recipeDetails.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-store',
        body: JSON.stringify(body),
    });

    const data = await response.json();

    return data;
};

export default updateRecipe;