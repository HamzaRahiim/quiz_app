import Image from "next/image";
import Question from "@/app/questions.json";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="home-class">
      <h1 className="heading">Quiz App</h1>
      {/* hero section  */}
      <Hero />
    </main>
  );
}
