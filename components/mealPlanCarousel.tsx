import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import RecipeCard from "./recipes/recipeCard"

interface MealPlanCarouselProps {
    mealPlans: any[]
}

export default function MealPlanCarousel({ mealPlans }: MealPlanCarouselProps) {
    return(
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full w-full"
        >
          <CarouselContent>
            {mealPlans && mealPlans.map((mealPlan: any) => (
              <CarouselItem key={mealPlan.id} className="md:basis-1/2 lg:basis-1/3">
                {mealPlan.name}
              </CarouselItem>
            ))}            
          </CarouselContent>
          <CarouselPrevious className='absolute left-0 top-[50%] -translate-y-1/2 shadow-lg' />
          <CarouselNext className='absolute right-0 top-[50%] -translate-y-1/2 shadow-lg' />
        </Carousel>
    )
}
