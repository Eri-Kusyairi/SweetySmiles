<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 05882bc9ef16999b31ea1e643f48ba97a7c9ee8b
>>>>>>> 72216da27aa111b3f397de55c22243be0eaa477f
import { SearchNormal,Add } from 'iconsax-react-native';
import React, { useEffect,useRef } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity,Animated } from 'react-native';

const SearchBar = ({ searchPhrase, setSearchPhrase }) => {
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <Animated.View style={[styles.container,{
      gap: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 12],
        }),
      },]}>
      <Animated.View style={[styles.content,{
          transform: [
              {
                scale: animation.interpolate({
                  inputRange: [0, 0.8, 1],
                  outputRange: [0, 1.2, 1],
                }),
              },
            ],
          }]}>
      <TouchableOpacity>
          <SearchNormal size="18"  color="#2D2C2C" style={styles.icon}/>
      </TouchableOpacity>
      <TextInput
        style={{ marginLeft: 1, flex: 1,marginVertical: 2, }} // Style untuk TextInput
        placeholder="Search" value={searchPhrase} onChangeText={setSearchPhrase} borderWidth={0}
        underlineColorAndroid="transparent"
        autoCorrect={false}
        autoFocus={true}
      />
      {searchPhrase && (
          <TouchableOpacity onPress={() => setSearchPhrase("")}>
          <View style={{marginLeft: -38}}>
            <Add
              size={18}
              color={'black'}
              variant="Linear"
              style={{ transform: [{ rotate: "45deg" }] }}
            />
          </View>
        </TouchableOpacity>
      )}
      </Animated.View>
    </Animated.View>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Cari"
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
<<<<<<< HEAD
      <TouchableOpacity>
        <Icon name="search" size={18} color="black" />
=======
      <TouchableOpacity style={styles.icon} onPress={handleSearch}>
        <Icon name="search" size={18} color="white" />
>>>>>>> 2d33a076c62977b208dbcf52eeabf9e63611b5cc
      </TouchableOpacity>
    </View>
>>>>>>> 2e48899d8d242a14227957853f46c263c4238d3d
>>>>>>> 05882bc9ef16999b31ea1e643f48ba97a7c9ee8b
>>>>>>> 72216da27aa111b3f397de55c22243be0eaa477f
  );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 05882bc9ef16999b31ea1e643f48ba97a7c9ee8b
>>>>>>> 72216da27aa111b3f397de55c22243be0eaa477f
  content:{
    flexDirection: 'row', 
    alignItems: 'center' ,
  },
  icon: {
    marginHorizontal: 20,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 30,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 35,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
  container: {
    backgroundColor: 'white',
<<<<<<< HEAD
    borderRadius: 30,
    marginHorizontal: 20,
    marginVertical: 20,
=======
    borderRadius: 10,
>>>>>>> 2d33a076c62977b208dbcf52eeabf9e63611b5cc
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
<<<<<<< HEAD
  input: {
    flex: 1,
    height: 35,
=======
  icon: {
    padding: 10,
    backgroundColor: '#98CA79',
    borderRadius: 50,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 50,
>>>>>>> 2d33a076c62977b208dbcf52eeabf9e63611b5cc
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
>>>>>>> 2e48899d8d242a14227957853f46c263c4238d3d
>>>>>>> 05882bc9ef16999b31ea1e643f48ba97a7c9ee8b
>>>>>>> 72216da27aa111b3f397de55c22243be0eaa477f
    backgroundColor: 'white',
  },
});

export default SearchBar;
