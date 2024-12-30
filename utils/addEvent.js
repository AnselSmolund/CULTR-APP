import { collection, setDoc, doc } from "firebase/firestore";
import { firestore } from "../config/firebaseConfig"; // Adjust the path to your firebaseConfig file
import { AllEvents } from "../constants/Data";

export const addEventToFirestore = async (event) => {
  try {
    const eventsCollection = collection(firestore, "events");
    const eventDoc = doc(eventsCollection, event.id); // Use event.id for consistent document ID
    await setDoc(eventDoc, {
      ...event,
      createdAt: new Date().toISOString(), // Optional: Add a timestamp
    });
    console.log("Event added successfully!");
  } catch (error) {
    console.error("Error adding event:", error);
    throw error;
  }
};
