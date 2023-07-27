import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity } from "react-native";
import logo from "../assets/logo.png";

import { Stack } from "expo-router";
import Environment from "./components/Environment";
import SpritesAndCoords from "./components/SpritesAndCoords";
import SpriteView from "./components/SpriteView";
import { useDispatch, useSelector } from "react-redux";
import { setInitial, setX, setY } from "./redux/spriteSlice";

const LogoTitle = () => {
  return <Image source={logo} />;
};

export default function Home() {
  const { bobState, catState } = useSelector((state) => state.sprite);

  const dispatch = useDispatch();

  const play = () => {
    for (a in bobState["actions"]) {
      if (bobState["actions"][a].id === "move_x_50") {
        dispatch(
          setX({
            sprite: "bob",
            value: 50,
          })
        );
      }
    }

    for (a in catState["actions"]) {
      if (catState["actions"][a].id === "move_x_50") {
        dispatch(
          setX({
            sprite: "cat",
            value: 50,
          })
        );
      }
    }
  };

  const reset = () => {
    dispatch(setInitial());
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      <TouchableOpacity
        onPress={play}
        style={{ position: "absolute", top: -8, right: -8, zIndex: 2 }}
      >
        <MaterialIcons name="play-arrow" size={75} color="green" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={reset}
        style={{ position: "absolute", bottom: 8, right: 0, zIndex: 2 }}
      >
        <MaterialCommunityIcons name="reload" size={50} color="blue" />
      </TouchableOpacity>
      <Environment />
      <SpritesAndCoords />
      <SpriteView />
    </>
  );
}
