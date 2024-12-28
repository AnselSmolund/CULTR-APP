import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useSearchParams } from "expo-router/build/hooks";
import { Image, StyleSheet, Platform, View, Text } from "react-native";

export default function EventDetails() {
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
        <ThemedText type="title">More Details</ThemedText>
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
