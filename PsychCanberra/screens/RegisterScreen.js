import React, { useLayoutEffect } from 'react'
import { Image,ImageBackground, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { Button, Input, } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from "react-native-vector-icons/Feather";

const RegisterScreen = ({navigation}) => {

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

            <ImageBackground source={require('../assets/loginscreen__background.jpg')} resizeMode="cover" style={styles.bgImage}>
            

                <Text style={styles.heading}>
                    Register With Us
                </Text>

                <View style={styles.login__section}>
                    <View style={styles.login__inner}>
                        
                        
                        <View style={styles.field}>
                            <View style={styles.iconContainer}>
                               <FontAwesome name="user" style={{fontSize: 20, color: "#960028"}} />
                            </View>
                            
                            <View style={styles.textInputcontainer}>
                                <TextInput
                                    // onFocus= {styles.onfocusTextInput} 
                                    style=  {styles.textInput}
                                    placeholder="Name"
                                    placeholderTextColor="#666666"
                                    autoCapitalize="none"
                                    // onChangeText={(val) => textInputChange(val)}
                                    // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                                />
                            </View>
                        </View>
                        
                        <View style={styles.field}>
                            <View style={styles.iconContainer}>
                               <FontAwesome name="envelope" style={{fontSize: 20, color: "#960028"}} />
                            </View>
                            
                            <View style={styles.textInputcontainer}>
                                <TextInput 
                                    style=  {styles.textInput}
                                    placeholder="Email"
                                    placeholderTextColor="#666666"
                                    autoCapitalize="none"
                                    // onChangeText={(val) => textInputChange(val)}
                                    // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                                />
                            </View>
                        </View>

                        
                        <View style={styles.field}>
                            <View style={styles.iconContainer}>
                               <FontAwesome name="phone" style={{fontSize: 20, color: "#960028"}} />
                            </View>
                            
                            <View style={styles.textInputcontainer}>
                                <TextInput 
                                    style=  {styles.textInput}
                                    placeholder="Contact No."
                                    placeholderTextColor="#666666"
                                    autoCapitalize="none"
                                    // onChangeText={(val) => textInputChange(val)}
                                    // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                                />
                            </View>
                        </View>

                        
                        <View style={styles.field}>
                            <View style={styles.iconContainer}>
                               <FontAwesome name="user-o" style={{fontSize: 20, color: "#960028"}} />
                            </View>
                            
                            <View style={styles.textInputcontainer}>
                                <TextInput 
                                    style=  {styles.textInput}
                                    placeholder="Username"
                                    placeholderTextColor="#666666"
                                    autoCapitalize="none"
                                    // onChangeText={(val) => textInputChange(val)}
                                    // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                                />
                            </View>
                        </View>

                        
                        <View style={styles.field}>
                            <View style={styles.iconContainer}>
                               <FontAwesome name="venus-mars" style={{fontSize: 20, color: "#960028"}} />
                            </View>
                            
                            <View style={styles.textInputcontainer}>
                                <TextInput 
                                    style=  {styles.textInput}
                                    placeholder="Gender"
                                    placeholderTextColor="#666666"
                                    autoCapitalize="none"
                                    // onChangeText={(val) => textInputChange(val)}
                                    // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                                />
                            </View>
                        </View>

                        
                        <View style={styles.field}>
                            <View style={styles.iconContainer}>
                               <FontAwesome name="lock" style={{fontSize: 20, color: "#960028"}} />
                            </View>
                            
                            <View style={styles.textInputcontainer}>
                                <TextInput 
                                    style=  {styles.textInput}
                                    placeholder="Password"
                                    placeholderTextColor="#666666"
                                    autoCapitalize="none"
                                    // onChangeText={(val) => textInputChange(val)}
                                    // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                                />
                            </View>
                        </View>

                                  
                        <View style={styles.field}>
                            <View style={styles.iconContainer}>
                               <FontAwesome name="lock" style={{fontSize: 20, color: "#960028"}} />
                            </View>
                            
                            <View style={styles.textInputcontainer}>
                                <TextInput 
                                    style=  {styles.textInput}
                                    placeholder="Confirm Password"
                                    placeholderTextColor="#666666"
                                    autoCapitalize="none"
                                    // onChangeText={(val) => textInputChange(val)}
                                    // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                                />
                    
                            </View>
                        </View>

                        
                    <View style={styles.button}>

                        <TouchableOpacity
                            style={styles.signup}
                            // onPress={signupHandler}
                        >
                        
                            <Text style={{  color:'#fff',  fontSize: 15}}>
                                Sign Up 
                            </Text>
                        
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={styles.login}
                            onPress={() => navigation.navigate('Login')}
                        >
                        
                            <Text style={ {fontSize: 18, fontWeight: "bold", color:'#960028'}}>
                                Already have an account?
                            </Text>
                        
                        </TouchableOpacity>

                    
                    </View>
                        
                    </View>
                </View> 


{/*  
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

                </View>
            </View>
*/}
            </ImageBackground>


        </View>
    )
}



export default RegisterScreen


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

    heading: {
        fontSize: 30,
        color: "#960028",
        textTransform: "uppercase",
        fontWeight: "bold",
    },

    login__section: {
        marginTop: 10,
        width: width * 0.90,

        justifyContent: 'center',
        alignItems: 'center',

        // borderWidth: 2,
        // borderColor: "#960028",

    },

    login__inner: {
        width: "100%",
        marginTop: 30,

        justifyContent: 'center',
        alignItems: 'center',
    },

    field: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 20,

    },


    iconContainer: {
        height: 35,
        width: "10%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#f1e3d6",
    },

    
    textInputcontainer: {

        // height: 35,
        width: "90%",
        paddingLeft: 10,
        color: '#05375a',
        backgroundColor: "#fff",

        borderColor: "#F1E3D6",
        borderWidth: 1,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        
    },


    textInput: {
        height: 35,
        color: '#05375a',

    },

    onfocusTextInput: {
        
        borderRadius: 8,

        shadowColor: '#960028',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 15
    },  

    button: {
        alignItems: 'center',
        width: "100%",
    },

    signup: {
        width: '35%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:  '#960028',
        marginBottom: 20,

    },
    
    
    // textInput: {

    //     height: 35,
    //     width: "75%",
    //     paddingLeft: 10,
    //     color: '#05375a',

    //     borderColor: "#666666",
    //     borderWidth: 0.5,
    //     borderRadius: 5,

    //     marginBottom: 20
    // },

    // button: {
    //     alignItems: 'center',
    //     width: "75%",
    // },

    // signIn: {
    //     width: '100%',
    //     height: 35,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius: 5,
    //     backgroundColor:  '#960028',
    //     marginBottom: 11,

    // },
    
    // signup:{
    //     width: '100%',
    //     height: 35,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderWidth: 1,
    //     borderColor: "#960028",
    //     borderRadius: 5,
    //     marginBottom: 20,

    // },

    // bottomLine: {
    //     width: "75%",
    //     marginBottom: 20,
    //     borderWidth: 1,
    //     backgroundColor: "white",
    //     borderColor: "#e8e6df",
    //     borderRadius: 10,

    // }

})
