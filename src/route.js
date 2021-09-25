import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListScreen from "./screens/ListScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Posts">
        <Stack.Screen name="Posts" component={ListScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
