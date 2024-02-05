"use client";

import useAuth from "@/app/hooks/useAuth";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import getSavedRecipesForUser from "@/app/actions/getSavedRecipesForUser";
import createMealPlanRecipe from "@/app/actions/createMealPlanRecipe";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

interface SaveRecipeButtonProps {
  recipeId: number;
}
export default function AddToMealPlanButton({
  recipeId,
}: SaveRecipeButtonProps) {
  const [mealPlans, setMealPlans] = useState([]);
  const [loadingMealPlans, setLoadingMealPlans] = useState(true);
  const [selectedMealPlan, setSelectedMealPlan] = useState<any>();
  const [selectedDay, setSelectedDay] = useState("Monday");
  const auth = useAuth();

  const addToMealPlan = async () => {
    await createMealPlanRecipe(selectedMealPlan, selectedDay, recipeId).then(
      (res) => toast.success("Recipe added to meal plan"),
    );
  };

  useEffect(() => {
    if (auth.user?.id) {
      const res = getSavedRecipesForUser(auth.user).then((data) => {
        setMealPlans(data.mealPlans);
        setSelectedMealPlan(data.mealPlans[0]);
        setLoadingMealPlans(false);
      });
    } else {
      toast.error("Could not save recipe");
    }
  }, []);

  if (!auth.user) {
    return null;
  }

  return (
    <Drawer>
      <DrawerTrigger className="bg-white text-blue-700 p-2 rounded-full shadow-md absolute bottom-4 right-4 font-bold">
        <FaPlus className="text-green-700 hover:text-red-500" size={20} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="mb-4">Which Meal Plan to add to?</DrawerTitle>
          <DrawerDescription>
            {loadingMealPlans ? (
              <div>Loading meal plans...</div>
            ) : (
              <div>
                <Select
                  value={selectedMealPlan?.id}
                  onValueChange={(value) => setSelectedMealPlan(value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a meal plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {mealPlans &&
                        mealPlans.map((mealPlan: any) => (
                          <SelectItem key={mealPlan.id} value={mealPlan.id}>
                            {mealPlan.name}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <div className="mb-4"></div>
                <Select
                  value={days[0]}
                  onValueChange={(value) => setSelectedDay(value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a day" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {days.map((day: any) => (
                        <SelectItem key={day} value={day}>
                          {day}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="items-start flex-row">
          <Button onClick={() => addToMealPlan()}>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
