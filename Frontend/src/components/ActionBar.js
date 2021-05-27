import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import App from '../../App';
import AddCumpleanero from "./AddCumpleanero";

export default function ActionBar({navigation},props){
    const {showList, setShowList} = props;
    const {changeInicio}=props;
    const change=()=>{
       navigation.navigate("Add")
  };
    return(

        <View style={styles.viewFooter}>
        <View style={styles.viewClose}>
          <Text style={styles.text} onPress={changeInicio}>
            Cerrar Sessión
          </Text>
        </View>
        <View style={styles.viewAdd}>
        <TouchableOpacity onPress={change}>
        <Text style={styles.text}>
         Nueva Fecha
        </Text>
        </TouchableOpacity>
      </View>
    </View>
    )
}

const styles= StyleSheet.create({
    viewFooter: {
        position: 'absolute',
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
        paddingVertical: 10,
        paddingHorizontal: 30,
      },
      viewAdd: {
        backgroundColor: '#1ea1f2',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 30,
      },
      text: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
      },
 })
