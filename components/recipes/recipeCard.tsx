import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import CategoryBadgesUI from "./categoryBadgesUI";
import SaveRecipeButton from "../buttons/saveRecipeButton";

interface RecipeCardProps {
    recipe: any
}

export default function RecipeCard({recipe}: RecipeCardProps) {
    return (
                    <Card className='bg-white shadow-2xl mb-10 relative'>
                        <CardContent className='p-4'>
                            <Image
                                alt="Recipe Image"
                                className="w-full aspect-[4/3] object-cover rounded-lg mb-4"
                                height="400"
                                src={recipe.imagePath ? process.env.API_URL + '/recipes/' + recipe.imagePath : "https://via.placeholder.com/640x360"}
                                width="600"
                            />
                            <Link className="text-lg font-bold text-black transition-colors hover:text-gray-600" href={`/recipes/${recipe.id}`}>
                                {recipe.name}
                            </Link>
                            <p className="text-gray-500 text-sm mt-2">{recipe.excerpt}</p>
                            <CategoryBadgesUI RecipeCategory={recipe.RecipeCategory}/>
                            <SaveRecipeButton recipeId={recipe.id} />
                        </CardContent>
                    </Card>

    )
}