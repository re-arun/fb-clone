import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconm from 'react-native-vector-icons/MaterialIcons';

import Iconsf from 'react-native-vector-icons/FontAwesome5';

const {height, width} = Dimensions.get('window');
const Login = () => {
  return (
    <SafeAreaView>
      <View style={{backgroundColor: '#242526', height: height * 0.13}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 35,
                fontFamily: 'Helvetica',
              }}>
              facebook
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              left: 50,
              backgroundColor: 'grey',
              height: 40,
              width: 40,
              borderRadius: 100 / 2,
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Iconsf name="search" color={'white'} size={25} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              right: 15,
              backgroundColor: 'grey',
              height: 40,
              width: 40,
              borderRadius: 100 / 2,
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Icons name="facebook-messenger" color={'white'} size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            top: 20,
            justifyContent: 'space-between',
            
          }}>
         <View>
            <TouchableOpacity >
              <Icons name="home" color={'#4267B2'} size={36}  />
            </TouchableOpacity>
          <View style={{borderBottomWidth:5, borderBottomColor:'#4267B2' , top:9, }} >
          </View>
          </View>
          <View>
            <TouchableOpacity>
              <Iconm name="people" color={'white'} size={36} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Icons name="youtube-tv" color={'white'} size={36} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Icons name="shopping-search" color={'white'} size={36} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Icons name="bell" color={'white'} size={36} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Icons name="menu" color={'white'} size={36} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
