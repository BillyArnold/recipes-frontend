const deleteRecipeCategory = async (recipeCategoryId: number) => {
    const response = await fetch(`${process.env.API_URL}/recipes/category/${recipeCategoryId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    return data;
};

export default deleteRecipeCategory;