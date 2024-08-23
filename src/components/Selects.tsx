"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch } from "@/store/hooks";
import {
  updateCategory,
  updateType,
  updateDifficulty,
} from "@/store/slices/HeroSelect";
type Options = {
  name: string;
  option1: string;
  option2?: string;
  option3?: string;
};

const Selects = ({ name, option1, option2, option3 }: Options) => {
  const dispatch = useAppDispatch();

  const handleChange = (value: string) => {
    switch (name.toLowerCase()) {
      case "category":
        dispatch(updateCategory(value));
        break;
      case "type":
        dispatch(updateType(value));
        break;
      case "difficulty":
        dispatch(updateDifficulty(value));
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Select onValueChange={handleChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={name} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={option1} className="hover:cursor-pointer">
            {option1}
          </SelectItem>
          <SelectItem
            value={option2 ? option2 : "ok"}
            className="hover:cursor-pointer"
          >
            {option2}
          </SelectItem>
          <SelectItem
            value={option3 ? option3 : "ok"}
            className="hover:cursor-pointer"
          >
            {option3}
          </SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default Selects;
