import { Badge } from "@/components/ui/badge";
import { CATEGORY_ITEM } from "@/constants/category-icon";
import { Category } from "@prisma/client";

interface CategoryItemProps {
    category: Category
} 

const CategoryItem = ({category}: CategoryItemProps) => {


    return ( 
        <Badge variant={"outline"} className="flex items-center justify-center py-3 gap-2 rounded-lg">
            {CATEGORY_ITEM[category.slug as keyof typeof CATEGORY_ITEM]}
            <span className="text-xs font-bold">{category.name}</span>
        </Badge>
     )
}
 
export default CategoryItem;