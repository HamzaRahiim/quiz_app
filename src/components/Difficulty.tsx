import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

const Difficulty = ({ level }: { level: string }) => {
  const filledStars = level === "easy" ? 1 : level === "medium" ? 2 : 3; // 'hard' or any other value will show 3 filled stars

  return (
    <div className="flex">
      {/* Render filled stars */}
      {Array.from({ length: filledStars }).map((_, index) => (
        <IoIosStar key={index} />
      ))}

      {/* Render empty stars */}
      {Array.from({ length: 3 - filledStars }).map((_, index) => (
        <IoIosStarOutline key={index} />
      ))}
    </div>
  );
};

export default Difficulty;
