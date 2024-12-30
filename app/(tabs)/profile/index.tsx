import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { AllEvents, EventType } from "@/constants/Data";
import { EventCard, ProfileEventCard } from "@/components/EventCard";

interface ClubType {
  id: string;
  name: string;
  members: number;
}

interface UserType {
  name: string;
  username: string;
  city: string;
  age: number;
  favoriteActivity: string;
  headerImage: any;
  clubs: ClubType[];
  events: EventType[];
}
const user: UserType = {
  name: "Tadej Pogacar",
  username: "@tadej",
  city: "📍San Diego",
  age: 25,
  favoriteActivity: "Cycling",
  headerImage: require("@/assets/images/tadej.png"), // Replace with the actual header image URL
  clubs: [
    { id: "1", name: "Team Best Cycling Club", members: 34 },
    { id: "2", name: "Coastal Run Club", members: 143 },
    { id: "3", name: "Deus Velox Racing", members: 10 },
  ],
  events: [AllEvents[0], AllEvents[1], AllEvents[4]],
};

export default function ProfileScreen() {
  const profilePicUrl = require("@/assets/images/tadej.png");
  const renderClub = ({ item }: { item: ClubType }) => (
    <TouchableOpacity style={styles.clubItem}>
      <Text style={styles.clubName}>{item.name}</Text>
      <Text style={styles.clubMembers}>{item.members} Members</Text>
    </TouchableOpacity>
  );
  const renderEvent = ({ item }: { item: EventType }) => (
    <ThemedView style={{ margin: 10 }}>
      <ProfileEventCard event={item} />
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      <Image source={user.headerImage} style={styles.headerImage} />
      <ThemedView style={styles.profileInfo}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
      </ThemedView>
      <ThemedView style={styles.tagsContainer}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{user.city}</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>🎂 {user.age} Years Old</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>🚴{user.favoriteActivity}</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>🏃 Running </Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>🧘 Yoga</Text>
        </View>
      </ThemedView>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Events</Text>
        <FlatList
          data={user.events}
          renderItem={renderEvent}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Clubs</Text>
        <FlatList
          data={user.clubs}
          renderItem={renderClub}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerImage: {
    width: "100%",
    height: 250,
  },
  profileInfo: {
    alignItems: "center",
    marginTop: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  username: {
    fontSize: 16,
    color: "#888",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    marginBottom: -20,
  },
  tag: {
    backgroundColor: "#505168",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFF",
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  horizontalList: {
    paddingHorizontal: 10,
  },
  clubItem: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    marginHorizontal: 10,
    width: 150, // Adjust as needed
    alignItems: "center",
  },
  clubName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  clubMembers: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 5,
  },
});
