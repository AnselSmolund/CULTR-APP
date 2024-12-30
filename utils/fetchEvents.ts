import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { firestore } from "../config/firebaseConfig";
import { AllEvents, EventType } from "@/constants/Data";

// export const fetchEvents = async () => {
//   try {
//     const eventsRef = collection(firestore, "events");
//     const q = query(eventsRef, orderBy("date", "asc")); // Fetch events ordered by date
//     const querySnapshot = await getDocs(q);

//     const events = [];
//     querySnapshot.forEach((doc) => {
//       events.push({ id: doc.id, ...doc.data() });
//     });

//     return events;
//   } catch (error) {
//     console.error("Error fetching events:", error);
//     throw error;
//   }
// };

export const fetchEventsFromFirestore = async () => {
  const eventsCollection = collection(firestore, "events");
  const querySnapshot = await getDocs(eventsCollection);

  const events: EventType[] = [];
  querySnapshot.forEach((doc) => {
    const event = doc.data() as EventType;
    events.push(event);
  });

  return events;
};

export const fetchEventsFromStaticData = () => {
  return AllEvents;
};
