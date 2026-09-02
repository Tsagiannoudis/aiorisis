export const dynamic = "force-dynamic";

import HeroSectionRetreats from "@/components/retreats/HeroSectionRetreats";  
import EventOfRetreats from "@/components/retreats/EventOfRetreats";
import UpcomingEventOfRetreats from "@/components/retreats/UpcomingEventOfRetreats";

const RetreatsPage = () => {
  return (
    <>
      <HeroSectionRetreats />   
      <UpcomingEventOfRetreats />
      <EventOfRetreats />
    </>
  );
};

export default RetreatsPage;