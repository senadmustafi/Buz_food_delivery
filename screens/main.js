import { useNavigation } from '@react-navigation/native'
import { View, Image,Text,KeyboardAvoidingView,StyleSheet,TouchableOpacity,  } from 'react-native'
import React from 'react'



const Main=() => {
  const navigation = useNavigation();
  const tologin=()=>{
    navigation.navigate("Login");
    }

    const tohome=()=>{
      navigation.navigate("Home");
      }
  return(
    <View style={{backgroundColor:"#f7685e", height:"100%",}} >
    <Text style={styles.naslov}>BUZ</Text>
    <Image source={require('../assets/mainfood.gif')} style={styles.slika}/ >
    <Text style={styles.naslov1}>Get started with Buz</Text>
    <Text style={styles.tekst}>Please choose how you want to continue setting up {"\n"}your account</Text>
  <TouchableOpacity style={styles.appButtonContainer}>
    <Text style={styles.appButtonText } onPress={tologin}>Login with Email</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.appButtonContainer1}>
    <Text style={styles.appButtonText2 }onPress={tohome}>Continue as a guest</Text>
  </TouchableOpacity>
    </View>

  )
}


export default Main;

const styles = StyleSheet.create({
  naslov:{
    flex:1,
    top:40,
    textAlign:'center',
    fontSize:35,
    color:"#fff",
    fontWeight: "bold",

  },
slika:{
  top:-50,
  width:300,
  height:300,
},

  naslov1:{
    flex:1,
    left:10,
    top:-75,
    fontSize:25,
    color:"#fff"

  },
  tekst:{
    left:12,
    top:-150,
    fontSize:14,
    color:"#fff"

  },


  appButtonContainer: {
    margin:10,
    top:-90,
    elevation: 8,
    backgroundColor: "#fff",
    borderRadius: 80,
    paddingVertical: 10,
    paddingHorizontal: 12,
  

  },
  appButtonText: {
    alignItems:'center',
    fontSize: 18,
    color: "#f7685e",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    

  },
  appButtonContainer1: {
    margin:10,
    top:-85,
    elevation: 8,
    backgroundColor: "rgba(0, 184, 245,0.6)",
    borderRadius: 80,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText2: {
    alignItems:'center',
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }

})