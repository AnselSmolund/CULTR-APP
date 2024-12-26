import { IconSymbolName } from "@/components/ui/IconSymbol";

type ActivityType =
  | "Cycling"
  | "Running"
  | "Swimming"
  | "Yoga"
  | "Surfing"
  | "Social";

interface OrganizerType {
  name: string;
  avatar?: any;
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
    terrain?: string;
    distance?: number;
    elevation?: number;
    icon: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
  };
  coverImage?: any;
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
    date: "2024-12-26T17:15",
    time: "05:15 PM",
    location: "Best Pizza & Brew",
    avgAge: 28,
    activityDetails: {
      type: "Cycling",
      terrain: "Road",
      distance: 27,
      elevation: 1790,
      icon: "bicycle",
      difficulty: "Advanced",
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
    date: "2024-12-27T06:30:00",
    time: "06:30 AM",
    location: "Cadence Cyclery",
    avgAge: 28,
    activityDetails: {
      type: "Cycling",
      terrain: "Road",
      distance: 40,
      elevation: 2303,
      icon: "bicycle",
      difficulty: "Intermediate",
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
    date: "2024-12-31T06:00:00",
    time: "06:00 AM",
    location: "Jamul Petco",
    avgAge: 28,
    activityDetails: {
      type: "Cycling",
      terrain: "Road",
      distance: 101,
      elevation: 7900,
      icon: "bicycle",
      difficulty: "Advanced",
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
    date: "2024-12-27T09:00:00",
    time: "09:00 AM",
    location: "Lofty Coffee",
    avgAge: 25,
    activityDetails: {
      type: "Running",
      terrain: "Road",
      distance: 7,
      icon: "running",
      difficulty: "Beginner",
    },
    coverImage: require("@/assets/images/crc.png"),
    organizer: {
      name: "Tadej Pogecar",
      avatar: require("@/assets/images/tadej-headshot.png"),
    },
    tags: ["C", "RUN", "7 MI"],
  },
  {
    id: "8",
    clubDetails: {
      id: "741",
      name: "La Jolla Swim Club",
    },
    title: "Morning Swim",
    date: "2024-12-29T06:00:00",
    time: "06:00 AM",
    location: "Lakeside Park",
    avgAge: 27,
    activityDetails: {
      type: "Swimming",
      terrain: "Water",
      distance: 12,
      icon: "swimmer",
      difficulty: "Advanced",
    },
    organizer: {
      name: "Anna White",
    },
    tags: ["A", "TRI", "12 MI"],
  },
];
