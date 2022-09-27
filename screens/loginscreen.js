import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, KeyboardAvoidingView,TextInput,StyleSheet,TouchableOpacity, TouchableNativeFeedbackBase, TouchableOpacityBase } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from '../firebase'
import {Users} from '../store'

const Loginscreen=() => {
    const [email,setEMail]=useState('')
    const [password,setPassword]=useState('')

    const navigation = useNavigation();

    const prodjinareg=() =>{
        navigation.navigate("Register");
    }


    const loginn=() =>{
        signInWithEmailAndPassword(auth,email,password).then(userCredentials =>{
            const user = userCredentials.user;
            Users.CurentUser=user.email;
            navigation.navigate("Home");
        }).catch(error => alert(error.message))

    }
    

  return (
    <KeyboardAvoidingView
    style={styles.contain}
    behavior="padding">
    <View style={styles.inputcont}>
    <Text style={styles.naslov}>Login</Text>

    <Image source={require('../assets/login.gif')} style={styles.slika}/ >
    <TextInput placeholder='Email'
    value={email}
    onChangeText={text => setEMail(text)}
    style={styles.input}
    >
    </TextInput>
    <TextInput placeholder='Password'
    value={password}
    onChangeText={text => setPassword(text)}
    style={styles.input}
    secureTextEntry
    >
    </TextInput>
      <View style={styles.buttoncont}>
    <TouchableOpacity
    onPress={loginn}
    style={styles.button} 
    >
    <Text style={styles.buttonLgn}>Login</Text>
    </TouchableOpacity>
    <Text style={styles.registracija}
      onPress={prodjinareg}>Sing up</Text>
      </View>
</View>

</KeyboardAvoidingView>

  )
}
 export default Loginscreen

const styles = StyleSheet.create({

    contain:{
        backgroundColor:"#f7685e",
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    inputcont:{
        width:'80%'
    },
    naslov:{
    top:-10,
    textAlign:'center',
    fontSize:35,
    color:"#fff",
    fontWeight: "bold",
    },
    slika:{
        top:-30,
        width:300,
        height:300,
    },
    input:{
        top:-25,
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical: 10,
        borderRadius:15,
        marginTop:5,
    },
    buttoncont:{
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 40,
    },
    button:{
        top:-50,
        left:25,
        backgroundColor:"#2596be",
        width:'100%',
        padding:15,
        borderRadius:90,
    },
    buttonLgn:{
        color:'#fff',
        textAlign:'center',
        fontWeight: "bold",
    },
    registracija:{
        top:-45,
        left:28,
        color:'#59cef7',
        fontWeight: "bold",
        fontSize:17,
    }
})
