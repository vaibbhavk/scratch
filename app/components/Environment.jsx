import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { bob, cat } from "../../constants";
import { useImage, Image, Canvas } from "@shopify/react-native-skia";

const Environment = () => {
  const { bobState, catState } = useSelector((state) => state.sprite);

  useEffect(() => {
    return () => {};
  }, []);

  const bob = useImage(require("../../assets/images/bob.png"));
  const cat = useImage(require("../../assets/images/cat.png"));

  return (
    <Canvas style={styles.container}>
      {cat && catState.using && (
        <Image
          image={cat}
          fit="contain"
          x={catState.x}
          y={catState.y}
          width={50}
          height={50}
        />
      )}
      {bob && bobState.using && (
        <Image
          image={bob}
          fit="contain"
          x={bobState.x}
          y={bobState.y}
          width={50}
          height={50}
        />
      )}
    </Canvas>
  );
};

export default Environment;

const styles = StyleSheet.create({
  container: {
    height: "60%",
    backgroundColor: "white",
    marginTop: 8,
    marginRight: 8,
    marginLeft: 8,
    flex: 1,
  },

  sprite: {
    position: "absolute",
    top: "50%",
    right: "50%",
  },
});
