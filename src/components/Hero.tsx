"use client";
import { useAppSelector } from "@/store/hooks";
import Selects from "./Selects";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const Hero = () => {
  const { isQuizReady } = useAppSelector((state) => state.filter);
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/quiz");
  };
  return (
    <section className="hero-main">
      <h1 className="text-2xl mt-4 font-light">
        Please Select the Option to Start Quiz
      </h1>
      {/* Three Option */}
      <ul className="flex gap-x-4">
        <Selects name="Category" option1="All" />
        <Selects name="Type" option1="All" />
        <Selects name="difficulty" option1="All" />
      </ul>
      {/* Sart Quiz Button  */}
      <Button variant="default" disabled={!isQuizReady} onClick={handleSubmit}>
        Start Quiz
      </Button>
    </section>
  );
};
export default Hero;
