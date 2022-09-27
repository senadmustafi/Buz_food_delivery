import { useNavigation } from '@react-navigation/native'
import {Content, View, Text,StyleSheet,TextInput,TouchableOpacity,Image,SafeAreaView, ScrollView,BackHandler } from 'react-native'
import React, {Component, useEffect} from 'react'
import { db,getDocs,collection,doc, onSnapshot } from '../firebase'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { getDoc } from 'firebase/firestore'
import {Items,Users} from '../store'

export const Unsub = onSnapshot(doc(db, "restorani", "ime_restorani"), (doc) => {
  const localVar5 = doc.data(); 
  const propertyNames5 = Object.keys(localVar5);
  globalVar = localVar5;

});

export const Slikerest = onSnapshot(doc(db, "restorani", "slike_resotran"), (doc) => {
  const localSl6 = doc.data(); 
  const propertyNames6 = Object.values(localSl6);
  globSl = localSl6;
});



  
const HomeScreen =() => {


  const navigation = useNavigation();
  const todomino=()=>{
    navigation.navigate("Domino");
    }

    useEffect(() => {
      navigation.addListener("beforeRemove", (e) => {
         if(Users.CurentUser==null) {
           return ;
          } else {
        e.preventDefault();
       }
      });
  }, [navigation]);

return (
  <View>
   <ScrollView showsVerticalScrollIndicator={false}>
  <View style={styles.bg}>

  <Text></Text>
  <TextInput placeholder='What are u looking for ?'
    style={styles.input}
    ></TextInput>
      <View style={styles.unsub}>
      </View>
  </View>
  <View> 
 <View style={{backgroundColor:"#fff", padding:2, borderRadius:25,marginTop:15,padding:12} }>
 <TouchableOpacity onPress={todomino}>
  <Image source={{uri: globSl.domino}}
 
    style={{width:"100%",height: 150,  borderRadius:12}}
  />
    <Text style={{fontSize: 15, fontWeight:'bold',marginTop:5 }}>
    {globalVar.a1}
    </Text>
    </TouchableOpacity>
  </View>
  <View style={{backgroundColor:"#fff", padding:2, borderRadius:25,marginTop:15,padding:12} }>
 <TouchableOpacity >
 <Image source={{uri: globSl.kfc}}
 
 style={{width:"100%",height: 150,  borderRadius:12}}
/>
    <Text style={{fontSize: 15, fontWeight:'bold',marginTop:5 }} >
      {globalVar.a2}
    </Text>
    </TouchableOpacity>
  </View>
  <View style={{backgroundColor:"#fff", padding:2, borderRadius:25,marginTop:15,padding:12} }>
 <TouchableOpacity>
 <Image source={{uri: globSl.mbureger}}
 
 style={{width:"100%",height: 150,  borderRadius:12}}
/>
    <Text style={{fontSize: 15, fontWeight:'bold',marginTop:5 }}>
    {globalVar.a3}
    </Text>
    </TouchableOpacity>
  </View>
  
    <Text></Text>
  </View>
  </ScrollView>
</View>
);
}


export default HomeScreen




 
const styles = StyleSheet.create({
  bg:{
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    backgroundColor:"#f7685e",
    width:'100%',
    height:140
  },
  input:{
    borderColor:'#fa877f',
    borderWidth: 1,
    top:75,
    margin:55,
    backgroundColor:'white',
    paddingHorizontal:15,
    paddingVertical: 10,
    borderRadius:15,
    marginTop:5,
},

})