import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from './screens/loginscreen';
import HomeScreen from './screens/home';
import Main from './screens/main';
import Register from './screens/register';
import Domino from './screens/domino';
import PayOut from './screens/payout';


const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}}  name="Main" component={Main} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={Loginscreen} />
        <Stack.Screen options={{headerShown:false}} name="Domino" component={Domino} />
        <Stack.Screen options={{headerShown:false}} name="PayOut" component={PayOut} />
        <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
