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
import axios from 'axios';
import { Category, DirectboxSend, Image, Notification, SearchNormal1 } from 'iconsax-react-native'
import { fontType } from '../../theme';


const AddExercises = () => {
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
    const handleChange = (key, value) => {
        setexercisesData({
        ...exercisesData,
        [key]: value,
        });
    };
    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    return (
        <View style={{flex:1}}>
            <View style={{flexDirection: 'row',alignItems: 'center',padding: 20, justifyContent:'flex-end', gap: 28}}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Search")}>
                        <SearchNormal1 size="27" color="#2D2C2C"/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Mailbox")}>
                        <Notification size="27" color="#2D2C2C"/>
                    </TouchableWithoutFeedback>
                </View>
            <ScrollView>
                <TouchableOpacity>
                    <View style={{padding: 120, marginHorizontal: 30,marginVertical: 10}}>
                        <Image variant="Bold" color="#D1D1D1" size={'90'}/>
                    </View>
                </TouchableOpacity>
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
                    value={exercisesData.duration}
                    onChangeText={(text) => handleChange("duration", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.boardDescription}>
                    <TextInput
                    placeholder="URL."
                    value={exercisesData.image}
                    onChangeText={(text) => setImage(text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
            </ScrollView>
            <TouchableOpacity onPress={handleUpload} style={{backgroundColor: '#3693F4',padding: 15, flexDirection: 'row',alignItems: 'center', gap: 12, marginHorizontal: 120, borderRadius: 14, position: 'absolute', top: 670,left:192}}>
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