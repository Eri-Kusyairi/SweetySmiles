<<<<<<< HEAD
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
import React, { useState,useRef } from 'react';
import Slider from '../../../components/Slider';
import { useNavigation } from "@react-navigation/native";
=======
<<<<<<< HEAD
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
import React, { useState,useRef } from 'react';
=======
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
>>>>>>> 2d33a076c62977b208dbcf52eeabf9e63611b5cc
import SearchBar from '../../../components/SearchBar';
import Slider from '../../../components/Slider';
>>>>>>> 2e48899d8d242a14227957853f46c263c4238d3d
import SLIDER1 from '../../assets/images/SLIDER1.jpeg';
import SLIDER2 from '../../assets/images/SLIDER2.jpeg';
import SLIDER3 from '../../assets/images/SLIDER3.jpeg';
import { fontType } from '../../theme';
<<<<<<< HEAD
import { Category } from 'iconsax-react-native';
const Exercises = () => {
  const navigation = useNavigation();
=======

const Exercises = () => {
<<<<<<< HEAD
>>>>>>> 2e48899d8d242a14227957853f46c263c4238d3d
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
  const recentY = diffClampY.interpolate({
      inputRange: [0, 142],
      outputRange: [0, -142],
      extrapolate: 'clamp',
    });
  const [sliderImages] = useState([SLIDER1, SLIDER2, SLIDER3]);
  return (
<<<<<<< HEAD
    <View>
<Animated.ScrollView
=======
    <Animated.ScrollView
>>>>>>> 2e48899d8d242a14227957853f46c263c4238d3d
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{paddingTop: 1}}>
<<<<<<< HEAD
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Animated.View style={{padding: 20,marginVertical: 10,borderRadius: 14,backgroundColor: 'white',marginHorizontal: 8,transform: [{translateY: recentY}]}}>
            <Text>Cari...</Text>
        </Animated.View>
      </TouchableOpacity>
      
      <View style={{flexDirection: 'row', padding: 10, justifyContent: 'center', gap: 10, marginTop: -6}}>
        <TouchableOpacity>
          <View style={{padding: 12, backgroundColor: 'white',borderRadius: 20}}>
=======
      <Animated.View style={{transform: [{translateY: recentY}]}}>
          <SearchBar/>
      </Animated.View>
      <View style={{flexDirection: 'row', padding: 10, justifyContent: 'center', gap: 10}}>
        <TouchableOpacity>
          <View style={{padding: 12, backgroundColor: 'white',borderRadius: 20}}>
=======
  const [sliderImages] = useState([SLIDER1, SLIDER2, SLIDER3]);
  return (
    <ScrollView>
      <SearchBar/>
      <View style={{flexDirection: 'row', padding: 10, justifyContent: 'center', gap: 20}}>
        <TouchableOpacity>
          <View style={{padding: 20, backgroundColor: 'white',borderRadius: 20}}>
>>>>>>> 2d33a076c62977b208dbcf52eeabf9e63611b5cc
>>>>>>> 2e48899d8d242a14227957853f46c263c4238d3d
            <Text style={{fontFamily: fontType['PRM-Medium'], fontSize: 16, marginHorizontal: 6}}>Tipe</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
<<<<<<< HEAD
          <View style={{padding: 12, backgroundColor: 'white',borderRadius: 20}}>
=======
<<<<<<< HEAD
          <View style={{padding: 12, backgroundColor: 'white',borderRadius: 20}}>
=======
          <View style={{padding: 20, backgroundColor: 'white',borderRadius: 20}}>
>>>>>>> 2d33a076c62977b208dbcf52eeabf9e63611b5cc
>>>>>>> 2e48899d8d242a14227957853f46c263c4238d3d
            <Text style={{fontFamily: fontType['PRM-Medium'], fontSize: 16, marginHorizontal: 6}}>Peralatan</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
<<<<<<< HEAD
          <View style={{padding: 12, backgroundColor: 'white',borderRadius: 20}}>
=======
<<<<<<< HEAD
          <View style={{padding: 12, backgroundColor: 'white',borderRadius: 20}}>
=======
          <View style={{padding: 20, backgroundColor: 'white',borderRadius: 20}}>
>>>>>>> 2d33a076c62977b208dbcf52eeabf9e63611b5cc
>>>>>>> 2e48899d8d242a14227957853f46c263c4238d3d
            <Text style={{fontFamily: fontType['PRM-Medium'], fontSize: 16, marginHorizontal: 6}}>Otot</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Slider images={sliderImages} />
      <Slider images={sliderImages} />
<<<<<<< HEAD
    </Animated.ScrollView>
    <TouchableOpacity style={{padding: 20, position:'absolute', top: 630,right: 20, backgroundColor:'white',borderRadius: 20}} onPress={() => navigation.navigate("AddExercises")}>
        <Category size="18"  color="#2D2C2C" variant='Linear'/>
    </TouchableOpacity>
    </View>
=======
<<<<<<< HEAD
    </Animated.ScrollView>
=======
    </ScrollView>

>>>>>>> 2d33a076c62977b208dbcf52eeabf9e63611b5cc
>>>>>>> 2e48899d8d242a14227957853f46c263c4238d3d
  )
  }
export default Exercises
const styles = StyleSheet.create({})