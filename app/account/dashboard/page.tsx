import getRecipes from '@/app/actions/getRecipes';
import CardCarousel from '@/components/cardCarousel';

export default async function Dashboard() {
  const recipes = await getRecipes();

  return (
    <main className="flex min-h-screen w-full flex-col px-12 pt-36 bg-gradient-to-r from-blue-200 via-teal-300 to-green-400 space-y-10">
      <div className="mb-10">
        <h1 className="text-5xl text-white font-bold">My Account</h1>
        <p className="text-xl text-white mt-2">Your saved recipes and mealplans</p>
        <br />

        <h2 className='text-3xl font-bold'>Saved Recipes</h2>

        <div className='py-4'></div>

        <CardCarousel />

        <div className='py-4'></div>
        <h2 className='text-3xl font-bold'>Saved MealPlans</h2>
        <div className='py-4'></div>
        <CardCarousel />
        <div className='py-4'></div>
      </div>
    </main>
  )
}
