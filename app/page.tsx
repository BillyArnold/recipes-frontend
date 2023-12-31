import getRecipes from '@/app/actions/getRecipes';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge"
import Image from 'next/image';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"



export default async function Home() {
  const recipes = await getRecipes();

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 via-teal-300 to-green-400 space-y-10">
      <div className="mb-10 text-center">
        <h1 className="text-5xl text-white font-bold">Recipes</h1>
        <p className="text-xl text-white mt-2">Your ultimate source for culinary inspiration!</p>
        <br/>
        <Drawer>
          <DrawerTrigger className='bg-white text-blue-700 p-4 rounded-lg font-bold'>Filter</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
              <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

      </div>
      <div className="flex items-center space-x-10">
        {recipes.map((recipe: any) => (
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
        ))}
      </div>
    </main>
  )
}
