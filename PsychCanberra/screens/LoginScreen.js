import React, { useLayoutEffect } from 'react'
import { Image,ImageBackground, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { Button, Input, } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';

const LoginScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            // title: "",
            // headerStyle: {backgroundColor: "#F1E3D6"},
            headerShown: false

        })
    }, [])

    return (
        <View style={styles.conatiner}>
            {/* <Image 
                // animation="bounceIn"
                // duraton="1500"
                source={require('../assets/loginscreen__logo.png')}
                style={styles.logo}
                resizeMode="stretch"
            /> */}

            {/* <ImageBackground source={require('../assets/loginscreen__background.jpg')} resizeMode="cover" style={styles.bgImage}> */}
            
            <Animatable.Image 
                animation="fadeIn"
                duraton="1500"
                source={require('../assets/loginscreen__logo.png')}
                style={styles.logo}
                resizeMode="stretch"

            />



            <View style={styles.login__section}>
                
                <View style={styles.login__inner}>

                    <TextInput 
                        placeholder="Email Address..."
                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        autoCapitalize="none"
                        // onChangeText={(val) => textInputChange(val)}
                        // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                    />  
                    <TextInput 
                        placeholder="Password"
                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        autoCapitalize="none"
                        // onChangeText={(val) => textInputChange(val)}
                        // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                    />  

                    {/* Buttons */}
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            // onPress={signInHandler}
                        >
                        
                            <Text style={[styles.textSign, {  color:'#fff',  fontSize: 15}]}>
                                Login 
                            </Text>
                        
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={styles.signup}
                            onPress={() => navigation.navigate('Register')}
                        >
                        
                            <Text style={[styles.textSign, {  fontSize: 15, color:'#960028'}]}>
                                Register 
                            </Text>
                        
                        </TouchableOpacity>

                    
                    </View>


                    <View style={styles.bottomLine}/>
                    {/* <View style={styles.bottomLine}/> */}

                </View>
            </View>

            {/* </ImageBackground> */}


        </View>
    )
}



export default LoginScreen


const {height, width} = Dimensions.get("screen");
const height_logo = height * 0.1;
const width_logo = width * 0.70;

const styles = StyleSheet.create({

    conatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1E3D6',
    },

    bgImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        width: "100%",
        height: "100%",
    },

    logo: {
        width: width_logo,
        height: height_logo
    },

    login__section: {
        marginTop: 10,
        width: width * 0.70,

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",

        borderRadius: 8,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 15
    },

    login__inner: {
        width: "100%",
        marginTop: 30,

        justifyContent: 'center',
        alignItems: 'center',
    },
    
    textInput: {

        height: 35,
        width: "75%",
        paddingLeft: 10,
        color: '#05375a',

        borderColor: "#666666",
        borderWidth: 0.5,
        borderRadius: 5,

        marginBottom: 20
    },

    button: {
        alignItems: 'center',
        width: "75%",
    },

    signIn: {
        width: '100%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor:  '#960028',
        marginBottom: 11,

    },
    
    signup:{
        width: '100%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#960028",
        borderRadius: 5,
        marginBottom: 20,

        // backgroundColor:  '#960028',
    },

    bottomLine: {
        width: "75%",
        marginBottom: 20,
        borderWidth: 1,
        backgroundColor: "white",
        borderColor: "#e8e6df",
        borderRadius: 10,

    }

})
