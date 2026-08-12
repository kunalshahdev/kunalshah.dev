import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Skills } from "@/components/skills";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Education />
      <Skills />
      <Services />
      <Contact />
    </>
  );
}
