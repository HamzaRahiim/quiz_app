"use client";
import { useAppSelector } from "@/store/redux/hooks";
import Selects from "@/components/home_comps/Selects";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const { isQuizReady } = useAppSelector((state) => state.filter);
  const router = useRouter();
  // function to handle Submit logic after Submit Button
  const handleSubmit = () => {
    router.push("/quiz");
  };

  return (
    <section className="hero-main">
      <h1 className="heading">Quiz App</h1>
      <h1 className="md:text-2xl text-lg my-6">
        Your Gateway to Knowledge Testing
      </h1>
      {/* Option To Select Paper */}
      <ul className="list-select">
        <Selects
          name="Category"
          option1="All"
          option2="Animals"
          option3="Geography"
        />
        <Selects
          name="Type"
          option1="All"
          option2="multiple"
          option3="boolean"
        />
        <Selects
          name="difficulty"
          option1="All"
          option2="easy"
          option3="hard"
        />
      </ul>
      {/* Sart Quiz Button  */}
      <Button
        variant="default"
        disabled={!isQuizReady}
        onClick={handleSubmit}
        className={`button-class`}
      >
        Start Quiz
      </Button>
      {/* Instruction */}
      <ul className="instruction">
        <h1 className="text-lg pb-2">Read Instruction Before Starting Quiz:</h1>
        <li className="text-sm">
          {"(1. "}Select the most suitable options from the categories below.
        </li>
        <li className="text-sm">
          {"(2. "}When you{"'"}re ready, click Start Quiz to begin.
        </li>
      </ul>
    </section>
  );
};
export default Hero;
