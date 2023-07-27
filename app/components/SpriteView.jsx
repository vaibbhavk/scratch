import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants";
import bob from "../../assets/images/bob.png";
import cat from "../../assets/images/cat.png";
import { useDispatch, useSelector } from "react-redux";
import { setUsing } from "../redux/spriteSlice";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SpriteView = () => {
  const { bobState, catState } = useSelector((state) => state.sprite);
  const dispatch = useDispatch();

  const router = useRouter();

  return (
    <View style={styles.container}>
      {catState.using && (
        <View>
          <MaterialIcons
            style={styles.deleteIcon}
            name="delete-forever"
            size={35}
            color={COLORS.primary}
            onPress={() =>
              dispatch(
                setUsing({
                  value: false,
                  sprite: "cat",
                })
              )
            }
          />

          <View style={styles.spriteView}>
            <Image source={cat} style={styles.image} />

            <TouchableOpacity style={styles.button}>
              <Text
                style={{ color: "white" }}
                onPress={() => router.push("/actions/cat")}
              >
                Add actions
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {bobState.using && (
        <View>
          <MaterialIcons
            style={styles.deleteIcon}
            name="delete-forever"
            size={35}
            color={COLORS.primary}
            onPress={() =>
              dispatch(
                setUsing({
                  value: false,
                  sprite: "bob",
                })
              )
            }
          />
          <View style={styles.spriteView}>
            <Image source={bob} style={styles.image} />

            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/actions/bob")}
            >
              <Text style={{ color: "white" }}>Add actions</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {(!catState.using || !bobState.using) && (
        <View>
          <View style={styles.addView}>
            <Ionicons
              name="add"
              size={80}
              color={COLORS.primary}
              onPress={() =>
                dispatch(
                  setUsing({
                    value: true,
                    sprite: catState.using ? "bob" : "cat",
                  })
                )
              }
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default SpriteView;

const styles = StyleSheet.create({
  container: {
    height: "20%",
    backgroundColor: "white",
    marginTop: 8,
    marginRight: 8,
    marginLeft: 8,
    flexDirection: "row",
  },
  spriteView: {
    margin: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  addView: {
    margin: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  button: {
    height: 30,
    padding: 4,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  deleteIcon: {
    position: "absolute",
    right: -2,
    top: -3,
  },
});
