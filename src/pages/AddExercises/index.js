import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback
} from "react-native";
<<<<<<< HEAD
import { Category, DirectboxSend, Image, Notification, SearchNormal1,AddSquare, Add } from 'iconsax-react-native'
import { fontType } from '../../theme';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import FastImage from "react-native-fast-image";


const AddExercises = () => {
    const [loading, setLoading] = useState(false);
    const [exercisesData, setExercisesData] = useState({
        title: "",
        description: "",
        image: "",
        duration: "",
        totalLikes: 0,
        totalComments: 0,
        createdAt: "",
    });
    const handleImagePick = async () => {
        ImagePicker.openPicker({
          width: 1920,
          height: 1080,
          cropping: true,
        })
          .then(image => {
            console.log(image);
            setImage(image.path);
          })
          .catch(error => {
            console.log(error);
          });
      };
    const handleUpload = async () => {
        let filename = image.substring(image.lastIndexOf('/') + 1);
        const extension = filename.split('.').pop();
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;
        const reference = storage().ref(`excersisesimage/${filename}`);
        setLoading(true);
        try {
        await reference.putFile(image);
        const url = await reference.getDownloadURL();
        await firestore().collection('exercises').add({
            title: exercisesData.title,
            description: exercisesData.description,
            image: url,
            duration: exercisesData.duration,
            totalComments: exercisesData.totalComments,
            totalLikes: exercisesData.totalLikes,
            createdAt: new Date(),
        });
        setLoading(false);
        console.log('Excercises added!');
        navigation.navigate('Exercises');
        } catch (error) {
        console.log(error);
        }
        };
    const handleChange = (key, value) => {
        setExercisesData({
=======
<<<<<<< HEAD
import axios from 'axios';
=======
>>>>>>> 05882bc9ef16999b31ea1e643f48ba97a7c9ee8b
import { Category, DirectboxSend, Image, Notification, SearchNormal1 } from 'iconsax-react-native'
import { fontType } from '../../theme';


const AddExercises = () => {
<<<<<<< HEAD
    const [loading, setLoading] = useState(false);
    const [exercisesData, setexercisesData] = useState({
        title: "",
        description: "",
        duration: "",
        totalLikes: 0,
        totalComments: 0,
    });
    const handleUpload = async () => {
        setLoading(true);
        try {
          await axios.post('https://656c291ce1e03bfd572e06b1.mockapi.io/exercises', {
              title: exercisesData.title,
              description: exercisesData.description,
              duration: exercisesData.duration,
              image,
              totalComments: exercisesData.totalComments,
              totalLikes: exercisesData.totalLikes,
              createdAt: new Date(),
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          setLoading(false);
          navigation.navigate('Exercises');
        } catch (e) {
          console.log(e);
        }
      };
=======
    const [exercisesData, setexercisesData] = useState({
        title: "",
        description: "",
        category: {},
        durasi: "",
        totalLikes: 0,
        totalComments: 0,
    });
>>>>>>> 05882bc9ef16999b31ea1e643f48ba97a7c9ee8b
    const handleChange = (key, value) => {
        setexercisesData({
>>>>>>> 72216da27aa111b3f397de55c22243be0eaa477f
        ...exercisesData,
        [key]: value,
        });
    };
    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    return (
<<<<<<< HEAD
        <View style={{flex:1}}>
=======
<<<<<<< HEAD
        <View style={{flex:1}}>
=======
        <View>
>>>>>>> 05882bc9ef16999b31ea1e643f48ba97a7c9ee8b
>>>>>>> 72216da27aa111b3f397de55c22243be0eaa477f
            <View style={{flexDirection: 'row',alignItems: 'center',padding: 20, justifyContent:'flex-end', gap: 28}}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Search")}>
                        <SearchNormal1 size="27" color="#2D2C2C"/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Mailbox")}>
                        <Notification size="27" color="#2D2C2C"/>
                    </TouchableWithoutFeedback>
                </View>
            <ScrollView>
<<<<<<< HEAD
            {image ? (
          <View style={{position: 'relative'}}>
            <FastImage
              style={{width: '100%', height: 127, borderRadius: 5}}
              source={{
                uri: image,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                backgroundColor: 'blue',
                borderRadius: 25,
              }}
              onPress={() => setImage(null)}>
              <Add
                size={20}
                variant="Linear"
                color="white"
                style={{transform: [{rotate: '45deg'}]}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={handleImagePick}>
            <View
              style={[
                textInput.borderDashed,
                {
                  gap: 10,
                  paddingVertical: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <AddSquare color="" variant="Linear" size={42} />
              <Text
                style={{
                  fontFamily: fontType['PRM-Regular'],
                  fontSize: 12,
                  color: 'gray',
                }}>
                Upload Thumbnail
              </Text>
            </View>
          </TouchableOpacity>
        )}
=======
                <TouchableOpacity>
                    <View style={{padding: 120, marginHorizontal: 30,marginVertical: 10}}>
                        <Image variant="Bold" color="#D1D1D1" size={'90'}/>
                    </View>
                </TouchableOpacity>
>>>>>>> 72216da27aa111b3f397de55c22243be0eaa477f
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Nama Latihan"
                    value={exercisesData.title}
                    onChangeText={(text) => handleChange("title", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.boardDescription}>
                    <TextInput
                    placeholder="Deskripsi Latihan."
                    value={exercisesData.description}
                    onChangeText={(text) => handleChange("description", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.boardDescription}>
                    <TextInput
                    placeholder="Durasi Latihan."
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 72216da27aa111b3f397de55c22243be0eaa477f
                    value={exercisesData.duration}
                    onChangeText={(text) => handleChange("duration", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
<<<<<<< HEAD
            </ScrollView>
            <TouchableOpacity onPress={handleUpload} style={{backgroundColor: '#3693F4',padding: 15, flexDirection: 'row',alignItems: 'center', gap: 12, marginHorizontal: 120, borderRadius: 14, position: 'absolute', top: 670,left:192}}>
=======
                <View style={textInput.boardDescription}>
                    <TextInput
                    placeholder="URL."
                    value={exercisesData.image}
                    onChangeText={(text) => setImage(text)}
=======
                    value={exercisesData.durasi}
                    onChangeText={(text) => handleChange("description", text)}
>>>>>>> 05882bc9ef16999b31ea1e643f48ba97a7c9ee8b
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
            </ScrollView>
<<<<<<< HEAD
            <TouchableOpacity onPress={handleUpload} style={{backgroundColor: '#3693F4',padding: 15, flexDirection: 'row',alignItems: 'center', gap: 12, marginHorizontal: 120, borderRadius: 14, position: 'absolute', top: 670,left:192}}>
=======
            <TouchableOpacity style={{backgroundColor: '#3693F4',padding: 15, flexDirection: 'row',alignItems: 'center', gap: 12, marginHorizontal: 120, borderRadius: 14, position: 'absolute', top: 670,left:192}}>
>>>>>>> 05882bc9ef16999b31ea1e643f48ba97a7c9ee8b
>>>>>>> 72216da27aa111b3f397de55c22243be0eaa477f
                <DirectboxSend variant="Bold" color="white" size={'30'}/>
            </TouchableOpacity>
        </View>
    )
}

export default AddExercises

const styles = StyleSheet.create({})
const textInput = StyleSheet.create({
    title:{
        fontSize: 14,
    },
    board: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    boardDescription: {
        padding: 10,
        marginVertical: 10,
        marginTop: -5,
        marginHorizontal: 20,
    }
})