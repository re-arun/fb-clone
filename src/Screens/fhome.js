import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconm from 'react-native-vector-icons/MaterialIcons';

import Iconsf from 'react-native-vector-icons/FontAwesome5';
import Login from './login';
import NativeHeadlessJsTaskSupport from 'react-native/Libraries/ReactNative/NativeHeadlessJsTaskSupport';
import {FlatList} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('window');
const Fhome = ({navigation}) => {
  DATA = [
    {
      id: '1',
      name: 'Helloo',
      src: require('../Images/avtar.webp'),
      srcc: require('../Images/2.jpg'),
    },
    {
      id: '2',
      name: 'Helloo',
      src: require('../Images/avtar.webp'),
      srcc: require('../Images/2.jpg'),
    },

    {
      id: '3',
      name: 'Helloo',
      src: require('../Images/avtar.webp'),
      srcc: require('../Images/2.jpg'),
    },
    {
      id: '4',
      name: 'Helloo',
      src: require('../Images/avtar.webp'),
      srcc: require('../Images/2.jpg'),
    },
    {
      id: '5',
      name: 'Helloo',
      src: require('../Images/avtar.webp'),
      srcc: require('../Images/2.jpg'),
    },
    {
      id: '6',
      name: 'Helloo',
      src: require('../Images/avtar.webp'),
      srcc: require('../Images/2.jpg'),
    },
    {
      id: '7',
      name: 'Helloo',
      src: require('../Images/avtar.webp'),
      srcc: require('../Images/2.jpg'),
    },
    {
      id: '8',
      name: 'Helloo',
      src: require('../Images/avtar.webp'),
      srcc: require('../Images/2.jpg'),
    },
  ];

  return (
    <SafeAreaView>
      <Login />
      <View style={{backgroundColor: 'black', height: height * 1}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#242527',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              height: height * 0.1,
              justifyContent: 'center',
            }}>
            <Image
              source={require('../Images/avtar.webp')}
              style={{
                height: height / 15,
                width: width / 7,
                //   left: 12,
                borderRadius: 100 / 2,
              }}
            />
          </View>
          <View
            style={{
              // backgroundColor: 'yellow',
              height: height / 11,
              width: width * 0.6,
              // alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <TextInput
              multiline={true}
              placeholder={'    Write Something here... \n     यह कुछ लिखिए...'}
              placeholderTextColor={'white'}
              style={{
                height: height * 0.06,
                flexWrap: 'wrap',
                borderRadius: 100 / 2,
                borderColor: 'grey',
                borderWidth: 1,
                color: 'white',
              }}
            />
          </View>
          <View style={{justifyContent: 'center'}}>
            <Iconm name="photo-library" color={'green'} size={25} />
          </View>
        </View>
        <View
          style={{
            height: height * 0.08,
            backgroundColor: 'rgb(53,53,53)',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icons name="youtube-tv" color={'pink'} size={30} />
            <Text style={{color: 'white', left: 6}}>Reel</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Iconm name="video-call" color={'purple'} size={30} />
            <Text style={{color: 'white', left: 6}}>Room</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Iconm name="groups" color={'blue'} size={30} />
            <Text style={{color: 'white', left: 6}}>Group</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icons name="video-plus" color={'red'} size={30} />
            <Text style={{color: 'white', left: 6}}>Live</Text>
          </View>
        </View>
        <View
          style={{top: 10, height: height / 2.8, backgroundColor: '#242527'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{}}>
              <Text style={{color: 'grey'}}>Stories</Text>
            </View>
            <View>
              <Text style={{color: 'grey'}}>Rooms</Text>
            </View>
            <View>
              <Text style={{color: 'grey'}}>Reels</Text>
            </View>
          </View>
          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={({item}) => {
              return (
                <View style={{top: 20}}>
                  <View>
                    <Image
                      style={{
                        width: width * 0.1,
                        borderRadius: 100 / 2,
                        height: 50,
                      }}
                      source={item.srcc}
                    />
                  </View>
                  <View style={{alignSelf: 'center'}}>
                    <Image
                      source={item.src}
                      style={{
                        width: width * 0.3,
                        borderRadius: 12,
                        height: height * 0.24,
                      }}
                    />
                    <View>
                      <Text style={{color: 'white', alignSelf: 'center'}}>
                        {item.name}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Fhome;

const styles = StyleSheet.create({});
