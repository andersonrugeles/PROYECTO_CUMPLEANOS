import React, {useState} from "react";
import { Text,View, StyleSheet,Image,StatusBar,SafeAreaView} from "react-native";
import LoginForms from "./LoginForms";
import RegistroForms from "./RegistroForms";

export default function Auth({navigation}){
const [isLogin,setIsLogin]=useState(true);

const changeForm=()=>{
    setIsLogin(!isLogin)
};

   return(
       <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={styles.background}>
   <View style={styles.view}>
      
       <Image style={styles.logo} source={require("../assets/logo.png")}/>
       {isLogin ? <LoginForms navigation={navigation}/>:<RegistroForms changeForm={changeForm}/>
    }
   
   </View>
    </SafeAreaView>
  </>
    );
}

const styles=StyleSheet.create({
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
})