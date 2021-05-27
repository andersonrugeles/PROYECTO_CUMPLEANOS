
import React, { Component } from 'react';
import {StyleSheet,Text,View,FlatList, TouchableOpacity,Button} from 'react-native';
import ActionBar from './ActionBar';

export default class List extends Component{
  
    state ={
     data:[]
    }
    
 fetchData=async()=>{
     const response = await fetch('http://192.168.1.5:5000/api/listar');
     const users=await response.json();
     this.setState({data:users});
 }
 
 render(){
     
  return(

   <View style={styles.container}>
   <Text>PRIMERA CAJA</Text>
   <FlatList
   data={this.state.data}
   renderItem={({item})=>
   <View style={styles.container}>
   <Text>{item.nombre},cumpleaños son:{item.fecha_nacimiento}</Text>
   </View>
   
   }

   />
   
<TouchableOpacity onPress={this.fetchData}>
<Text>SOY UN BOTON</Text>
</TouchableOpacity>
 

  
<ActionBar/>
 
  </View>
    );
  
   
  
 

}
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF',
    },
    estilo:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingVertical:10
        
    },
    estilosecond:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingVertical:20,
        borderColor:'white'
        
    }
})