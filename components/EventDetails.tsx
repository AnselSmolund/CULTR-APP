import { useEventContext } from "@/components/EventContext";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { EventType } from "@/constants/Data";
import { FontAwesome5 } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import { formatDate } from "date-fns";
import { useSearchParams } from "expo-router/build/hooks";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
} from "react-native";

type RouteParams = {
  id: string;
};
type EventDetailsProp = RouteProp<
  { EventDetailsScreen: RouteParams },
  "EventDetailsScreen"
>;

const attendees = [
  require("@/assets/images/tadej7.jpeg"), // Replace with actual attendee image URLs
  require("@/assets/images/tadej6.jpg"),
  require("@/assets/images/tadej5.jpg"),
  require("@/assets/images/tadej3.png"),
];

export const EventDetails = ({ event }: { event: EventType }) => {
  const headerColors = {
    Advanced: "#F59A23",
    Intermediate: "#FFD700",
    Beginner: "#7FC636",
  };

  if (!event) return <ThemedView> whomp whomp </ThemedView>;
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={{ display: "flex", alignItems: "center", margin: 40 }}>
        <FontAwesome5
          name={event.activityDetails.icon}
          size={80}
          color={headerColors[event.activityDetails.difficulty]}
        />
      </ThemedView>

      <View style={styles.detailsContainer}>
        <ThemedText type="title">{event.title}</ThemedText>
        <ThemedText type="subtitle">
          {formatDate(event.date, "ccc MM/d p")}
        </ThemedText>
        <ThemedText type="defaultSemiBold">📍 {event.location}</ThemedText>
        {/* Tags */}
        <View style={styles.tagsContainer}>
          {event.tags.map((tag, index) => (
            <View
              key={index}
              style={[
                styles.tag,
                {
                  backgroundColor:
                    headerColors[event.activityDetails.difficulty],
                },
              ]}
            >
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
        <ThemedText style={styles.description} type="default">
          {"Join us for this amazing event. Fun will be had."}
        </ThemedText>
      </View>

      {/* Attendees */}
      <View style={styles.attendeesContainer}>
        <Text style={styles.sectionTitle}>ATTENDEES</Text>
        <View style={styles.attendees}>
          {attendees.map((attendee, index) => (
            <Image key={index} source={attendee} style={styles.attendeeImage} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    padding: 10,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  headerImage: {
    flex: 1,
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  mapImage: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  rideType: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#888",
  },
  dateTime: {
    fontSize: 30,
    marginVertical: 5,
    color: "#000",
  },
  location: {
    fontSize: 14,
    marginVertical: 5,
    color: "#666",
  },
  description: {
    fontSize: 14,
    marginVertical: 10,
    color: "#000",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  tag: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
  },
  attendeesContainer: {
    padding: 15,
  },
  attendees: {
    flexDirection: "row",
    marginTop: 10,
  },
  attendeeImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});
