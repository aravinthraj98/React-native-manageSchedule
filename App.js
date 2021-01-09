import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./components/home"
import Show from "./navigation/navigate"
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Context} from './components/Context';

export default function App() {

   const[data,setdata]=useState([]);

    useEffect(()=>{
           (async () => {
               const res = await AsyncStorage.getItem('myNotes');
               setdata(JSON.parse(res));
              
               
           })();
    }, []);
  return (
    <Context.Provider value={[data,setdata]}>
    
      <Show />
      </Context.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
