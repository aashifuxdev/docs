import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import WorkExperience from "@/components/home/WorkExperience";
import SelectedWorks from "@/components/home/SelectedWorks";
import LetsChat from "@/components/home/LetsChat";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WorkExperience />
      <SelectedWorks />
      <LetsChat />
    </>
  );
}
