import AsyncStorage from "@react-native-async-storage/async-storage";

import React,{ useContext,useEffect,useState }  from "react";

import {Button, Dimensions, Text,TextInput, StyleSheet, TouchableOpacity,View,BackHandler,Alert} from "react-native"

import { Context } from "./Context";

function ShowNote({route,navigation}){
  
    const [context,setContext]=useContext(Context);


    const data=route.params;
      const[datas,setdata]=useState(data.data);
    function saveEdited(){
        
    
       
            let response=context; 
        let newresponse= response.filter((detail)=>detail.id!=data.id);
           let newdata={
               id:data.id,
               data:datas
           }
           newresponse.unshift(newdata);
           setContext(newresponse);
          
        //   console.log(newresponse);
          AsyncStorage.setItem("myNotes",JSON.stringify(newresponse));
          navigation.navigate("Show");
     

            
     

         


    }
    const backActionHandler = () => {
    Alert.alert("Alert!", "SAVE THIS NOTE BEFORE GOING BACK?", [
      {
        text: "no",
        onPress: () => (navigation.navigate("Show")),
        style: "cancel"
      },
      { text: "YES", onPress: () => {
          saveEdited()
      }
      }
    ]);
    return true;
  };

    //  BackHandler.addEventListener("hardwareBackPress",saveEdited)
      useEffect(() => {

    // Add event listener for hardware back button press on Android
    BackHandler.addEventListener("hardwareBackPress", backActionHandler);

    return () =>
      // clear/remove event listener
      BackHandler .removeEventListener("hardwareBackPress", backActionHandler);
  }, [saveEdited]);

    return(
        <View style={{flex:1,marginTop:"6%"}}>
            <View>
              
               <View style={{width:Dimensions.get("window").width,backgroundColor:"green"}}>
                   <TouchableOpacity style={{alignSelf:"center"}}><Text style={{color:"white",padding:4,fontWeight:"bold"}} onPress={saveEdited}>save</Text></TouchableOpacity></View>
            </View>
             <TextInput editable={true} defaultValue={data.data}   multiline={true} autoFocus={true} style={{margin:2}}onChangeText={(text)=>(setdata(text))} />
        </View>
    )
}
export default ShowNote;