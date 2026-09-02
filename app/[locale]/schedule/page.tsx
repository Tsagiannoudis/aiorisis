import HeroSectionSchedule from "@/components/schedule/HeroSectionSchedule";
import ScheduleGrid from "@/components/schedule/ScheduleGrid";
import ScheduleList from "@/components/schedule/ScheduleList";


const SchedulePage = () => {
  return (
    <>
      <HeroSectionSchedule />
      {/* Εμφάνιση Grid σε μεγάλες οθόνες (lg: 1024px+) */}
      <div className="hidden lg:block">
        <ScheduleGrid />
      </div>

      {/* Εμφάνιση Λίστας σε μικρότερες οθόνες (κάτω από 1024px) */}
      <div className="block lg:hidden">
        <ScheduleList />
      </div>
    </>
  );
};

export default SchedulePage;