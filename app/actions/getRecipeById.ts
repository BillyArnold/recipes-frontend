const getRecipeById = async (id: number) => {
    const response = await fetch(`${process.env.API_URL}/recipes/${id}`);
    const data = await response.json();
    return data;
}

export default getRecipeById;