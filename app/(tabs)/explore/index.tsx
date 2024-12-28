import { StyleSheet, Image, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { EventCard } from "@/components/EventCard";
import { AllEvents, EventType } from "@/constants/Data";
import { useEventContext } from "@/components/EventContext";
import { isPast, isToday, isTomorrow } from "date-fns";
import { useRouter } from "expo-router";

export default function ExploreScreen() {
  const { joinedEvents } = useEventContext();

  const { Today, Tomorrow, Upcoming, Past } = groupActivitiesByDate(AllEvents);
  const router = useRouter();

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
        <ThemedText type="subtitle">Past</ThemedText>
        {Past.map((event, i) => {
          return (
            <EventCard
              event={event}
              key={i}
              alreadyJoined={joinedEvents.includes(event)}
            />
          );
        })}
        <ThemedText type="subtitle">Today</ThemedText>
        {Today.map((event, i) => {
          return (
            <EventCard
              event={event}
              key={i}
              alreadyJoined={joinedEvents.includes(event)}
            />
          );
        })}

        <ThemedText type="subtitle">Tomorrow</ThemedText>
        {Tomorrow.map((event, i) => {
          return (
            <EventCard
              event={event}
              key={i}
              alreadyJoined={joinedEvents.includes(event)}
            />
          );
        })}
        <ThemedText type="subtitle">Upcoming</ThemedText>
        {Upcoming.map((event, i) => {
          return (
            <EventCard
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
    Past: EventType[];
    Today: EventType[];
    Tomorrow: EventType[];
    Upcoming: EventType[];
  } = {
    Past: [],
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
    } else if (isPast(activityDate)) {
      grouped.Past.push(activity);
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
