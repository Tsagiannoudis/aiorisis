import HeroSectionEvents from "@/components/events/HeroSectionEvents";
import UpcomingEventOfEvents from "@/components/events/UpcomingEventOfEvents";
import EventOfEvents from "@/components/events/EventOfEvents";


const EventsPage = () => {
  return (
    <>
      <HeroSectionEvents /> 
      <UpcomingEventOfEvents />
      <EventOfEvents />  
    </>
  );
};

export default EventsPage;