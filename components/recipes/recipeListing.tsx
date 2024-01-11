'use client'

import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button';


interface RecipeListingProps {
    recipes: any[]
}
export default function RecipeListing({ recipes }: RecipeListingProps) {
    return (

        <div className="flex flex-wrap justify-center items-center container mt-10">
            {recipes.map((recipe: any) => (
                <div className='w-1/3 px-6 text-left' key={recipe.id}>
                    <Card className='bg-white shadow-2xl mb-10'>
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
                            <p className="text-gray-500 text-sm mt-2">{recipe.excerpt}</p>
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
            ))}
        </div>
    )
}