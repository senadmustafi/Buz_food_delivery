import { useNavigation } from '@react-navigation/native'
import {Content, View, Text,StyleSheet,TextInput,TouchableOpacity,Image,SafeAreaView, ScrollView,Button} from 'react-native'
import React, { useEffect, useState } from 'react'
import { db,getDocs,collection,doc, onSnapshot,addDoc,setDoc} from '../firebase'
import {Items, Users } from '../store'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import MapView, { Marker } from 'react-native-maps';
import {Picker} from '@react-native-picker/picker';


export const unsub = onSnapshot(doc(db, "restorani", "domino_menu"), (doc) => {
  const localVar1 = doc.data(); 
  const propertyNames1 = Object.keys(localVar1);
  globalVar1 = propertyNames1;
});

export const unsub1 = onSnapshot(doc(db, "restorani", "domino_menu_price"), (doc) => {
const localVar2 = doc.data(); 
const propertyNames2 = Object.values(localVar2);
globalVar2 = propertyNames2;
});

export const unsub2 = onSnapshot(doc(db, "restorani", "domino_menu"), (doc) => {
const localVar3 = doc.data(); 
const propertyNames3 = Object.values(localVar3);
globalVar3 = propertyNames3;
});

const Domino=() => {

  const navigation = useNavigation();
  const topayout=()=>{
    navigation.navigate("PayOut");
    }
 /* const docRef =  setDoc(doc(db, "cities","a"), {
    name: "Tokyo",
    country: "Japan"
  });
 */
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [Comment,setComment]=useState('')
 
 
  console.log(selectedLanguage)
 const pay=()=>{
  
  var date = new Date().toLocaleString()

  if (Users.CurentUser!=null){

   {  const docRef =  addDoc(collection(db, "Dominos_Order"), {
      Count: Items.ItemCount,
      Price: Items.ItemPrice,
      Order: Items.ItemClasicDataBase+Items.ItemMargritaDataBase+Items.ItemVegeDataBase+Items.ItemFungiDataBase,
      Date: date,
      Comment: Comment,
      Payment_Method: selectedLanguage,

  
    });}
    topayout();
  }else{
    alert("Please login, to complit your order")
  }



  };

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

console.log("Dimonos page " + Users.CurentUser)


Items.ItemCount=count + count1 +count2 + count3 ;
Items.ItemMargrita = count;
Items.ItemClasic = count1;
Items.ItemFungi=count2;
Items.ItemVege= count3;

Items.ItemMargritaPrice = count * globalVar2[0];
Items.ItemClasicPrice = count1 * globalVar2[3];
Items.ItemFungiPrice=count2 * globalVar2[1];
Items.ItemVegePrice= count3 * globalVar2[2];

Items.ItemPrice=Items.ItemMargritaPrice+Items.ItemClasicPrice+Items.ItemFungiPrice+Items.ItemVegePrice;


const Ifa=()=>{


  if (Items.ItemMargrita>0)  {
    Items.ItemMargritaDataBase = globalVar1[3]+" "+Items.ItemMargrita+" / ";
    return(
      <>
      <Text style={{fontSize:15, fontWeight:"bold"}}>{globalVar1[3]}</Text>
      <Text style={{fontSize:15, left:365, top:-18}}>{Items.ItemMargrita}X</Text>
      </>
    )
  }else{
    return(
      <></>
    )
  }
  };
  const Ifb=()=>{
    if (Items.ItemClasicPrice>0) {
      Items.ItemClasicDataBase = globalVar1[1]+" "+Items.ItemClasic+" / ";
      return(
        <>
        <Text style={{fontSize:15, fontWeight:"bold"}}>{globalVar1[1]}</Text>
         <Text style={{fontSize:15, left:365, top:-18}}>{Items.ItemClasic}X</Text>
         </>
      )}else{
        return( 
          <></>
        )
      }
  
    };
    const Ifc=()=>{
      if (Items.ItemFungiPrice>0)  {
        Items.ItemFungiDataBase = globalVar1[2]+" "+Items.ItemFungi+" / ";
        return(
          <>
          <Text style={{fontSize:15, fontWeight:"bold"}}>{globalVar1[2]}</Text>
          <Text style={{fontSize:15, left:365, top:-18}}>{Items.ItemFungi}X</Text>
          </>
        )}else{
          return( 
            <></>
          )
        }
    
      };
      const Ifd=()=>{
        if (Items.ItemVege>0)  {
          Items.ItemVegeDataBase = globalVar1[0]+" "+Items.ItemVege+" / ";
          return(
            <>
            <Text style={{fontSize:15, fontWeight:"bold"}}>{globalVar1[0]}</Text>
            <Text style={{fontSize:15, left:365, top:-18}}>{Items.ItemVege}X</Text>
            </>
          )}else{
            return( 
              <></>
            )
          }
      
        };
    /**        <TouchableOpacity onPress={topayout}>
          <Text> a</Text>
        </TouchableOpacity>*/
        const PayButton=()=>{
         if(Items.ItemPrice >= 6){
           return(
                    
                  <View>
                  <TouchableOpacity style={{margin:10,backgroundColor: "#00a182",borderRadius: 80,paddingVertical: 10,paddingHorizontal: 12, }} onPress={pay}>
                  <Text style={{ alignItems:'center',fontSize: 25,color: "#fff",fontWeight: "bold",alignSelf: "center"}}>Order {Items.ItemCount} for {Items.ItemPrice} Eur</Text>
                  </TouchableOpacity>
                  </View>
           )
         }else{
           return( 
           <View>
            <TouchableOpacity style={{margin:10,backgroundColor: "#9dd6ca",borderRadius: 80,paddingVertical: 10,paddingHorizontal: 12, }} >
            <Text style={{ alignItems:'center',fontSize: 25,color: "#fff",fontWeight: "bold",alignSelf: "center"}}>Order {Items.ItemCount} for {Items.ItemPrice} Eur</Text>
            </TouchableOpacity>
            </View>)
         }
        
          };
return (
  <View>
   <ScrollView showsVerticalScrollIndicator={false}>
  <View>
  <Image source={require('../assets/DOMINO.jpg')} style={{width:"100%",height: 220}} />
 <View style={styles.RectangleShape}> 
 <Text style={styles.naslov}>
    DOMINOS
  </Text>
  <View>
  <Image  source={require('../assets/clock.png')} style={styles.clock} />
  <Text  style={styles.minuti}>15-20min</Text>
  </View>
  <View>
  <Image  source={require('../assets/fast-delivery.png')} style={styles.foodel} />
  <Text  style={styles.fodeltext}>FREE</Text>
  </View>
 </View>
 <Text style={{fontSize:20,color:"black", top:-120,left:15,fontStyle: 'italic'}}>
   PIZZA
 </Text>

 <View style={{borderBottomColor: '#878787', borderBottomWidth: 0.5,top:-110}}/>
 <View style={{top:-110}}>  
  <TouchableOpacity onPress={() => {setCount(count + 1)}} >
    <Text style={{fontStyle: 'italic',left:15,color:"#2894f4",fontSize:19,}}>{globalVar1[3]}</Text>
    <Text style={{fontStyle: 'italic',left:15,top:5,color:"black",fontSize:15,}}>{globalVar3[3]}</Text>
    <Text style={{fontStyle: 'italic',left:350,top:-45,color:"black",fontSize:17,}}>{globalVar2[0]}€</Text>
      <Image  source={require('../assets/plus.png')} style={{left:352,top:-35}} />
      </TouchableOpacity>
  </View>



  <View style={{top:-120}}>
  <TouchableOpacity onPress={() => {setCount1(count1 + 1)}} >
        <Text style={{fontStyle: 'italic',left:15,color:"#2894f4",fontSize:19,}}>{globalVar1[1]}</Text>
        <Text style={{fontStyle: 'italic',left:15,top:5,color:"black",fontSize:15,}}>{globalVar3[1]}</Text>
        <Text style={{fontStyle: 'italic',left:350,top:-45,color:"black",fontSize:17,}}>{globalVar2[3]}€</Text>
            <Image  source={require('../assets/plus.png')} style={{left:352,top:-35}} />
            </TouchableOpacity>
  
      </View>


      <View style={{top:-120}}>
      <TouchableOpacity onPress={() => {setCount2(count2 + 1)}} >
        <Text style={{fontStyle: 'italic',left:15,color:"#2894f4",fontSize:19,}}>{globalVar1[2]}</Text>
        <Text style={{fontStyle: 'italic',left:15,top:5,color:"black",fontSize:15,}}>{globalVar3[2]}</Text>
        <Text style={{fontStyle: 'italic',left:350,top:-45,color:"black",fontSize:17,}}>{globalVar2[1]}€</Text>
     
          <Image  source={require('../assets/plus.png')} style={{left:352,top:-35}} />
          </TouchableOpacity>

      </View>

      <View style={{top:-120}}>
      <TouchableOpacity onPress={() => {setCount3(count3 + 1)}} >
       <Text style={{fontStyle: 'italic',left:15,color:"#2894f4",fontSize:19,}}>{globalVar1[0]}</Text>
       <Text style={{fontStyle: 'italic',left:15,top:5,color:"black",fontSize:15,}}>{globalVar3[0]}</Text>
       <Text style={{fontStyle: 'italic',left:350,top:-45,color:"black",fontSize:17,}}>{globalVar2[2]}€</Text>
    
       <Image  source={require('../assets/plus.png')} style={{left:352,top:-35}} />
       </TouchableOpacity>
       <View style={{borderBottomColor: '#878787', borderBottomWidth:1,top:-10}}/>
     </View>
     <View style={{top:-120}}>
     <Ifa/>
       <Ifb/>
       <Ifc/>
       <Ifd/><View style={{borderBottomColor: '#878787', borderBottomWidth:1,top:-10}}/>
       </View>
       <View>
       <Text style={{fontSize:20,color:"black", top:-115,left:20,fontWeight:"bold"}}>
   Delivery Detlis 📋
 </Text>
       <View style={styles.comment}>
       <TextInput autoFocus={false} onChangeText={text => setComment(text)}
        style={{width:365, height: 100, backgroundColor:"#EFEFEF",borderRadius: 5,top:-100,alignSelf: 'center',textAlignVertical: 'top', borderColor: '#E6E5ED',borderWidth: 1,}}
        placeholder="Leave a comment to a delivery guy..👦"
      /></View>
       <View style={styles.container}>
      <MapView style={styles.map} region={{
      latitude: 42.6629138,
      longitude: 21.1655028,
      latitudeDelta: 0.09,
    longitudeDelta:  0.09,
    }}>
      <Marker coordinate={{latitude:42.659937,longitude: 21.167750}}  image={require('../assets/location-pin.png')}  title="Your Location"/>
 
    </MapView>
    </View>
    <Text style={{fontSize:20,color:"black", top:-60,left:25}}>
   Payment method
 </Text>
 <View style={{top:-10,}}>
 <Image  source={require('../assets/wallet.png')} style={{left:20,top:-30}} />
 <Picker style={{ width:350, color:"#595959", top:-70, left:55 }} itemStyle={{height: 555}}
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Select Paymet method"/>
  <Picker.Item label="Cacsh💸" value="cash"/>
  <Picker.Item label="Credit Card💳" value="card" />
</Picker>
        </View>
       <PayButton/>
        </View>
  </View>
  </ScrollView>




</View>
);
}

     

export default Domino


const styles = StyleSheet.create({
  RectangleShape: { 
    top:-120,
    width: "100%",
    height: 220,
   
    backgroundColor: '#fff',
    opacity: .9,
    borderRadius:15,
    borderColor:"#f2f2f2"

    },
    naslov:{
      fontStyle: 'italic',
      textAlign: "center",
      top:25,
      fontSize:30,
      color:"black"
    },
    clock:{
      width:55,
      height: 55,
      left:75,
      top:55,

    },
    foodel:{
      width:55,
      height: 55,
      left:270,
      top:-20


    },
    map: {
      width: '100%', height: 200
    },
    container:{
      alignSelf: 'center', width: 365, height: 180, borderRadius: 7, overflow: 'hidden', borderColor: '#E6E5ED',borderWidth: 1, top:-90
    },
    minuti:{
      top:64,
      left:70,
      fontSize:17,
      fontStyle: 'italic',
      color: '#2894f4',

    },
    fodeltext:{
      top:-17,
      left:280,
      fontSize:17,
      fontStyle: 'italic',
      color: '#2894f4',
    },
})
//#00b8f5  #f7685e