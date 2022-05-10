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

import WebView from 'react-native-webview';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconm from 'react-native-vector-icons/MaterialIcons';

import Iconsf from 'react-native-vector-icons/FontAwesome5';
import Login from './login';

import {FlatList} from 'react-native-gesture-handler';
// import DATA from '../data/DATA';

const {height, width} = Dimensions.get('window');
const headerHeight = 100;
const Fhome = ({navigation}) => {
  DATA = [
    {
      id: '1',
      name: 'User Name',
      src: require('../Images/story.jpg'),
      srcc: require('../Images/2.jpg'),
    },
    {
      id: '2',
      name: 'User Name',
      src: require('../Images/story.jpg'),
      srcc: require('../Images/2.jpg'),
    },

    {
      id: '3',
      name: 'User Name',
      src: require('../Images/story.jpg'),
      srcc: require('../Images/2.jpg'),
    },
    {
      id: '4',
      name: 'User Name',
      src: require('../Images/story.jpg'),
      srcc: require('../Images/2.jpg'),
    },
    {
      id: '5',
      name: 'User Name',
      src: require('../Images/story.jpg'),
      srcc: require('../Images/2.jpg'),
    },
    {
      id: '6',
      name: 'User Name',
      src: require('../Images/story.jpg'),
      srcc: require('../Images/2.jpg'),
    },
    {
      id: '7',
      name: 'User Name',
      src: require('../Images/story.jpg'),
      srcc: require('../Images/2.jpg'),
    },
    {
      id: '8',
      name: 'User Name',
      src: require('../Images/story.jpg'),
      srcc: require('../Images/2.jpg'),
    },
    {
      id: '9',
      name: 'User Name',
      src: require('../Images/story.jpg'),
      srcc: require('../Images/2.jpg'),
    },
    {
      id: '10',
      name: 'User Name',
      src: require('../Images/story.jpg'),
      srcc: require('../Images/2.jpg'),
    },
    {
      id: '11',
      name: 'User Name',
      src: require('../Images/story.jpg'),
      srcc: require('../Images/2.jpg'),
    },
    {
      id: '12',
      name: 'User Name',
      src: require('../Images/story.jpg'),
      srcc: require('../Images/2.jpg'),
    },
    {
      id: '13',
      name: 'User Name',
      src: require('../Images/story.jpg'),
      srcc: require('../Images/2.jpg'),
    },
    {
      id: '14',
      name: 'User Name',
      src: require('../Images/story.jpg'),
      srcc: require('../Images/2.jpg'),
    },
    {
      id: '15',
      name: 'User Name',
      src: require('../Images/story.jpg'),
      srcc: require('../Images/2.jpg'),
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView stickyHeaderIndices={[0]}>
        <View>
          <Login />
        </View>

        <View style={{backgroundColor: 'black', height: height * 1}}>
          {/* <ScrollView>  </ScrollView>         */}
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
                placeholder={
                  '    Write Something here... \n     यह कुछ लिखिए...'
                }
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
              <Iconm name="groups" color={'#4267B2'} size={30} />
              <Text style={{color: 'white', left: 6}}>Group</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icons name="video-plus" color={'red'} size={30} />
              <Text style={{color: 'white', left: 6}}>Live</Text>
            </View>
          </View>
          <View
            style={{top: 10, height: height / 3.4, backgroundColor: '#242527'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: width * 0.6,
              }}>
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
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <View style={{top: 20}}>
                    <View
                      style={{
                        alignSelf: 'center',
                        borderLeftWidth: 10,
                        backgroundColor: '#242527',
                      }}>
                      <Image
                        source={item.src}
                        style={{
                          width: width * 0.3,
                          borderRadius: 12,
                          height: height * 0.24,
                        }}
                      />
                      <View style={{}}>
                        <Text
                          key={'1'}
                          style={{
                            bottom: 30,
                            color: 'white',
                            fontWeight: 'bold',
                            // alignSelf: 'flex-start',
                            left: 12,
                          }}>
                          {item.name}
                        </Text>
                      </View>
                      <View>
                        <Image
                          style={{
                            width: width * 0.1,
                            borderRadius: 100 / 2,
                            height: 40,
                            bottom: 210,
                            left: 10,
                          }}
                          source={item.srcc}
                        />
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>

          <View style={{height: height * 4, backgroundColor: '#242527'}}>
            <FlatList
              nestedScrollEnabled={true}
              contentContainerStyle={{paddingBottom: headerHeight}}
              keyExtractor={item => item.id}
              data={DATA}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      width: width * 0.95,
                      alignSelf: 'center',
                      // backgroundColor: 'red',
                      top: 15,
                      height: height * 0.7,
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        style={{width: 45, height: 45, borderRadius: 100 / 2}}
                        source={item.srcc}
                      />
                      <View>
                        <Text style={{fontSize: 18, left: 5, color: 'white'}}>
                          {item.name}
                        </Text>
                      </View>

                      <View style={{flexDirection: 'row', left: 160}}>
                        <View style={{}}>
                          <Icons
                            name="dots-horizontal"
                            size={30}
                            color={'grey'}
                          />
                        </View>
                        <View style={{left: 15}}>
                          <Icons name="sword-cross" size={30} color={'grey'} />
                        </View>
                      </View>
                      <View
                        style={{
                          right: 140,
                          alignSelf: 'baseline',
                          top: 20,
                          flexDirection: 'row',
                        }}>
                        <Text>{item.id}</Text>
                        <Iconsf
                          name="globe-asia"
                          style={{left: 12}}
                          size={16}
                          color={'grey'}
                        />
                      </View>
                    </View>
                    <View style={{alignSelf: 'center'}}>
                      <View>
                        <Image source={item.src} />
                      </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View
                        style={{
                          borderRadius: 50,
                          height: 30,
                          width: 30,
                          backgroundColor: '#4267B2',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Iconm name="thumb-up" color={'white'} size={20} />
                      </View>
                      <View style={{justifyContent: 'center', left: 10}}>
                        <Text>{item.name} and 5 others</Text>
                      </View>
                    </View>
                    <View style={{height: 1, backgroundColor: 'grey'}}></View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <TouchableOpacity>
                        <View style={{flexDirection: 'row'}}>
                          <Icons
                            name="thumb-up-outline"
                            size={30}
                            color={'grey'}
                          />

                          <View style={{justifyContent: 'center'}}>
                            <Text style={{color: 'grey', left: 10}}>Like</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <View style={{flexDirection: 'row'}}>
                          <Icons
                            name="comment-outline"
                            size={30}
                            color={'grey'}
                          />
                          <View style={{justifyContent: 'center'}}>
                            <Text style={{color: 'grey', left: 10}}>
                              Comment
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <View style={{flexDirection: 'row'}}>
                          <Icons
                            name="share-outline"
                            size={30}
                            color={'grey'}
                          />
                          <View style={{justifyContent: 'center'}}>
                            <Text style={{color: 'grey', left: 10}}>Share</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        height: 20,
                        backgroundColor: 'black',
                        width: width / 1,
                        alignSelf: 'center',
                      }}></View>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View style={{height: height * 0.6, backgroundColor: 'red'}}>
          <WebView
            source={{
              uri: 'https://github.com/facebook/react-native',
            }}
            style={{marginTop: 20}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Fhome;

const styles = StyleSheet.create({
  mg: {
    marginTop: 12,
  },
});
