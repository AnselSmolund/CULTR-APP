import { EventType } from "@/constants/Data";
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Platform,
} from "react-native";
import { useEventContext } from "../../../components/EventContext";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddEventScreen: React.FC = () => {
  const { addEvent } = useEventContext();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const [date, setDate] = useState<Date | null>(null);

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false); // Close the picker
    if (selectedDate) {
      setDate(selectedDate); // Update the date state
    }
  };

  const handleAddEvent = async () => {
    if (!title || !location || !date) {
      Alert.alert("Error", "Please fill in all fields and select a date.");
      return;
    }

    const newEvent: EventType = {
      id: Date.now().toString(), // Generate a unique ID
      title,
      date: date.toISOString(),
      location,
      clubDetails: { id: "123", name: "Team Best Cycling Club" },
      activityDetails: {
        type: "Cycling",
        terrain: "Road",
        distance: 30,
        difficulty: "Intermediate",
        icon: "bicycle",
      },
      tags: ["Cycling", "30 MI"],
      time: "5",
      avgAge: 20,
    };

    try {
      await addEvent(newEvent);
      Alert.alert("Success", "Event added successfully!");
    } catch (error) {
      console.error("Error adding event:", error);
      Alert.alert("Error", "Failed to add event.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <Button
        title={date ? date.toLocaleString() : "Select Date and Time"}
        onPress={() => setShowDatePicker(true)}
      />
      {showDatePicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="datetime"
          display={Platform.OS === "ios" ? "inline" : "default"}
          onChange={handleDateChange}
        />
      )}
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />
      <Button title="Add Event" onPress={handleAddEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

export default AddEventScreen;
