import { AllEvents, EventType } from "@/constants/Data";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
} from "react";

import {
  fetchEventsFromStaticData,
  fetchEventsFromFirestore,
} from "../utils/fetchEvents";

import { addEventToFirestore } from "../utils/addEvent";

interface EventContextType {
  allEvents: EventType[];
  joinedEvents: EventType[];
  joinEvent: (event: EventType) => void;
  removeEvent: (eventId: string) => void;
  fetchEvents: () => Promise<EventType[] | undefined>; // Async function to fetch events
  addEvent: (event: EventType) => Promise<void>;
  getEventDetails: (eventId: string) => EventType | undefined;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const EventProvider: React.FC<Props> = ({ children }) => {
  const [joinedEvents, setJoinedEvents] = useState<EventType[]>([]);
  const [allEvents, setAllEvents] = useState<EventType[]>([]);

  const joinEvent = (event: EventType) => {
    setJoinedEvents((prev) => {
      return [...prev, event];
    });
  };

  const fetchEvents = useCallback(async () => {
    try {
      const events = await fetchEventsFromFirestore();
      setAllEvents(events);
      return events;
      //const events = fetchEventsFromStaticData(); // Static data example
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  }, []);

  const addEvent = async (event: any) => {
    try {
      await addEventToFirestore(event);
      setAllEvents((prev) => [...prev, event]);
    } catch (error) {
      console.error("Error adding event:", error);
      throw error;
    }
  };

  const getEventDetails = (eventId: string) => {
    const event = allEvents.find((eventRecord) => eventRecord.id === eventId);
    return event;
  };

  const removeEvent = (eventId: string) => {
    setJoinedEvents((prev) => prev.filter((event) => event.id !== eventId));
  };
  return (
    <EventContext.Provider
      value={{
        allEvents,
        joinedEvents,
        joinEvent,
        removeEvent,
        fetchEvents,
        addEvent,
        getEventDetails,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  const context = useContext(EventContext);

  if (!context) {
    throw new Error("useEventContext must be used within an EventProvider");
  }

  return context;
};
