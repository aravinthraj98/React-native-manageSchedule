import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import Home from "../components/home";
import Shows from "../components/show";
import ShowNote from "../components/ShowNote";

const Stack=createStackNavigator();
function Show(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Show" component={Shows} />
                <Stack.Screen name="Notes" component={Home} />
                <Stack.Screen name="shownote" component={ShowNote} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Show;

