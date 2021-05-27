import React, {useState} from "react";
import { Text,View, StyleSheet,TouchableOpacity,TextInput,StatusBar,SafeAreaView,Image,Alert} from "react-native";
import { ScrollView } from "react-native-gesture-handler";


export default function LoginForms({navigation},props){
  
   const [formError, setFormError] = useState({});
   const [formData, setFormData] = useState(defaultValue());

    function validarlogin(data){
    
     if(Object.entries(data).length>0){
          navigation.navigate("Listado",{
          id_usuario: data[0].id_usuario,      
        });
      }else{
        Alert.alert(
          'Ups',
          `Usuario y/o contraseña incorrecta`,
          [
            {
              text: 'Aceptar',
           
            },
          ],
          {cancelable: false},
        );
      }
    
   };
   
  state={
    data:[],
   
  }
 
  const login=async()=>{
    await fetch('http://192.168.1.5:5000/api/user/validar',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      email:formData.email,
      password:formData.password
    })
    }).then(response => response.json())
      .then(data=> validarlogin(data))   
      
  }
     
    return(
      
     <>
            <StatusBar barStyle="light-content" />
             <SafeAreaView style={styles.background}>
             <ScrollView>
                <View style={styles.view}>
         
              <Image style={styles.logo} source={require("../assets/logo.png")}/>
             
        <TextInput
         style={[styles.input, formError.email && styles.error]}
         placeholder="Correo electronico"
         placeholderTextColor="#969696"
         onChange={e=>setFormData({...formData,email:e.nativeEvent.text})}
         />
         <TextInput
         style={[styles.input, formError.password && styles.error]}
         placeholder="Contraseña"
         placeholderTextColor="#969696"
         secureTextEntry={true}
         onChange={e=>setFormData({...formData,password:e.nativeEvent.text})}
         />
         <TouchableOpacity onPress={login}>
         <Text style={styles.btnText}>Inicia Sesion</Text>
         </TouchableOpacity>
         <View style={styles.registre}>
         <TouchableOpacity onPress={()=>navigation.navigate("Registro")}>
         <Text style={styles.btnText}>Registrate</Text>
         </TouchableOpacity>
         </View>
       
         </View>
         </ScrollView>
         </SafeAreaView>
     </>
    );
}
function defaultValue() {
    return {
      email: '',
      password: '',
    };
  }
const styles=StyleSheet.create({
  btnText:{
      color:'#fff',
      fontSize:18,
      paddingVertical:15,
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
    },
    logo:{
        width:"80%",
        height:240,
        marginTop:50,
        marginBottom:50,
    },
    error: {
        borderColor: '#940c0c',
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