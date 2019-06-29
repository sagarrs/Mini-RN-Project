import React from 'react'
import {View, Text, TextInput, Button, ImageBackground, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import img from '../../images/54583abf39ba185.jpg'

const {width: WIDTH} = Dimensions.get('window')
class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            showPass: true,
            press: false
        }
    }

    showPass = () => {
        if(this.state.press == false){
            this.setState(() => ({
                showPass: false,
                press: true
            }))
        }else{
            this.setState(() => ({
                showPass: true,
                press: false
            }))
        }
    }

    render(){
        return(
            <ImageBackground source={img} style={styles.backgroundContainer}>
                <View style={{marginBottom: 10}}>
                   <Icon size={28} name="md-person" color="white" style={styles.inputIcon}/>
                   <TextInput
                    style={styles.input}
                    placeholder="username"
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    />
                </View>
                <View style={{marginBottom: 10}}>
                   <Icon size={28} name="md-lock" color="white" style={styles.inputIcon}/>
                   <TextInput
                    style={styles.input}
                    placeholder="password"
                    secureTextEntry={this.state.showPass}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    />
                    <TouchableOpacity style={styles.btnEye} onPress={this.showPass}>
                        <Icon name={this.state.press == false ? "md-eye" : "md-eye-off"} size={26} color="white"/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.btnTxt} onPress={() => this.props.navigation.navigate('list')}>Login</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        width: null,
        height: null,
        alignItems: 'center'
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        paddingLeft: 45,
        backgroundColor: 'rgba(192,192,192,0.5)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25
    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 37,   
    },
    btnEye: {
        position: 'absolute',
        top: 8,
        right: 37,  
    },
    btnLogin:{
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        backgroundColor: 'rgba(192,192,192,0.5)',
        justifyContent: 'center'
    },
    btnTxt: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
        textAlign: 'center'
    }
})

export default Home