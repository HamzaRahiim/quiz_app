"use client";

import { Options } from "@/app/types";
import { useAppDispatch } from "@/store/redux/hooks";
import {
  updateCategory,
  updateType,
  updateDifficulty,
} from "@/store/slices/HeroSelect";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Selects = ({ name, option1, option2, option3 }: Options) => {
  const dispatch = useAppDispatch();

  //  function to update redux state of Paper Selection option
  const handleChangeOptions = (value: string) => {
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
      <Select onValueChange={handleChangeOptions}>
        <SelectTrigger className="w-40 text-black relative z-30">
          <SelectValue placeholder={name} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={option1} className="hover:cursor-pointer">
            {option1}
          </SelectItem>
          <SelectItem
            value={option2 ? option2 : ""} // as it is optional that's why we pass the empty string
            className="hover:cursor-pointer"
          >
            {option2}
          </SelectItem>
          <SelectItem
            value={option3 ? option3 : ""} // as it is optional that's why we pass the empty string
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
