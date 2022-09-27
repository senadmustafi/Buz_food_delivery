import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, KeyboardAvoidingView,TextInput,StyleSheet,TouchableOpacity, TouchableNativeFeedbackBase, TouchableOpacityBase } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from '../firebase'

const Regscrenn=() => {
  const [email,setEMail]=useState('')
  const [password,setPassword]=useState('')
  const [passworrepeat,setPasswordrepeat]=useState('')

  const navigation = useNavigation();
  let bing
  const singup = () =>{
      if(password == passworrepeat){
      createUserWithEmailAndPassword(auth,email,password).then(userCredentials =>{
          const user = userCredentials.user;
          console.log(user.email);
      })
      .catch(error => alert(error.message))
      if(error => (error.message) == "Firebase:Error (auth/internal-error)."){
          alert("Please Enter Password")
      }
    }else{
        alert("Nisu tacni")
    }
  }
 

    
  return (
    <KeyboardAvoidingView
    style={styles.contain}
    behavior="padding">
    <View style={styles.inputcont}>
    <Text style={styles.naslov}>Register</Text>
    <Image source={require('../assets/registerimg.gif')} style={styles.slika}/ >
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
    <TextInput placeholder='Repeat Password'
    value={passworrepeat}
    onChangeText={text => setPasswordrepeat(text)}
    style={styles.input}
    secureTextEntry
    >
    </TextInput>
      <View style={styles.buttoncont}>
    <TouchableOpacity
    onPress={singup}
    style={styles.button} 
    >
    <Text style={styles.buttonLgn}>Register</Text>
    </TouchableOpacity>
      </View>
</View>

</KeyboardAvoidingView>

  )
}
 export default Regscrenn

const styles = StyleSheet.create({

    contain:{
        backgroundColor:"#f7685e",
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    slika:{
        top:-20,
        width:300,
        height:300,
    },

    inputcont:{
        width:'80%'
    },
    naslov:{
    top:-5,
    textAlign:'center',
    fontSize:35,
    color:"#fff",
    fontWeight: "bold",
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
        top:475,
        color:'#59cef7',
        left:128,
        fontWeight: "bold",
        fontSize:17,
    }
})
