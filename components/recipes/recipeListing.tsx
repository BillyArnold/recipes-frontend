import { CardContent, Card } from "@/components/ui/card"
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CategoryBadgesUI from "./categoryBadgesUI";
import { IoMdHeart } from "react-icons/io";


interface RecipeListingProps {
    recipes: any[]
}
export default function RecipeListing({ recipes }: RecipeListingProps) {
    return (
        <div className="flex flex-wrap justify-center items-center container mt-10">
            {recipes && recipes.map((recipe: any) => (
                <div className='w-full md:w-1/3 px-6 text-left' key={recipe.id}>
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
                            <Button className="absolute top-4 p-0 right-4" size="icon" variant="ghost">
                                <IoMdHeart size={20} />
                                <span className="sr-only">Favorite</span>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    )
}