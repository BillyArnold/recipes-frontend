
import { Button } from "../ui/button"
import { IoMdHeart } from "react-icons/io"

export default function SaveRecipeButton() {
    return (
        <Button className="absolute top-4 p-0 right-4" size="icon" variant="ghost">
            <IoMdHeart size={20} />
            <span className="sr-only">Favorite</span>
        </Button>
    );
}

