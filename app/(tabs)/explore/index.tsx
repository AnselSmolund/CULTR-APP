import { StyleSheet, Image, View, ActivityIndicator } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { EventCard } from "@/components/EventCard";
import { AllEvents, EventType } from "@/constants/Data";
import { useEventContext } from "@/components/EventContext";
import { isPast, isToday, isTomorrow } from "date-fns";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

interface GroupedEvents {
  Past: EventType[];
  Today: EventType[];
  Tomorrow: EventType[];
  Upcoming: EventType[];
}
export default function ExploreScreen() {
  const { fetchEvents, joinedEvents } = useEventContext();
  const [visibleEvents, setVisibleEvents] = useState<GroupedEvents | undefined>(
    undefined
  );

  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true);
      try {
        await fetchEvents().then((data) => {
          if (data) {
            const groupedEvents = groupActivitiesByDate(data);
            setVisibleEvents(groupedEvents);
          }
        });
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, [fetchEvents]);

  if (loading || !visibleEvents) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

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
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Events Near You</ThemedText>
      </ThemedView>
      {Object.entries(visibleEvents).map(([group, events], i) => {
        return (
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              flexBasis: "auto",
              flexWrap: "wrap",
              gap: 10,
            }}
            key={i}
          >
            <ThemedText type="subtitle">{group}</ThemedText>
            {events.map((event: EventType, i: number) => (
              <EventCard
                event={event}
                key={`${group}-${i}`} // Use a unique key based on group and index
                alreadyJoined={joinedEvents.includes(event)}
              />
            ))}
          </View>
        );
      })}
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
