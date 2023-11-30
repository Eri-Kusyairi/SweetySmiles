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
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: 'white',
  },
});

export default SearchBar;
