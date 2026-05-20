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
      
      {/* Εμφάνιση Grid σε μεγάλες οθόνες (lg: 1024px+) */}
      <div className="hidden lg:block">
        <ScheduleGrid />
      </div>

      {/* Εμφάνιση Λίστας σε μικρότερες οθόνες (κάτω από 1024px) */}
      <div className="block lg:hidden">
        <ScheduleList />
      </div>
    </main>
  );
};