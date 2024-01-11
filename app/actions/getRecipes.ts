const getRecipes = async () => {
    const response = await fetch(`${process.env.API_URL}/recipes`, {
        cache: 'no-store'
    });
    const data = await response.json();
    return data;
}

export default getRecipes;