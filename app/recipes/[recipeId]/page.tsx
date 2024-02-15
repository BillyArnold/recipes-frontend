import getRecipeById from "@/app/actions/getRecipeById";
import { Editor } from "novel";
import getCategories from "@/app/actions/getCategories";
import CategoryBadges from "@/components/recipes/categoryBadges";
import TitleInput from "@/components/forms/inputs/titleInput";
import ExcerptInput from "@/components/forms/inputs/excerptInput";
import RecipeImageUpload from "@/components/forms/inputs/recipeImageUpload";
import RecipeEditor from "@/components/forms/inputs/recipeEditor";
import Image from "next/image";

const ListingPage = async ({ params }: { params: { recipeId: number } }) => {
  const recipe = await getRecipeById(params.recipeId);
  const categories = await getCategories();

  if (!recipe) {
    return <p>No Recipe</p>;
  }

  return (
    <div>
      <div className="text-left block w-[1100px] mx-auto max-w-full pt-4 px-8">
        <TitleInput recipeId={recipe.id} title={recipe.name} />
        <ExcerptInput recipeId={recipe.id} excerpt={recipe.excerpt} />
        <div className="flex flex-wrap justify-left gap-2 mt-4">
          <CategoryBadges
            recipeId={recipe.id}
            allCategories={categories}
            RecipeCategory={recipe.RecipeCategory}
          />
        </div>
        <RecipeImageUpload recipeId={recipe.id} />

        <div className="bg-white p-4 w-full shadow-lg mb-2">Ingredients:</div>
        <Image
          alt="Recipe Image"
          className="w-full md:w-1/2 aspect-[4/3] object-cover rounded-lg mb-2"
          height="600"
          src={
            recipe.imagePath
              ? process.env.API_URL + "/recipes/" + recipe.imagePath
              : "https://via.placeholder.com/640x360"
          }
          width="800"
        />
      </div>
      <RecipeEditor recipeId={recipe.id} defaultContent={recipe.instructions} />
    </div>
  );
};

export default ListingPage;
