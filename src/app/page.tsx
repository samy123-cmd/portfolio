import Hero from "@/components/Hero";
import Runway from "@/components/Runway";
import Collection from "@/components/Collection";
import Backstage from "@/components/Backstage";

export default function Home() {
  return (
    <main className="min-h-screen bg-fashion-black text-paper-white selection:bg-electric-blue selection:text-white">
      <Hero />
      <Runway />
      <Collection />
      <Backstage />
    </main>
  );
}
