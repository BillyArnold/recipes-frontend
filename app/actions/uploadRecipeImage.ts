const uploadRecipeImage = async (file: any, recipeId: number) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${process.env.API_URL}/recipes/upload-image`, {
        method: 'POST',
        body: formData,
    });

    const data = await response.json();

    return data;
}

export default uploadRecipeImage;