/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/1vLWUJZlrzR
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from "next/link"
import SignupForm from "./forms/signupForm"

export function Signup() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 via-teal-300 to-green-400 space-y-10">
      <div className="mb-10 text-center">
        <h1 className="text-5xl text-white font-bold">Recipes</h1>
        <p className="text-xl text-white mt-2">Your ultimate source for culinary inspiration!</p>
      </div>
      <div className="flex items-center space-x-10">
        <Card className="max-w-sm bg-white w-full shadow-2xl rounded-xl overflow-hidden">
          <CardHeader className="bg-white p-6">
            <CardTitle className="text-3xl text-center font-bold text-blue-700">Sign Up</CardTitle>
            <CardDescription className="text-center text-gray-500 mt-2">
              Please enter your desired username and password to create an account.
            </CardDescription>
          </CardHeader>
          <CardContent className="bg-white p-6 space-y-6">
            <SignupForm />
          </CardContent>
          <p className="text-gray-600 text-sm px-6 pb-6 block">Already have an account? <Link href="/login">Log in</Link></p>
        </Card>
      </div>
    </main>
  )
}
