import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { COLORS } from "../../constants";

const SpritesAndCoords = () => {
  const { bobState, catState } = useSelector((state) => state.sprite);

  return (
    <View style={styles.container}>
      {catState.using && (
        <View style={styles.spriteView}>
          <View style={styles.sprite}>
            <Text>Sprite:&nbsp;</Text>
            <Text style={styles.text}>Cat</Text>
          </View>
          <View style={styles.sprite}>
            <Text>x:&nbsp;</Text>
            <Text style={styles.text}>{catState.x - 175}</Text>
          </View>
          <View style={styles.sprite}>
            <Text>y:&nbsp;</Text>
            <Text style={styles.text}>{catState.y - 175}</Text>
          </View>
        </View>
      )}

      {bobState.using && (
        <View style={styles.spriteView}>
          <View style={styles.sprite}>
            <Text>Sprite:&nbsp;</Text>
            <Text style={styles.text}>Bob</Text>
          </View>
          <View style={styles.sprite}>
            <Text>x:&nbsp;</Text>
            <Text style={styles.text}>{bobState.x - 175}</Text>
          </View>
          <View style={styles.sprite}>
            <Text>y:&nbsp;</Text>
            <Text style={styles.text}>{bobState.y - 175}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default SpritesAndCoords;

const styles = StyleSheet.create({
  container: {
    height: "15%",
    backgroundColor: "white",
    marginTop: 8,
    marginRight: 8,
    marginLeft: 8,
    justifyContent: "space-around",
    padding: 8,
  },
  sprite: {
    flexDirection: "row",
    alignItems: "center",
  },
  spriteView: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 20,
  },
});
