import { Button, Text, Image } from "react-native";
import logo from "../assets/logo.png";
import { useState } from "react";

import { Stack, useRouter } from "expo-router";
import Environment from "./components/Environment";
import SpritesAndCoords from "./components/SpritesAndCoords";
import SpriteView from "./components/SpriteView";

const LogoTitle = () => {
  return <Image source={logo} />;
};

export default function Home() {
  const router = useRouter();
  const [count, setCount] = useState(0);

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      <Environment />
      <SpritesAndCoords />
      <SpriteView />
    </>
  );
}
