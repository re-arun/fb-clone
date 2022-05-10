import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/login';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Fhome from './src/Screens/fhome';


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Fhome")}>
        <Text>
          Facebook
        </Text>
      </TouchableOpacity>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Fhome">
        <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name='Login' component={Login}   options={{headerShown:false}}/>
         <Stack.Screen name='Fhome' component={Fhome} options={{headerShown:false}} />
         {/* <Stack.Screen name='Vald' component={Vald} options={{headerShown:false}} /> */}
         {/* <Stack.Screen name='Elements' component={BadgeComponent} options={{headerShown:false}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
