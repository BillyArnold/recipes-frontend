import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

interface MealPlanCarouselProps {
  mealPlans: any[];
}

export default function MealPlanCarousel({ mealPlans }: MealPlanCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full w-full"
    >
      <CarouselContent>
        {mealPlans &&
          mealPlans.map((mealPlan: any) => (
            <CarouselItem
              key={mealPlan.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="text-black font-bold p-6 bg-white shadow-xl rounded-lg">
                <Link href={`/mealplans/${mealPlan.id}`}>{mealPlan.name}</Link>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-[50%] -translate-y-1/2 shadow-lg" />
      <CarouselNext className="absolute right-0 top-[50%] -translate-y-1/2 shadow-lg" />
    </Carousel>
  );
}
