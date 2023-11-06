import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  useNavigation
} from "@react-navigation/native";
import { FactoryRelatorio } from "./src/pages/FactoryRelatorio";
import { Login } from "./src/pages/Login/login";
import { Usuarios } from "./src/pages/Usuarios/Usuarios";
import {
  useStorageToken,
  useStorageUser,
  useToken,
  useUser
} from "./src/hooks/useAuth";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import Home from "./src/pages/Home/Home";
import Predios from "./src/pages/Predios/Predios";
import { BlurView } from "@react-native-community/blur";
import { Button, View } from "react-native";
import { createUser } from "./src/auth/Authentication";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Bottom = createBottomTabNavigator();

const user = await createUser('example@example.com', 'examplepassword');

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Main'
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  const [storageToken, setStorageToken] = useStorageToken();
  const [storageUser, setStorageUser] = useStorageUser();
  const [token, setToken] = useToken();
  const [user, setUser] = useUser();

  useEffect(() => {
    if (storageToken) {
      setToken(storageToken);
      setUser(storageUser);
    }
  }, [storageToken]);

  if (!token) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Bottom.Navigator
        sceneContainerStyle={{ backgroundColor: "#6E56CF" }}
        screenOptions={{
          tabBarShowLabel:false,
          tabBarStyle: { backgroundColor:"#2987", elevation:0},
        }}
        tabBar={props => (
          <BlurView
          blurType="light"
          blurAmount={1}
          // reducedTransparencyFallbackColor="black"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "transparent",
              elevation: 0
            }}>
            <BottomTabBar {...props} />
          </BlurView>
        )}
        >
        <Bottom.Screen
          name='Home'
          component={StackNavigator}
          options={{ headerShown: false }}
        />
        <Bottom.Screen
          name='Usuarios'
          component={Usuarios}
          options={{ headerShown: false }}
        />
        <Bottom.Screen
          name='Predios'
          component={Predios}
          options={{ headerShown: false }}
        />
        <Bottom.Screen
          name='FactoryRelatorio'
          component={FactoryRelatorio}
          options={{ headerShown: false }}
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
};

export default App;
