import React, { Component,useCallback,useEffect,useState } from "react";
import { Text,View, StyleSheet,Image,StatusBar,TouchableOpacity,Alert,TextInput,SafeAreaView,RefreshControl} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ActionBar from "./ActionBar";
import AddCumpleanero from "./AddCumpleanero";
import {postRequest} from '../utils/api';
import {api} from '../globalApi';




function wait(timeout){
  return new Promise(resolve=>{
    setTimeout(resolve,timeout);
  });
}

export default function Listado({route,navigation}) {

  const { id_usuario } = route.params;
  const [datos, setDatos] = useState([]);  
  const [refreshing,setRefreshing]=useState(false);
  const [content,setContent]=useState(Listado);
  const [birthday, setBirthday] = useState([]);  
  const f=new Date();
 
 const eliminar=async(birthday)=>{
    await fetch('http://192.168.1.5:5000/api/cumpleanero/delete',{
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      id_cumpleanos:birthday.id_cumpleanos,
         
    })
    
    })
    Alert.alert(
      'Exito',
      `Usuario eliminado Correctamente`,
      [
        {
          text: 'Aceptar',
       
        },
      ],
      {cancelable: false},
    );

 }

  const onRefresh=useCallback(()=>{
  setRefreshing(true)
  wait(2000).then(()=>{
    setRefreshing(false)
    setContent(Listado)
  })
  },[refreshing])

    useEffect(() => {
           Listado();
           
    }, []);

     
  const Listado=async()=>{
    await fetch('http://192.168.1.5:5000/api/cumpleanero/listar',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      fk_id_usuario:id_usuario,
    })
    }).then(response => response.json())
      .then(data=> setDatos(data))
      

      
  }
  const Cerrar=()=>{
    navigation.navigate("Login");
  }
  const change=()=>{
      navigation.navigate("Add",{
      id_usuario: id_usuario,      
    });
};
    const deleteBirthday = (birthday) => {
        Alert.alert(
          'Mensaje',
          `Selecciona Una Opcion`,
          [
            {
              text: 'Cancelar',
              style: 'cancel',
            },
            {
              text: 'Eliminar',
              onPress:()=>eliminar(birthday)
                
            },
            {
                text: 'Actualizar',
                onPress:()=>navigation.navigate("Actualizar",{
                  data: birthday,      
                }),
               
              },
          ],
          {cancelable: false},
        );
      };
      
   return(
<>

<StatusBar barStyle="light-content" />
<SafeAreaView style={styles.background}>
<ScrollView refreshControl={
  <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
}>
  
{
 datos.map(
    (e,i) => (
    <View  key={e.id_cumpleanos}>                  
    <TouchableOpacity
    style={[((e.fecha_nacimiento) == f.getDay()) ? styles.card : styles.card2]}
    onPress={()=>deleteBirthday(e)}
     >
    <Text style={styles.userName}
     onChangeText={(e)=>setBirthday(e.id_cumpleanos)}>
     {e.nombre}
    </Text>
    <Text style={{color:'#fff'}}>{e.fecha_nacimiento}</Text>
  </TouchableOpacity>
  </View>   
  ))}
  <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
    <View style={styles.viewAdd}>
        <TouchableOpacity onPress={change}>
        <Text style={styles.text}>
         Nueva Fecha
        </Text>
        </TouchableOpacity>
     </View>
     <View style={styles.viewClose}>
        <TouchableOpacity onPress={Cerrar}>
          <Text style={styles.text}>
            Cerrar Sesión
          </Text>
          </TouchableOpacity>
        </View>
     </View>
   </ScrollView>
   </SafeAreaView>
      
     
  

   
 
  </>
    );
}

const styles=StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        alignItems: 'center',
        paddingHorizontal: 10,
        margin: 10,
        borderRadius: 15,
        backgroundColor: '#559204',
      },
      card2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        alignItems: 'center',
        paddingHorizontal: 10,
        margin: 10,
        borderRadius: 15,
        backgroundColor: '#559204',
      },
      actual: {
        backgroundColor: '#559204',
      },
      current: {
        backgroundColor: '#1ae1f2',
      },
      pasat: {
        backgroundColor: '#820000',
      },
      userName: {
        color: '#fff',
        fontSize: 16,
      },
      textCurrent: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },  
      background: {
        backgroundColor: '#15212b',
        height: '100%',
      },
      viewFooter: {
        bottom: 0,
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        marginBottom: 20,
      },
      viewClose: {
        backgroundColor: '#820000',
        borderRadius: 50,
        height:30,
        width:200,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
    
      },
      viewAdd: {
        backgroundColor: '#1ea1f2',
        borderRadius: 50,
        height:30,
        width:200,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        
        
        
        
      },
      text: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
      },
})