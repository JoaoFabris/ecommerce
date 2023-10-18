import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import { KeyboardIcon, MonitorIcon, MouseIcon, Square, SpeakerIcon, HeadphonesIcon } from "lucide-react";

interface CategoryItemProps {
    category: Category
} 

const CategoryItem = ({category}: CategoryItemProps) => {
    const categoryIcon = {
        keyboards: <KeyboardIcon  size={16}/>,
        monitors: <MonitorIcon  size={16}/>,
        headphones: <HeadphonesIcon  size={16}/>,
        mousepads: <Square  size={16}/>,
        speakers: <SpeakerIcon  size={16}/>,
        mouses: <MouseIcon  size={16}/>
    };

    return ( 
        <Badge variant={"outline"} className="flex items-center justify-center py-3 gap-2 rounded-lg">
            {categoryIcon[category.slug as keyof typeof categoryIcon]}
            <span className="text-xs font-bold">{category.name}</span>
        </Badge>
     )
}
 
export default CategoryItem;