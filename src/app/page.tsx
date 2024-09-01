import Hero from "@/components/home_comps/Hero";
import backgroundImg from "@/lib/images/background.jpeg";

export default function Home() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg.src})` }}
    >
      <div className="absolute inset-0 bg-black/90 z-10" />
      <main className="home-main">
        <Hero />
      </main>
    </section>
  );
}
