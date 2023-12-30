/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/1vLWUJZlrzR
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Login() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 via-teal-300 to-green-400 space-y-10">
      <div className="mb-10 text-center">
        <h1 className="text-5xl text-white font-bold">Recipes</h1>
        <p className="text-xl text-white mt-2">Your ultimate source for culinary inspiration!</p>
      </div>
      <div className="flex items-center space-x-10">
        <Card className="max-w-sm w-full bg-white shadow-2xl rounded-xl overflow-hidden">
          <CardHeader className="bg-white p-6">
            <CardTitle className="text-3xl text-center font-bold text-blue-700">Sign In</CardTitle>
            <CardDescription className="text-center text-gray-500 mt-2">
              Please enter your username and password to log in.
            </CardDescription>
          </CardHeader>
          <CardContent className="bg-white p-6 space-y-6">
            <div className="space-y-2">
              <Label className="text-gray-600" htmlFor="username">
                Username
              </Label>
              <Input
                className="border-2 border-blue-200 rounded-md p-2 focus:border-blue-500 focus:outline-none w-full"
                id="username"
                placeholder="Username"
                required
                type="text"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-600" htmlFor="password">
                Password
              </Label>
              <Input
                className="border-2 border-blue-200 rounded-md p-2 focus:border-blue-500 focus:outline-none w-full"
                id="password"
                required
                type="password"
              />
            </div>
          </CardContent>
          <CardFooter className="bg-white p-6">
            <Button className="w-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-bold py-2 px-4 rounded-md">
              Log in
            </Button>
          </CardFooter>
            <p className="text-gray-600 text-sm px-6 pb-6 block">Don&apos;t have an account? <Link href="/signup">Sign up</Link></p>
        </Card>
      </div>
    </main>
  )
}