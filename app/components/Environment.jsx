import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useImage, Canvas } from "@shopify/react-native-skia";
import SpriteImage from "./SpriteImage";

const Environment = () => {
  const { bobState, catState } = useSelector((state) => state.sprite);

  const bob = useImage(require("../../assets/images/bob.png"));
  const cat = useImage(require("../../assets/images/cat.png"));

  return (
    <Canvas style={styles.container}>
      {cat && catState.using && (
        <SpriteImage sprite={cat} spriteState={catState} />
      )}
      {bob && bobState.using && (
        <SpriteImage sprite={bob} spriteState={bobState} />
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
