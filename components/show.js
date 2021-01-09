
import React, { useContext, useEffect, useState } from 'react'
import {Text,View,TouchableOpacity,FlatList,StyleSheet, Dimensions, Button,Alert, BackHandler } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context } from './Context';
import  Icon  from "react-native-vector-icons/FontAwesome"




function Showdata({route,navigation}){


    const[context,setContext]=useContext(Context);

 
  

  function showNote(id){


   
        
        let shownote=context.filter((data)=>data.id==parseInt(id));
        
       
        navigation.navigate("shownote",shownote[0]);
    }
  function deleteNote(id){
   
  
     
       let shownote=context.filter((data)=>data.id!=parseInt(id));
           setContext(shownote);
          AsyncStorage.setItem("myNotes",JSON.stringify(shownote));


  }
  return(
       <View style={{backgroundColor:"whitesmoke",flex:1,}} >
                <View style={{backgroundColor:"coral",minHeight:Dimensions.get("window").height/3}} ><Text style={{backgroundColor:"coral",textAlign:"center",justifyContent:"space-around",color:"white",fontWeight:"600",fontSize:25,marginTop:"25%",marginBottom:"10%"}}>NOTES</Text></View>
                 <FlatList data={context} keyExtractor={(item) => (String(item.id))} style={{marginTop:"1%"}}  renderItem={({item}) => (
                     <View>
                         <TouchableOpacity onPress={()=>(showNote(item.id))}>
                            <View style={{height:40,flexDirection:"row",justifyContent:"space-between",backgroundColor:"white",margin:"1%",borderRadius:10}}><Text style={{margin:2,marginTop:10,fontWeight:"bold",overflow:"hidden"}}>{item.data.substr(0,9)}...</Text>
                            <TouchableOpacity><Icon name="trash" onPress={()=>(deleteNote(item.id))} color="red" size={20} style={{padding:10}} /></TouchableOpacity></View>
                         </TouchableOpacity>
                        
        
           {/* <TouchableOpacity onPress={()=>(showNote(item.id))}>
                 <View style={{height:40,flexDirection:"row",justifyContent:"space-between",backgroundColor:"white",margin:".5%",borderRadius:"10px"}}>
                   <Text style={{margin:2,marginTop:10,fontStyle:"normal",fontWeight:"bold",fontSize:"medium",overflow:"hidden"}}>{item.data.substr(0,20)}...</Text>
                   <TouchableOpacity><Icon name="trash" color="red" size={20} onPress={()=>(deleteNote(item.id))} style={{padding:10}} />
                  </TouchableOpacity> 
                 </View>
                   
               
                 
           </TouchableOpacity> */}
           </View>
           
       )}  />
         <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={()=>(navigation.navigate("Notes"))}>
         <Text style={{color:"white",fontSize:50,fontWeight:"bold",textAlign:"center",backgroundColor:"coral",width:"100%", borderRadius:30}}>+</Text>
       </TouchableOpacity>
       </View>
  )
 
    

    return(
        <View style={{backgroundColor:"whitesmoke",flex:1}} >
            <View style={{backgroundColor:"coral"}} ><Text style={{backgroundColor:"coral",textAlign:"center",color:"white",fontWeight:"600",fontSize:"LARGE",marginTop:"10%",marginBottom:"10%"}}>NOTES</Text></View>
       <FlatList data={data} keyExtractor={(item) => (String(item.id))} style={{marginTop:"1%"}}  renderItem={({item}) => (
        
           <TouchableOpacity onPressOut={()=>(showNote(item.id))}>
                 <View style={{height:40,flexDirection:"row",justifyContent:"space-between",backgroundColor:"white",margin:".5%",borderRadius:"10px"}}>
                   <Text style={{margin:2,marginTop:10,fontStyle:"normal",fontWeight:"bold",fontSize:"medium",overflow:"hidden"}}>{item.data.substr(0,20)}...</Text>
                   <TouchableOpacity><Icon name="trash" color="red" size={20} onPress={()=>(deleteNote(item.id))} style={{padding:10}} />
                  </TouchableOpacity> 
                 </View>
                   
               
                 
           </TouchableOpacity>
           
       )}  />
       <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={()=>(navigation.navigate("Notes"))}>
         <Text style={{color:"white",fontSize:50,fontWeight:"bold",textAlign:"center",backgroundColor:"coral",width:"100%", borderRadius:"100%"}}>+</Text>
       </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    TouchableOpacityStyle: {
   //Here is the trick
   position: 'absolute',
   width: 50,
   height: 50,
   alignItems: 'center',
   justifyContent: 'center',
   right: 20,
   
   bottom:50,

}
})

export default Showdata;