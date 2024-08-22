import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const appWidth = useWindowDimensions().width;
  const appHeight = useWindowDimensions().height;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Safe Area View</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    backgroundColor: "plum",
    flex: 1,
    paddingTop: 20,
  },
  box: {
    padding: 20,
  },
  text: {
    fontWeight: "bold",
  },
});
