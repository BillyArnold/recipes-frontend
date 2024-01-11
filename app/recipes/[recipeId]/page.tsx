import getRecipeById from "@/app/actions/getRecipeById";
import { Editor } from "novel";
import getCategories from "@/app/actions/getCategories";
import CategoryBadges from "@/components/recipes/categoryBadges";
import TitleInput from "@/components/forms/inputs/titleInput";
import ExcerptInput from "@/components/forms/inputs/excerptInput";

const ListingPage = async ({ params }: { params: { recipeId: number } }) => {
  const recipe = await getRecipeById(params.recipeId);
  const categories = await getCategories();

  if (!recipe) {
    return <p>No Recipe</p>;
  }

  return (
    <>
      <div className="text-left block w-[1100px] mx-auto max-w-full py-4 px-8">
        <TitleInput recipeId={recipe.id} title={recipe.name} />
        <ExcerptInput recipeId={recipe.id} excerpt={recipe.excerpt} />
        <div className="flex flex-wrap justify-left gap-2 mt-4">
          <CategoryBadges
            recipeId={recipe.id}
            allCategories={categories}
            RecipeCategory={recipe.RecipeCategory}
          />
        </div>
      </div>
      <div className="w-[1100px] mx-auto max-w-full py-4 px-8 mt-0">
        <Editor
          defaultValue={"hello"}
          className="w-full bg-white text-black shadow-lg rounded-2xl mb-10"
        />
      </div>
    </>
  );
};

export default ListingPage;
