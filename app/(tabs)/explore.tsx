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
import { AllEvents, EventType } from "@/constants/Data";
import { useEventContext } from "@/components/EventContext";
import { isToday, isTomorrow } from "date-fns";

export default function ExploreScreen() {
  const { joinedEvents } = useEventContext();

  const { Today, Tomorrow, Upcoming } = groupActivitiesByDate(AllEvents);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <View style={styles.headerImage}>
          <Image
            source={require("@/assets/images/header.png")}
            style={styles.headerImage}
          />
        </View>
      }
      headerHeight={100}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Events Near You</ThemedText>
      </ThemedView>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          flexBasis: "auto",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <ThemedText type="subtitle">Today</ThemedText>
        {Today.map((event, i) => {
          return (
            <EventCard2
              event={event}
              key={i}
              alreadyJoined={joinedEvents.includes(event)}
            />
          );
        })}
        <ThemedText type="subtitle">Tomorrow</ThemedText>
        {Tomorrow.map((event, i) => {
          return (
            <EventCard2
              event={event}
              key={i}
              alreadyJoined={joinedEvents.includes(event)}
            />
          );
        })}
        <ThemedText type="subtitle">Upcoming</ThemedText>
        {Upcoming.map((event, i) => {
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

const groupActivitiesByDate = (activities: EventType[]) => {
  const grouped: {
    Today: EventType[];
    Tomorrow: EventType[];
    Upcoming: EventType[];
  } = {
    Today: [],
    Tomorrow: [],
    Upcoming: [],
  };

  activities.forEach((activity: EventType) => {
    const activityDate = new Date(activity.date);

    if (isToday(activityDate)) {
      grouped.Today.push(activity);
    } else if (isTomorrow(activityDate)) {
      grouped.Tomorrow.push(activity);
    } else {
      grouped.Upcoming.push(activity);
    }
  });

  return grouped;
};

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
