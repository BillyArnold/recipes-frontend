/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/1vLWUJZlrzR
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"
import LoginForm from "./forms/loginForm"

export function Login() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-r  from-blue-700 via-teal-800 to-green-900 space-y-10">
      <div className="mb-10 text-center">
        <h1 className="text-5xl text-white font-bold">Recipes</h1>
        <p className="text-xl text-white mt-2">Your ultimate source for culinary inspiration!</p>
      </div>
      <div className="flex items-center space-x-10 px-2">
        <Card className="max-w-sm w-full bg-white shadow-2xl rounded-xl overflow-hidden">
          <CardHeader className="bg-white pb-0">
            <CardTitle className="text-3xl text-center font-bold text-blue-700">Sign In</CardTitle>
            <CardDescription className="text-center text-gray-500 mt-2">
              Please enter your username and password to log in.
            </CardDescription>
          </CardHeader>
          <CardContent className="bg-white p-6 space-y-6">
            <LoginForm />
          </CardContent>
          <p className="text-gray-600 text-sm px-6 pb-6 block">Don&apos;t have an account? <Link href="/signup">Sign up</Link></p>
        </Card>
      </div>
    </main>
  )
}
