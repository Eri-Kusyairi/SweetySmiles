import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
<<<<<<< HEAD
import { Home,Profile,Exercises,Search,AddExercises,DetailExercises,EditExercises } from '../pages';
import { Bag2, Home2, Bookmark, AlignHorizontally, UserAdd, User } from 'iconsax-react-native';
=======
<<<<<<< HEAD
import { Home,Profile,Exercises,Search,AddExercises } from '../pages';
=======
import { Home,Profile,Exercises } from '../pages';
>>>>>>> 2e48899d8d242a14227957853f46c263c4238d3d
import { Bag2, Home2, Bookmark, AlignHorizontally, UserAdd, User } from 'iconsax-react-native';

>>>>>>> 05882bc9ef16999b31ea1e643f48ba97a7c9ee8b
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
      <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <Home2
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }} />
<<<<<<< HEAD
          <Tab.Screen name="Exercises" component={Exercises} options={{
=======
          <Tab.Screen name="Progress" component={Exercises} options={{
>>>>>>> 05882bc9ef16999b31ea1e643f48ba97a7c9ee8b
          tabBarLabel: 'Exercises',
          tabBarIcon: ({focused, color}) => (
            <AlignHorizontally
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}/>
          <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color}) => (
            <User
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }} />
        </Tab.Navigator>
    )
  }
  const Router = () => {
    return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
<<<<<<< HEAD
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
        <Stack.Screen name="AddExercises" component={AddExercises} options={{ headerShown: false }} />
        <Stack.Screen name="EditExercises" component={EditExercises} options={{ headerShown: false }} />
        <Stack.Screen name="DetailExercises" component={DetailExercises} options={{ headerShown: false }} />
=======
<<<<<<< HEAD
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
        <Stack.Screen name="AddExercises" component={AddExercises} options={{ headerShown: false }} />
=======
>>>>>>> 2e48899d8d242a14227957853f46c263c4238d3d
>>>>>>> 05882bc9ef16999b31ea1e643f48ba97a7c9ee8b
      </Stack.Navigator>
    )
  }
  export default Router
  const styles = StyleSheet.create({})
  