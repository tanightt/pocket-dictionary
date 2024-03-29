import { Capabilities } from "@/components/Capabilities/Capabilities";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Capabilities />
      </main>
    </>
  );
}
