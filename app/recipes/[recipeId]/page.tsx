import getRecipeById from "@/app/actions/getRecipeById";
import { Editor } from "novel";
import getCategories from "@/app/actions/getCategories";
import CategoryBadges from "@/components/recipes/categoryBadges";
import TitleInput from "@/components/forms/inputs/titleInput";

const ListingPage = async ({ params }: { params: { recipeId: number } }) => {
  const recipe = await getRecipeById(params.recipeId);
  const categories = await getCategories();

  if (!recipe) {
    return <p>No Recipe</p>;
  }

  return (
    <>
      <div className="text-left w-[1100px] max-w-full py-4 px-8">
        <TitleInput title={recipe.name} />
        <p className="text-gray-500 text-sm mt-2">
          Fast and easy stir fry recipe for a healthy meal.
        </p>
        <div className="flex flex-wrap justify-left gap-2 mt-4">
          <CategoryBadges
            recipeId={recipe.id}
            allCategories={categories}
            RecipeCategory={recipe.RecipeCategory}
          />
        </div>
      </div>
      <div className="w-[1100px] max-w-full py-4 px-8 mt-0">
        <Editor
          defaultValue={"hello"}
          className="w-full bg-white text-black shadow-lg rounded-2xl mb-10"
        />
      </div>
    </>
  );
};

export default ListingPage;
