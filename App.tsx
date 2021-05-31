import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "./src/Routes";
import Examples from "./src/Examples";
import { LoadAssets } from "./src/components";
import Bedtime from "./src/Bedtime";
import Darkroom from "./src/Darkroom";

const fonts = {
  "SFProRounded-Semibold": require("./assets/fonts/SFProRounded/SF-Pro-Rounded-Semibold.otf"),
  "SFProRounded-Medium": require("./assets/fonts/SFProRounded/SF-Pro-Rounded-Medium.otf"),
};

const Stack = createStackNavigator<Routes>();
const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Examples"
      component={Examples}
      options={{
        title: "React Native",
      }}
    />
    <Stack.Screen
      name="Bedtime"
      component={Bedtime}
      options={{
        title: "⏰ Bedtime",
        header: () => null,
      }}
    />
    <Stack.Screen
      name="Darkroom"
      component={Darkroom}
      options={{
        title: "🏞 Darkroom",
        header: () => null,
      }}
    />
  </Stack.Navigator>
);
const App = () => {
  return (
    <LoadAssets fonts={fonts}>
      <AppNavigator />
    </LoadAssets>
  );
};
export default App;