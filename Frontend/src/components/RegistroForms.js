import { NavigationContainer } from "@react-navigation/native";
import React, {useState} from "react";
import { Text,StyleSheet,TouchableOpacity,TextInput, View,SafeAreaView,StatusBar,Image,Alert} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {validateEmail} from "../utils/Validation";

export default function RegistroForms({navigation},props){
   const {changeForm}=props;
   const [formData,setFormData]=useState(Datos());
   const [formError,setFormError]=useState({});
   
   state ={
    data:[]
   }

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
        
     
   const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email:formData.email,password:formData.password})
    };
    fetch('http://192.168.1.5:5000/api/user/create', requestOptions)
   .then(response => response.json())
   .then(data => this.setState({ postId: data.id })
   
   );
   
   Alert.alert('Exitoso!','Registro Existoso',[{
    text:'Inicia Sesion',onPress:()=> navigation.navigate("Login")
    }
    
   ]);
   

    }
   setFormError(error);
       
   }
    return(
     <>

         <StatusBar barStyle="light-content" />
           <SafeAreaView style={styles.background}>
           <ScrollView>
                <View style={styles.view}>
              <Image style={styles.logo} source={require("../assets/logo.png")}/>
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
         </View>
         </View>
         </ScrollView>
         </SafeAreaView>
       
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

    },
    view:{
        flex:1,
        alignItems:'center',
    },
    logo:{
        width:"80%",
        height:240,
        marginTop:50,
        marginBottom:50,
    },
    background: {
        backgroundColor: '#15212b',
        height: '100%',
      },
});