const getCategories = async () => {
    const response = await fetch(`${process.env.API_URL}/categories`, {
        cache: 'no-store'
    });
    const data = await response.json();
    return data;
}

export default getCategories;