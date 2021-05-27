import React, {useState} from "react";
import { Text,View, StyleSheet,Image,StatusBar,TextInput,TouchableOpacity,SafeAreaView,Alert,RefreshControl} from "react-native";
import LoginForms from "./LoginForms";
import RegistroForms from "./RegistroForms";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { Value } from "react-native-reanimated";

export default function AddCumpleanero({route,navigation}){
    const [isDatePicketVisible, setIsDatePicketVisible] = useState(false);
    const [formError, setFormError] = useState({});
    const [formData, setFormData] = useState({});
    const { id_usuario } = route.params;
  
   
    const hideDatePicker = () => {
        setIsDatePicketVisible(false);
      };
    
      const showDatePicker = () => {
        setIsDatePicketVisible(true);
        
      };
    const handlerConfirm = (date) => {
    const fecha_nacimiento=date;
    setFormData({...formData, fecha_nacimiento});
    console.log(moment(date).format('L'));
      };

      
  const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text});
  };
  const onSubmit = () => {
      
    let errors = {};
    if (!formData.nombre || !formData.apellido || !formData.fecha_nacimiento) {
      if (!formData.nombre) errors.nombre = true;
      if (!formData.apellido) errors.apellido = true;
      if (!formData.fecha_nacimiento) errors.fecha_nacimiento = true;
    } else {
     
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({fk_id_usuario:id_usuario,nombre:formData.nombre,apellido:formData.apellido,fecha_nacimiento:formData.fecha_nacimiento})
        };
        fetch('http://192.168.1.5:5000/api/cumpleanero/create', requestOptions)
             
       Alert.alert('Exitoso!','Registro Existoso',[{
        text:'Ver Listado',onPress:()=>navigation.navigate("Listado"),
        }
        
       ]);
       
    
      }
        
    
    setFormError(errors);
    
  };
  
    return(
    <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={styles.background}>
    <View style={styles.container}>
    <TextInput
          style={[styles.input, formError.nombre && {borderColor: '#940c0c'}]}
          placeholder="Nombre"
          placeholderTextColor="#969696"
          onChange={(e) => onChange(e, 'nombre')}
        />
        <TextInput
          style={[styles.input, formError.apellido && {borderColor: '#940c0c'}]}
          placeholder="Apellidos"
          placeholderTextColor="#969696"
          onChange={(e) => onChange(e, 'apellido')}
        />
        <View style={[styles.input, styles.datepicker,formError.fecha_nacimiento && {borderColor: '#940c0c'}]}>
         <Text style={styles.textDate} onPress={showDatePicker}>
         {formData.fecha_nacimiento
         ? moment(formData.fecha_nacimiento).format('L')
         : 'Fecha de nacimiento'
         }   
           
        </Text>
        </View>
        <TouchableOpacity onPress={onSubmit}>
          <Text style={styles.addButton}>Crear cumpleaños</Text>
        </TouchableOpacity>
    </View>
    <DateTimePickerModal
        isVisible={isDatePicketVisible}
        mode="date"
        onConfirm={handlerConfirm}
        onCancel={hideDatePicker}
        
    />
    </SafeAreaView>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      height: 50,
      color: '#fff',
      width: '80%',
      marginBottom: 25,
      backgroundColor: '#1e3040',
      paddingHorizontal: 20,
      borderRadius: 50,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#1e3040',
    },
    datepicker: {
      justifyContent: 'center',
    },
    addButton: {
      fontSize: 18,
      color: '#fff',
    },
    textDate:{
        color:"#969696",
        fontSize:18,
    },
    background: {
      backgroundColor: '#15212b',
      height: '100%',
    },
  });