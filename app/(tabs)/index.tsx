import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  useWindowDimensions,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const appWidth = useWindowDimensions().width;
  const appHeight = useWindowDimensions().height;
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: appWidth > 500 ? "70%" : "90%",
            height: appHeight > 600 ? "60%" : "90%",
          },
        ]}
      >
        <Text style={styles.text}>Dynamic UI</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "plum",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: 300,
    width: 300,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {},
});
