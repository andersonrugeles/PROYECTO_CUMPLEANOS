import React, {useState}from 'react';
import {StyleSheet,Text,View,FlatList,TouchableOpacity,ScrollView,Alert} from 'react-native';
import ActionBar from './ActionBar';
import AddCumpleanero from './AddCumpleanero';
import Listado from './Listado';
export default function ListBirthday (props){
    const [showList, setShowList] = useState(true);
    const [birthday, setBirthday] = useState([]);
    const [pasatBirthday, setPasatBirthday] = useState([]);
   
    
 fetchData=async()=>{
     const response = await fetch('http://192.168.1.5:8000/links/operacion');
     const users=await response.json();
     this.setState({data:users});
 
 }
 

  return(
    <View style={styles.container}>
   {showList ? (
  <ScrollView style={styles.scrollView}>
     
            <Listado/>
             
    </ScrollView>
    ): (
      <AddCumpleanero/>  
    )}
    <ActionBar showList={showList} setShowList={setShowList} />
    </View>
  );
}

const styles= StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%',
      },
      scrollView: {
        marginBottom: 50,
        width: '100%',
      },
})