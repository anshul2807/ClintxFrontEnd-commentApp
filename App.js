import React from 'react';
import List from './components/list'
import Home from './components/home'


import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"


import {CommentProvider} from './Context/Comments'
import {UserProvider} from './Context/Users'
import { ModalcontrolProvider } from './Context/Modalcontrol';
import {CurrentReplyProvider} from './Context/currentreply'

// import Routers from './Routers' 
export default function App() {
    const Stack = createStackNavigator(); 

  
  
  return (
    <UserProvider>
      <CurrentReplyProvider >
      <ModalcontrolProvider >
    <CommentProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen  name="home" component={Home}/>
        <Stack.Screen name="comments" component={List}/>
        
        
      </Stack.Navigator>
      </NavigationContainer>
    </CommentProvider>    
    </ModalcontrolProvider>
    </CurrentReplyProvider>
    </UserProvider>
         
  );
}


