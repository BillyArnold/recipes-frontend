import getMealPlanById from "@/app/actions/getMealPlanById";
import MealPlanTitleInput from "@/components/forms/inputs/mealPlanTitleInput";
import DraggableList from "@/components/mealPlans/draggableList";

const ListingPage = async ({ params }: { params: { mealPlanId: number } }) => {
  const mealPlan = await getMealPlanById(params.mealPlanId);

  if (!mealPlan) {
    return <p>No Meal Plan</p>;
  }

  return (
    <div>
      <div className="text-left block w-[1100px] mx-auto max-w-full pt-4 px-8">
        <MealPlanTitleInput mealPlanId={mealPlan.id} title={mealPlan.name} />
        <div className="p-4"></div>
        <DraggableList mealPlan={mealPlan} />
      </div>
    </div>
  );
};

export default ListingPage;
