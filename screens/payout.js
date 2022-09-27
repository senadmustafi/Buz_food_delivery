import { useNavigation } from '@react-navigation/native'
import {Content, View, Text,StyleSheet,TextInput,TouchableOpacity,Image,SafeAreaView, ScrollView,Button,BackHandler,Dimensions  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db,getDocs,collection,doc, onSnapshot,addDoc,setDoc} from '../firebase'
import {Users} from '../store'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { async } from '@firebase/util'
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

const PayOut=() => {

  const navigation = useNavigation();
  const tohome=()=>{
    navigation.navigate("Home");
    };


 /* const docRef =  setDoc(doc(db, "cities","a"), {
    name: "Tokyo",
    country: "Japan"
  });
  */

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  const [selectedLanguage, setSelectedLanguage] = useState();
  
  let loc;
  let lat;
  let log;
  
  if (location==null){

  }else{
    console.log(location);
    loc = location.coords;
    lat=loc.latitude;
    log = loc.longitude;

   
 
 
  }
 
  
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


return (
  <View style={{backgroundColor:"#c8fc98", height:"100%",}} >
  <Image source={require('../assets/finish.png')} style={styles.slika}/ >
  <Text style={styles.naslov1}>Your Order has been Placed{"\n"}Successfully!</Text>
  <Text style={styles.tekst}>You will recive your oreder in 15-20min</Text>
<TouchableOpacity style={styles.appButtonContainer1}>
  <Text style={styles.appButtonText2 }onPress={tohome}>Go to home page</Text>
</TouchableOpacity>
  </View>
);
}

     

export default PayOut



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
  top:50,
  width:"100%",
  height:350,
  left:-25
},

  naslov1:{
    flex:1,
    textAlign:"center",
    top:65,
    fontSize:25,
    color:"black"

  },
  tekst:{
    top:-100,
    fontSize:14,
    color:"black",
    fontWeight:"bold",
    textAlign:"center"

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
    top:-50,
    elevation: 8,
    backgroundColor: "#2dcc70",
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