import { AllEvents, EventType } from "@/constants/Data";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface EventContextType {
  joinedEvents: EventType[];
  joinEvent: (event: EventType) => void;
  removeEvent: (eventId: string) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const EventProvider: React.FC<Props> = ({ children }) => {
  const [joinedEvents, setJoinedEvents] = useState<EventType[]>([]);

  const joinEvent = (event: EventType) => {
    setJoinedEvents((prev) => {
      return [...prev, event];
    });
  };

  const removeEvent = (eventId: string) => {
    setJoinedEvents((prev) => prev.filter((event) => event.id !== eventId));
  };
  return (
    <EventContext.Provider value={{ joinedEvents, joinEvent, removeEvent }}>
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
