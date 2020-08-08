import React, {useState} from "react";
import { Text,StyleSheet,TouchableOpacity,TextInput, View} from "react-native";
import {validateEmail} from "../utils/Validation";
import firebase from "../utils/firebase";
export default function RegistroForms(props){
   const {changeForms}=props;
   const [formData,setFormData]=useState(Datos());
   const [formError,setFormError]=useState({});
      
   const registro=()=>{
       let error={};
       if(!formData.email || !formData.password || !formData.confirmpassword){
          if(!formData.email) error.email=true;
          if(!formData.password) error.password=true;
          if(!formData.confirmpassword) error.confirmpassword=true;
       }else if(!validateEmail(formData.email)){
           error.email=true;
         
       }else if(formData.password !== formData.confirmpassword){
        error.password=true;
        error.confirmpassword=true;
        
       }else if(formData.password.length<6){
        error.password=true;
        error.confirmpassword=true;
        
      }else{
           firebase.auth().createUserWithEmailAndPassword(formData.email,formData.password)
           .then(()=>{
            console.log("Registro exitoso");
           }).catch(()=>{
               setFormError({
                   email:true,
                   password:true,
                   confirmpassword:true,
               })
           })
           
           ;
      }
   setFormError(error);
       
   }
    return(
     <>
        <TextInput
         style={[styles.input,formError.email && styles.error]}
         placeholder="Correo electronico"
         placeholderTextColor="#969696"
         onChange={e=>setFormData({...formData,email:e.nativeEvent.text})}
        />
        <TextInput
         style={[styles.input,formError.password && styles.error]}
         placeholder="Contraseña"
         placeholderTextColor="#969696"
         secureTextEntry={true}
         onChange={e=>setFormData({...formData,password:e.nativeEvent.text})}
        />
        <TextInput
         style={[styles.input,formError.confirmpassword && styles.error]}
         placeholder="Confirmar Contraseña"
         placeholderTextColor="#969696"
         secureTextEntry={true}
         onChange={e=>setFormData({...formData,confirmpassword:e.nativeEvent.text})}
        />
         <TouchableOpacity>
         <Text style={styles.btnText} onPress={registro}>Registrarse</Text>
         </TouchableOpacity>
         <View style={styles.btnLogin}>
         <TouchableOpacity onPress={changeForms}>
         <Text style={styles.btnText}>Inicia Sesion</Text>
         </TouchableOpacity>
         </View>
     </>
    );
}

function Datos(){
    return{
    email:'',
    password:'',
    confirmpassword:'',
};
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
    btnLogin:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:10,
    },
    error:{
        borderColor:"#940c0c",

    }
});