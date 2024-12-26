import { EventType } from "@/constants/Data";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Button,
} from "react-native";
import { useEventContext } from "./EventContext";
import { IconSymbol } from "./ui/IconSymbol";

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

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ display: "flex", flexDirection: "column" }}>
            <IconSymbol name={event.activityDetails.icon} color="#505168" />
            <TouchableOpacity style={styles.tag}>
              <Text style={styles.tagText}>{event.tags[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tag}>
              <Text style={styles.tagText}>{event.avgAge}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text style={styles.title}>{event.clubDetails.name}</Text>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.location}>{event.location}</Text>
            <Text style={styles.dateTime}>
              {event.date} • {event.time}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              alreadyJoined ? removeEvent(event.id) : joinEvent(event)
            }
          >
            {alreadyJoined ? (
              <IconSymbol name="bookmark.fill" color="#505168" />
            ) : (
              <IconSymbol name="bookmark" color="#505168" />
            )}
          </TouchableOpacity>
        </View>
        {/* Tags */}
        <View style={styles.tagsContainer}>
          {event.tags.map((tag: any, index: number) => (
            <TouchableOpacity key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
