import { SafeAreaView, StyleSheet, ScrollView } from "react-native";

import PokemonCard from "@/components/PokemonCard";

export default function HomeScreen() {
  const pokoData = {
    name: "Poko",
    image: require("../../assets/images/favicon.png"),
    type: "white",
    hp: 23,
    moves: ["move1", "Move2", "Move3"],
    weaknesess: ["weaknesess1", "weaknesess2", "weaknesess3"],
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...pokoData} />
        <PokemonCard {...pokoData} />
        <PokemonCard {...pokoData} />
        <PokemonCard {...pokoData} />
        <PokemonCard {...pokoData} />
      </ScrollView>
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
