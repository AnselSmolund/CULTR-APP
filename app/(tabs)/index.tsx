import { EventCard, EventCard2 } from "@/components/EventCard";
import { useEventContext } from "@/components/EventContext";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image, StyleSheet, Platform, View, Text } from "react-native";

export default function HomeScreen() {
  const { joinedEvents } = useEventContext();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <View style={styles.headerImage}>
          <Image
            source={require("@/assets/images/tadej3.png")}
            style={styles.headerImage}
          />
        </View>
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Your Events</ThemedText>
      </ThemedView>

      <ThemedView>
        {joinedEvents.map((event, i) => {
          return <EventCard2 event={event} key={i} alreadyJoined={true} />;
        })}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  headerImage: {
    flex: 1,
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});
