import { View, Text } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

export default function Details() {
  const router = useRouter();
  //   const params = useLocalSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen />
      <Text>Update the title</Text>
    </View>
  );
}
