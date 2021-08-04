import 'react-native-gesture-handler';

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const App = () => {
  return (

    // <View>
    //   <Text>Hello</Text>
    //   <Feather name="activity" style={{fontSize:50}} />
    //   <FontAwesome name="user" style={{fontSize: 50, color: "red"}} />
    // </View>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Login"
          options={{ title: 'Login' }}
          component={LoginScreen} 
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
