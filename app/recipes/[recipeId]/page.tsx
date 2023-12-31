import getRecipeById from "@/app/actions/getRecipeById";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";

const ListingPage = async ({ params }: { params: { recipeId: number } }) => {

    const recipe = await getRecipeById(params.recipeId);

    if (!recipe) {
        return (
            <p>No Recipe</p>
        );
    }

    return (
        <>
            <div className="mb-10 text-center">
                <h1 className="text-5xl text-white font-bold">{recipe.name}</h1>
                <p className="text-xl text-white mt-2">Your ultimate source for culinary inspiration!</p>
            </div>
            <div className="flex items-center space-x-10">

                <Card className='bg-white shadow-2xl' key={recipe.id}>
                    <CardContent className='p-6'>
                        <Image
                            alt="Recipe Image"
                            className="w-full aspect-[4/3] object-cover rounded-lg mb-4"
                            height="150"
                            src="https://via.placeholder.com/640x360"
                            width="200"
                        />
                        <Link className="text-lg font-bold text-black transition-colors hover:text-gray-600" href={`/recipes/${recipe.id}`}>
                            {recipe.name}
                        </Link>
                        <p className="text-gray-500 text-sm mt-2">Fast and easy stir fry recipe for a healthy meal.</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            <Badge className="bg-yellow-200 text-yellow-900">Asian</Badge>
                            <Badge className="bg-green-200 text-green-900">Healthy</Badge>
                        </div>
                        <Button className="absolute top-2 right-2" size="icon" variant="ghost">
                            <span className="sr-only">Favorite</span>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

export default ListingPage;