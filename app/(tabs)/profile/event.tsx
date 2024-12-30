import { useEventContext } from "@/components/EventContext";
import { EventDetails } from "@/components/EventDetails";
import { ThemedView } from "@/components/ThemedView";
import { RouteProp, useRoute } from "@react-navigation/native";

type RouteParams = {
  id: string;
};
type EventDetailsProp = RouteProp<
  { EventDetailsScreen: RouteParams },
  "EventDetailsScreen"
>;

export default function EventDetailsScreen() {
  const route = useRoute<EventDetailsProp>();
  const { getEventDetails } = useEventContext();

  // Access the parameters
  const { id } = route.params;

  const event = getEventDetails(id);

  if (!event) return <ThemedView> whomp whomp </ThemedView>;
  return <EventDetails event={event} />;
}
