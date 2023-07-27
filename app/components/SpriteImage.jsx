import { Image } from "@shopify/react-native-skia";

const SpriteImage = ({ sprite, spriteState }) => {
  return (
    <Image
      image={sprite}
      fit="contain"
      x={spriteState.x}
      y={spriteState.y}
      width={50}
      height={50}
    />
  );
};

export default SpriteImage;
