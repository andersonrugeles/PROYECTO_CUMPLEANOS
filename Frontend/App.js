import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import Auth from './src/components/Auth';
import LoginForms from './src/components/LoginForms';
import ListBirthday from './src/components/ListBirthday';
import ActionBar from './src/components/ActionBar';
import List from './src/components/List';
import Actualiza from './src/components/Actualiza';
import Listado from './src/components/Listado';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddCumpleanero from './src/components/AddCumpleanero';
import RegistroForms from './src/components/RegistroForms';

const Stack = createStackNavigator();


function App() {


  return (
    
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginForms}/>
          <Stack.Screen name="Registro" component={RegistroForms}/>
          <Stack.Screen name="Listado" component={Listado}/>
          <Stack.Screen name="Actualizar" component={Actualiza}/>
          <Stack.Screen name="Add" component={AddCumpleanero}/>
         </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#15212b',
    height: '100%',
  },
});

export default App;