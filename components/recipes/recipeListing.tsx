import RecipeCard from "./recipeCard";

interface RecipeListingProps {
  recipes: any[];
}

export default function RecipeListing({ recipes }: RecipeListingProps) {
  return (
    <div className="flex flex-wrap justify-center items-center container mt-10">
      {recipes &&
        recipes.map((recipe: any) => (
          <div className="w-full md:w-1/3 px-2 text-left" key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
    </div>
  );
}
