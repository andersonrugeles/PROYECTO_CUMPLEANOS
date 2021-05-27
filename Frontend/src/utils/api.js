import { View, Alert, Text } from "react-native";
import global from '../globalApi';
import {id_usuario} from '../components/Listado';

export async function getRequest(endPoint, data,callback) {
    const header= {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    };
    await request(endPoint, header, callback);
}

export async function postRequest(
    endPoint,
    data,
    callback
) {
    const header = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',            
        },
    };
    await request(endPoint, header, callback);
}

export async function putRequest(
    endPoint,
    data,
    callback
) {
    const header = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=utf-8",
        },
    };
    await request(endPoint, header, callback);
}

export async function deleteRequest(
    endPoint,
    data,
    callback
) {
    const header = {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=utf-8",
        },
    };
    await request(endPoint, header, callback);
}

async function request(endPoint, header, callback) {
     try {
       /* const token= await AsyncStorage.getItem("token");
        header.headers.Authorization = `{Baerer ${token}`;
        console.log(token)
        */
        const response = await fetch(global.api + endPoint, header);
        const responseJson = await response.json();
        responseJson.msg && Alert.alert("Correcto", responseJson.msg);
        console.log(responseJson);
        await callback(responseJson);
        
    } catch (error) {
        console.error(error.name + ': ' +error.message)        
    }    
}