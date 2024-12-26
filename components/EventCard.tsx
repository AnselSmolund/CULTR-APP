import { EventType } from "@/constants/Data";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { formatDate } from "date-fns";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Button,
} from "react-native";
import { useEventContext } from "./EventContext";

export const EventCard: React.FC<{
  event: EventType;
  alreadyJoined: boolean;
}> = ({ event, alreadyJoined }) => {
  const { joinEvent } = useEventContext();

  return (
    <View style={styles.card}>
      <Image source={event.coverImage} style={styles.mapImage} />

      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.title}>{event.title}</Text>
          <View style={styles.organizer}>
            <Image source={event.organizer.avatar} style={styles.avatar} />
            <Text style={styles.organizerName}>{event.organizer.name}</Text>
          </View>
        </View>
        <Text style={styles.dateTime}>
          {event.date} • {event.time}
        </Text>
        <Text style={styles.location}>{event.location}</Text>

        {/* Tags */}
        <View style={styles.tagsContainer}>
          {event.tags.map((tag: any, index: number) => (
            <TouchableOpacity key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {!alreadyJoined && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => joinEvent(event)}
          >
            <Text style={styles.buttonText}>Join</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const EventCard2: React.FC<{
  event: EventType;
  alreadyJoined: boolean;
}> = ({ event, alreadyJoined }) => {
  const { joinEvent, removeEvent } = useEventContext();

  const difficultyStyle = {
    ["Beginner"]: styles2.beginnerLabel,
    ["Intermediate"]: styles2.intermediateLabel,
    ["Advanced"]: styles2.advancedLabel,
  };

  const eventDate = new Date(event.date);

  return (
    <View style={styles2.card}>
      <View style={styles2.leftSection}>
        <FontAwesome5
          name={event.activityDetails.icon}
          size={24}
          color="#333"
        />
        <View style={styles2.labels}>
          <Text style={difficultyStyle[event.activityDetails.difficulty]}>
            {event.activityDetails.difficulty}
          </Text>
          <Text
            style={styles2.averageAgeLabel}
          >{`AVG AGE ${event.avgAge}`}</Text>
        </View>
      </View>

      <View style={styles2.detailsSection}>
        <Text style={styles2.title}>{event.clubDetails.name}</Text>
        <Text style={styles2.subtitle}>{event.title}</Text>
        <Text style={styles2.location}>📍 {event.location}</Text>
        <Text style={styles2.dateTime}>
          {formatDate(eventDate, "ccc MM/d p")}
        </Text>
      </View>

      <View style={styles2.rightSection}>
        <TouchableOpacity
          onPress={() =>
            alreadyJoined ? removeEvent(event.id) : joinEvent(event)
          }
        >
          {alreadyJoined ? (
            <FontAwesome name={"bookmark"} size={24} color="#333" />
          ) : (
            <FontAwesome name={"bookmark-o"} size={24} color="#333" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefce8",
    padding: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Android shadow
    width: "100%",
    maxWidth: 400,
  },
  mapImage: {
    width: "100%",
    height: 200,
  },
  cardContent: {
    padding: 15,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
    marginRight: 10,
  },
  organizer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  organizerName: {
    fontSize: 14,
    color: "#555",
  },
  dateTime: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: "#777",
    marginBottom: 10,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "#505168",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3, // Android shadow
  },
  tagText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFF",
  },
  button: {
    backgroundColor: "#505168",
    paddingVertical: 10,
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
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFF", // Black text
  },
});

const styles2 = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#ddd",
    width: "100%",
  },
  leftSection: {
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  detailsSection: {
    flex: 1,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginRight: 3,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  location: {
    fontSize: 12,
    color: "#000",
    marginBottom: 2,
  },
  dateTime: {
    fontSize: 12,
    color: "#000",
  },
  rightSection: {
    marginTop: 4,
  },
  labels: {
    marginBottom: 10,
  },
  advancedLabel: {
    backgroundColor: "#F59A23",
    color: "#000",
    fontSize: 10,
    fontWeight: "bold",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
    textAlign: "center",
    marginBottom: 5,
  },
  intermediateLabel: {
    backgroundColor: "#FFD700",
    color: "#000",
    fontSize: 10,
    fontWeight: "bold",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
    textAlign: "center",
    marginBottom: 5,
  },
  beginnerLabel: {
    backgroundColor: "#7FC636",
    color: "#000",
    fontSize: 10,
    fontWeight: "bold",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
    textAlign: "center",
    marginBottom: 5,
  },
  averageAgeLabel: {
    backgroundColor: "#D3D3D3",
    color: "#333",
    fontSize: 10,
    fontWeight: "bold",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
    textAlign: "center",
  },
});
