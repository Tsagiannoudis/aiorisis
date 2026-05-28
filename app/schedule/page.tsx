import HeroSectionSchedule from "@/components/schedule/HeroSectionSchedule";
import ScheduleGrid from "@/components/home/ScheduleGrid";
import ScheduleList from "@/components/home/ScheduleList";


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