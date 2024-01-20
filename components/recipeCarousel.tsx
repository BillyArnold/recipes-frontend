import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import RecipeCard from "./recipes/recipeCard"

interface RecipeCarouselProps {
    recipes: any[]
}

export default function RecipeCarousel({ recipes }: RecipeCarouselProps) {
    return(
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full w-full"
        >
          <CarouselContent>
            {recipes && recipes.map((recipe: any) => (
              <CarouselItem key={recipe.id} className="md:basis-1/2 lg:basis-1/3">
                <RecipeCard recipe={recipe.recipe ? recipe.recipe : recipe} />
              </CarouselItem>
            ))}            
          </CarouselContent>
          <CarouselPrevious className='absolute left-0 top-[50%] -translate-y-1/2 shadow-lg' />
          <CarouselNext className='absolute right-0 top-[50%] -translate-y-1/2 shadow-lg' />
        </Carousel>
    )
}