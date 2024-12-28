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
  Button,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";

const profilePicUrl = require("@/assets/images/tadej.png");

export default function WelcomeScreen() {
  const router = useRouter();

  const navigateToNextScreen = () => {
    router.push("/onboarding/features");
  };

  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ThemedText type="title">Welcom to CULTR!</ThemedText>
      <Button title="Next" onPress={navigateToNextScreen} />
    </ThemedView>
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
});
