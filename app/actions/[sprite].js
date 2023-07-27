import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { ACTIONS } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { setActions } from "../redux/spriteSlice";

export default function Actions() {
  const params = useLocalSearchParams();
  const { sprite } = params;

  const dispatch = useDispatch();

  const { bobState, catState } = useSelector((state) => state.sprite);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          headerTitle: (props) => (
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Actions - {sprite === "cat" ? "Cat" : "Bob"}
            </Text>
          ),
        }}
      />

      <View style={styles.container}>
        <View style={styles.codeView}>
          <Text style={styles.codeText}>Code</Text>
          <FlatList
            data={ACTIONS}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  dispatch(
                    setActions({
                      sprite: sprite,
                      value: item,
                    })
                  )
                }
              >
                <Text style={styles.codeListItem}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.actionView}>
          <Text style={styles.actionText}>Action</Text>
          {sprite === "cat" ? (
            <FlatList
              data={catState["actions"]}
              keyExtractor={(item, index) => catState["actions"].length + index}
              renderItem={({ item, index }) => (
                <Text
                  style={styles.codeListItem}
                  key={catState["actions"].length}
                >
                  {item.name}
                </Text>
              )}
            />
          ) : (
            <FlatList
              data={bobState["actions"]}
              keyExtractor={(item, index) => bobState["actions"].length + index}
              renderItem={({ item, index }) => (
                <Text
                  style={styles.codeListItem}
                  key={bobState["actions"].length}
                >
                  {item.name}
                </Text>
              )}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  codeView: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 8,
    marginTop: 8,
    marginBottom: 8,
    paddingHorizontal: 8,
    alignItems: "center",
  },
  actionView: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    margin: 8,
    paddingHorizontal: 8,
    alignItems: "center",
  },
  codeText: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 32,
    color: "blue",
  },
  codeListItem: {
    backgroundColor: "skyblue",
    padding: 16,
    margin: 8,
    fontSize: 16,
    color: "white",
  },
  actionText: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 32,
    color: "green",
  },
});
