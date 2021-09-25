import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2A2E43',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="List of Post" component={PostList} />
        <Stack.Screen name="Details" component={PostDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
