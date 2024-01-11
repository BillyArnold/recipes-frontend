const createNewRecipe = async () => {
    const body = {
        name: 'New Recipe',
    }

    const response = await fetch(`${process.env.API_URL}/recipes`, {
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

export default createNewRecipe;