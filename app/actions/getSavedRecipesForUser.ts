import useAuth from "../hooks/useAuth";

const getSavedRecipesForUser = async (user: any) => {
    const response = await fetch(`${process.env.API_URL}/users/${user.id}`, {
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
}

export default getSavedRecipesForUser;