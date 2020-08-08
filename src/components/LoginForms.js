import React, {useState} from "react";
import { Text,View, StyleSheet,TouchableOpacity,TextInput} from "react-native";
import {validateEmail} from "../utils/Validation";
import firebase from "../utils/firebase";
export default function LoginForms(props){
   const {changeForms}=props;
   const login=()=>{
       console.log("Iniciando Sesionnnn");
   }
    return(
     <>
         <TextInput
         style={styles.input}
         placeholder="Correo electronico"
         placeholderTextColor="#969696"
         />
         <TextInput
         style={styles.input}
         placeholder="Contraseña"
         placeholderTextColor="#969696"
         secureTextEntry={true}
         />
         <TouchableOpacity onPress={login}>
         <Text style={styles.btnText}>Inicia Sesion</Text>
         </TouchableOpacity>
         <View style={styles.registre}>
         <TouchableOpacity onPress={changeForms}>
         <Text style={styles.btnText}>Registrate</Text>
         </TouchableOpacity>
         </View>
     </>
    );
}

const styles=StyleSheet.create({
  btnText:{
      color:'#fff',
      fontSize:18,
  },
  input:{
      height:40,
      color:"#fff",
      width:"80%",
      marginBottom:25,
      backgroundColor:"#1e3040",
      paddingHorizontal:20,
      borderRadius:50,
      fontSize:18,
      borderTopWidth:1,
      borderColor:"#1e3040",
},
    registre:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:10,
    }
});