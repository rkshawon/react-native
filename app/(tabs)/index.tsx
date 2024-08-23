import { SafeAreaView, StyleSheet, View } from "react-native";

import PokemonCard from "@/components/PokemonCard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    paddingTop: 50,
  },
});
