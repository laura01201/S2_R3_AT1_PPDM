import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/pages/Home";
import Camera from "./src/pages/Camera";
import GPS from "./src/pages/Gps";
import Acelerometro from "./src/pages/Acelerometro";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="GPS" component={GPS} />
        <Stack.Screen name="Acelerometro" component={Acelerometro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
