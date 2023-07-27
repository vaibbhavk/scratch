import { Stack } from "expo-router";

import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { Text } from "react-native";
import { COLORS } from "../constants";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "#fff",
            headerRight: () => (
              <>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Sign in
                </Text>
              </>
            ),
          }}
        >
          {/* Optionally configure static options outside the route. */}
          <Stack.Screen name="index" options={{}} onLayout={onLayoutRootView} />
        </Stack>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default Layout;
