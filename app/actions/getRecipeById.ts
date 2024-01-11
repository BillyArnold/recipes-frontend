const getRecipeById = async (id: number) => {
    const response = await fetch(`${process.env.API_URL}/recipes/${id}`, 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache:"no-store"
        }
    );
    const data = await response.json();
    return data;
}

export default getRecipeById;