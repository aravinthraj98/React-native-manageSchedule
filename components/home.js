import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View ,Dimensions, Button,BackHandler, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import 'react-native-gesture-handler';

import { Context } from './Context';


function Home({navigation}){
    
   
    const[data,setdata]=useState("");
    const[context,setContext]=useContext(Context);
    //  AsyncStorage.removeItem("myNotes");
   

function getAsyncD(){

   

     AsyncStorage.getItem("myNotes").then((res)=>{
           
                 
                  let response=res || '[]';
                  response=JSON.parse(response);
                  
                   let d={
                  id:response.length+  Math.floor(Math.random()*100),
                   data:data
                     }
                      
                    
        response.unshift(d);
        setContext(response);
        AsyncStorage.setItem("myNotes",JSON.stringify(response))
         BackHandler.removeEventListener();
        navigation.navigate("Show");
           

    
    
});
}
                  

                  


   const backActionHandler = () => {
    Alert.alert("Alert!", "Save Before exit?", [
      {
        text: "NO",
        onPress: () => (navigation.navigate("Show")),
        style: "cancel"
      },
      { text: "YES", onPress: () => {
          getAsyncD();
      }
      }
    ]);
    return true;
  };

  useEffect(() => {

    // Add event listener for hardware back button press on Android
    BackHandler.addEventListener("hardwareBackPress", backActionHandler);

    return () =>
      // clear/remove event listener
      BackHandler.removeEventListener("hardwareBackPress", backActionHandler);
  }, [getAsyncD]);
   

            
              
           
        



    
    
 
        


     
  
    
    // function setkey(){
 
    //     // AsyncStorage.getItem("h").then((res)=>{
    //     //     setitem(res);
    //     // });
    //     let datas=[];
    //     let d={
    //         id:item.length,
    //         data:data
    //     }
    // console.log(d.id);
    //     datas.push(JSON.stringify(d));
    //     for(let i=0;i<item.length;i++){
    //         let j={
    //             id:item[i].id,
    //             data:item[i].data
    //         }
    //         console.log(item);
    //     }
        
       
    //     AsyncStorage.setItem("myNotes",datas)
    //     for(let i=0;i<datas.length;i++){
    //         console.log(datas[i])
    //     }
    //    // console.log("item setted");
    //     //
    // }
    



    return(
        <View style={{flex:1,marginTop:"6%"}}>
        
                <Button title="save" onPress={getAsyncD} />
                <TextInput autoFocus={true} editable={true} defaultValue="" maxLength={300} multiline={true} style={{margin:2}} onChangeText={(text)=>(setdata(text))} />
        
            {/* <TextInput autoFocus={true} maxLength={300} editable={true} defaultValue=""   multiline={true}  style={{maxHeight:200,borderWidth:5 ,margin:10,borderColor:"black",minHeight:200,width:Dimensions.get('window').width}} onChangeText={(text)=>(setdata(text))}></TextInput> */}
        </View>
    )
}
export default Home;