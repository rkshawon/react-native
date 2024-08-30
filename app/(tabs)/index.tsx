import { SafeAreaView, StyleSheet, ScrollView, View, Text } from "react-native";

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
      <View style={styles.cardView}>
        <Text style={styles.button}>label</Text>
        <Text style={styles.button}>label</Text>
        <Text style={styles.button}>label</Text>
        <View></View>
      </View>
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
  cardView: {
    height: 200,
    width: 200,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  cardText: {},
  cardStyle: {},
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "lightgray",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    minWidth: "48%",
    textAlign: "center",
    fontSize: 25,
  },
});
