import HeroSection from "@/components/home/HeroSection"
import ExperienceOfAiorisis from "@/components/home/ExperienceOfAiorisis";
import ClassesOfStudio from "@/components/home/ClassesOfStudio";
import OurTeamOfAiorisis from "@/components/home/OurTeamOfAiorisis";
import ScheduleList from "@/components/home/ScheduleList";
import ScheduleGrid from "@/components/home/ScheduleGrid";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExperienceOfAiorisis />
      <ClassesOfStudio />
      <OurTeamOfAiorisis />
      <ScheduleGrid />
    </main>
  );
};