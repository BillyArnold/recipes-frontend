const getRecipes = async () => {
    const response = await fetch(`${process.env.API_URL}/recipes`, {
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
}

export default getRecipes;