import getRecipes from "@/app/actions/getRecipes";
import RecipeListing from "@/components/recipes/recipeListing";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <main className="flex flex-col items-center justify-center pt-36 bg-gradient-to-r from-blue-700 via-teal-800 to-green-900 space-y-10">
      <div className="mb-10 text-center">
        <h1 className="text-5xl text-white font-bold">Recipes</h1>
        <p className="text-xl text-white mt-2">
          Your ultimate source for culinary inspiration!
        </p>
        <br />
        <Drawer>
          <DrawerTrigger className="bg-white text-blue-700 p-4 rounded-lg font-bold">
            Filter
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <RecipeListing recipes={recipes} />
      </div>
    </main>
  );
}
