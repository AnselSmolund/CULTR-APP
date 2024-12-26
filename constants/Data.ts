import { IconSymbolName } from "@/components/ui/IconSymbol";

type ActivityType = "Cycling" | "Running" | "Yoga" | "Surfing" | "Social";

interface OrganizerType {
  name: string;
  avatar: any;
}

export interface EventType {
  id: string;
  clubDetails: {
    id: string;
    name: string;
  };
  title: string;
  date: string;
  time: string;
  location: string;
  avgAge: number;
  activityDetails: {
    type: ActivityType;
    terrain?: "Road" | "Gravel";
    distance?: number;
    elevation?: number;
    icon: IconSymbolName;
  };
  coverImage: any;
  organizer: OrganizerType;
  tags: string[];
}

export const AllEvents: EventType[] = [
  {
    id: "1",
    clubDetails: {
      id: "123",
      name: "Team Best Cycling Club",
    },
    title: "Thunder Thursday",
    date: "12-28-2024",
    time: "05:15 PM",
    location: "Best Pizza & Brew",
    avgAge: 28,
    activityDetails: {
      type: "Cycling",
      terrain: "Road",
      distance: 27,
      elevation: 1790,
      icon: "bicycle",
    },
    coverImage: require("@/assets/images/best.png"),
    organizer: {
      name: "Tadej Pogecar",
      avatar: require("@/assets/images/tadej-headshot.png"),
    },
    tags: ["A", "ROAD", "27 MI", "1790 FT"],
  },
  {
    id: "2",
    clubDetails: {
      id: "123",
      name: "Team Best Cycling Club",
    },
    title: "Rancho Santa Fe Spin",
    date: "12-30-2024",
    time: "06:30 AM",
    location: "Cadence Cyclery",
    avgAge: 28,
    activityDetails: {
      type: "Cycling",
      terrain: "Road",
      distance: 40,
      elevation: 2303,
      icon: "bicycle",
    },
    coverImage: require("@/assets/images/best.png"),
    organizer: {
      name: "Tadej Pogecar",
      avatar: require("@/assets/images/tadej-headshot.png"),
    },
    tags: ["B", "ROAD", "40 MI", "2303 FT"],
  },
  {
    id: "3",
    clubDetails: {
      id: "123",
      name: "Team Best Cycling Club",
    },
    title: "Hay In The Barn",
    date: "12-31-2024",
    time: "06:00 AM",
    location: "Jamul Petco",
    avgAge: 28,
    activityDetails: {
      type: "Cycling",
      terrain: "Road",
      distance: 101,
      elevation: 7900,
      icon: "bicycle",
    },
    coverImage: require("@/assets/images/tadej5.jpg"),
    organizer: {
      name: "Tadej Pogecar",
      avatar: require("@/assets/images/tadej-headshot.png"),
    },
    tags: ["A", "ROAD", "101 MI", "7900 FT"],
  },
  {
    id: "4",
    clubDetails: {
      id: "456",
      name: "Coastal Run Club",
    },
    title: "Holiday 5K",
    date: "12-27-2024",
    time: "09:00 AM",
    location: "Lofty Coffee",
    avgAge: 25,
    activityDetails: {
      type: "Running",
      terrain: "Road",
      distance: 7,
      icon: "figure.roll.runningpace",
    },
    coverImage: require("@/assets/images/crc.png"),
    organizer: {
      name: "Tadej Pogecar",
      avatar: require("@/assets/images/tadej-headshot.png"),
    },
    tags: ["C", "RUN", "7 MI"],
  },
];
