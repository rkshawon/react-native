import { Image, Platform, StyleSheet, Text, View } from "react-native";

const PokemonCard = ({ name, image, type, hp, moves, weaknesess }: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.view}>
        <Text style={styles.name}>Name:{name}</Text>
        <Text style={styles.name}>HP:{hp}</Text>
      </View>
      <Image source={image} accessibilityLabel="image" style={styles.iamge} />
      <View>
        <Text style={styles.others}>Type: {type}</Text>
      </View>
      <View>
        <Text style={styles.others}>Moves: {moves.join(",")}</Text>
      </View>
      <View>
        <Text style={styles.others}>Weaknesess: {weaknesess.join(",")}</Text>
      </View>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  view: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  others: {
    fontSize: 20,
    fontWeight: "bold",
  },
  iamge: {
    height: 100,
    width: 100,
    alignSelf: "center",
    margin: 15,
  },
});
