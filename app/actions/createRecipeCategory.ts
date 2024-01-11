const createRecipeCategory = async (categoryId: number, recipeId: number) => {
    const body = {
        category: {
            connect: {
                id: categoryId
            }
        },
        recipe: {
            connect: {
                id: recipeId
            }
        }
    }
    const response = await fetch(`${process.env.API_URL}/recipes/category`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-store',
        body: JSON.stringify(body)
    });

    const data = await response.json();

    return data;
};

export default createRecipeCategory;