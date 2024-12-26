import {
  StyleSheet,
  Image,
  Platform,
  View,
  FlatList,
  Text,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { EventCard, EventCard2 } from "@/components/EventCard";
import { AllEvents } from "@/constants/Data";
import { useEventContext } from "@/components/EventContext";

export default function ExploreScreen() {
  const { joinedEvents } = useEventContext();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <View style={styles.headerImage}>
          <Image
            source={require("@/assets/images/tadej4.png")}
            style={styles.headerImage}
          />
        </View>
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Events Near You</ThemedText>
      </ThemedView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexBasis: "auto",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        {AllEvents.map((event, i) => {
          return (
            <EventCard2
              event={event}
              key={i}
              alreadyJoined={joinedEvents.includes(event)}
            />
          );
        })}
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  listContent: {
    paddingBottom: 20,
  },
  headerImage: {
    flex: 1,
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});
