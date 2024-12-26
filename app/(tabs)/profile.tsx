import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function ProfileScreen() {
  const [fullName, setFullName] = useState("Tadej Pogacar");
  const [location, setLocation] = useState("San Diego, CA");

  const [birthday, setBirthday] = useState<Date | undefined>(undefined);
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setBirthday(selectedDate);
    }
  };

  const [bio, setBio] = useState("");

  const handleSave = () => {
    alert("Profile Saved!");
  };

  const handleLogout = () => {
    alert("Logged Out!");
  };

  const profilePicUrl = require("@/assets/images/tadej.png");
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
        headerImage={
          <View style={styles.headerImage}>
            <Image source={profilePicUrl} style={styles.headerImage} />
          </View>
        }
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Profile</ThemedText>
        </ThemedView>
        <View style={styles.formSection}>
          <Text style={styles.sectionHeader}>Name</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Full Name"
          />
        </View>
        <View style={styles.formSection}>
          <Text style={styles.sectionHeader}>City</Text>
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={setLocation}
            placeholder="Your Location"
          />
        </View>
        <View style={styles.formSection}>
          <Text style={styles.sectionHeader}>Bio</Text>
          <TextInput
            style={styles.input}
            value={bio}
            onChangeText={setBio}
            placeholder="About Yourself"
          />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.sectionHeader}>Birthday</Text>
          <TouchableOpacity
            style={styles.dateInput}
            onPress={() => setShowPicker(!showPicker)}
          >
            <Text style={styles.dateText}>
              {birthday
                ? birthday.toLocaleDateString("en-us")
                : "Select your birthday"}
            </Text>
          </TouchableOpacity>

          {showPicker && (
            <DateTimePicker
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              value={birthday || new Date(2000, 0, 1)}
              onChange={(event, date) => {
                handleDateChange(event, date);
              }}
            />
          )}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </ParallaxScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefce8", // Light cream color
    padding: 20,
  },
  headerImage: {
    flex: 1, // Allows the image to grow and fill its parent
    width: "100%", // Ensures the width matches the parent
    height: 200, // Set a fixed height (can also use flex)
    resizeMode: "cover", // Ensures the image covers the container
  },
  scrollContent: {
    padding: 20,
  },
  profileSection: {
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    marginTop: 20,
  },
  formSection: {
    display: "flex",
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#222",
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  dateInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  bioInput: {
    height: 80,
  },
  dateText: {
    fontSize: 16,
    color: "#333",
  },
  buttonSection: {
    marginTop: 30,
    marginBottom: 100,
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 10,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#FF5252",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  dropdownContainer: {
    marginBottom: 15,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderRadius: 10,
    height: 50,
  },
  dropdownMenu: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#D4A017",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000", // Black text
  },
});
