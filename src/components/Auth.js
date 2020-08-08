import React, {useState} from "react";
import { Text,View, StyleSheet,Image} from "react-native";
import LoginForms from "./LoginForms";
import RegistroForms from "./RegistroForms";

export default function Auth(){
   const [isLogin,setIsLogin]=useState(true);

   const changeForms=()=>{
       setIsLogin(!isLogin);
   }
    return(
   <View style={styles.View}>
       <Image style={styles.logo} source={require("../assets/login.png")}/>
      {isLogin ? <LoginForms changeForms={changeForms}/> : <RegistroForms changeForms={changeForms}/>}
   </View>

    );
}

const styles=StyleSheet.create({
    View:{
        flex:1,
        alignItems:'center',
    },
    logo:{
        width:"80%",
        height:240,
        marginTop:50,
        marginBottom:50,
    }
})