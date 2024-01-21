import getMealPlanById from "@/app/actions/getMealPlanById";
import DraggableList from "@/components/mealPlans/draggableList";

const ListingPage = async ({ params }: { params: { mealPlanId: number } }) => {
  const mealPlan = await getMealPlanById(params.mealPlanId);

  if (!mealPlan) {
    return <p>No Meal Plan</p>;
  }

  return (
    <div>
      <div className="text-left block w-[1100px] mx-auto max-w-full pt-4 px-8">
        <h2>This is a new mealplan</h2>
        <DraggableList />
      </div>
    </div>
  );
};

export default ListingPage;
