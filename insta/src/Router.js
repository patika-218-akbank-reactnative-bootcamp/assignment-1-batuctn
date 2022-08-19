/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Search from './screens/Search';
import Reels from './screens/Reels';
import Activity from './screens/Activity';
import Profile from './screens/Profile';
import Ionic from 'react-native-vector-icons/Ionicons';
import Status from './components/Status';
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';
import {ThemeProvider} from './context/ThemeContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50,
        },
        tabBarIcon: ({focused, size, colour}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
            size = focused ? size + 8 : size + 2;
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'ios-search-outline';
            size = focused ? size + 8 : size + 2;
          } else if (route.name === 'Reels') {
            iconName = focused
              ? 'caret-forward-circle'
              : 'caret-forward-circle-outline';
            size = focused ? size + 8 : size + 2;
          } else if (route.name === 'Activity') {
            iconName = focused ? 'ios-heart' : 'ios-heart-outline';
            size = focused ? size + 8 : size + 2;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
            size = focused ? size + 8 : size + 2;
          }

          return <Ionic name={iconName} size={size} color={colour} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen
        options={{tabBarBadge: 3}}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

function Router() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={HomeStack} />

          <Stack.Screen name="Status" component={Status} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
export default Router;
