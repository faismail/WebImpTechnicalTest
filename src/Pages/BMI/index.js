import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { Content, CardItem, Container, Text, Form, View, Textarea, Picker, Col, Icon, Button} from 'native-base';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { background } from '../../Assets/Images/index';
import LinearGradient from 'react-native-linear-gradient';

const BMI = ({navigation}) => {
    
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [BMI, setBMI] = useState('');

    const calculateBMI = () => {
        setBMI( weight / height / height * 10000);
    }

    function cekBMI(BMI){

        if (BMI>=0&&BMI<=1){
            return <Text  style={styles.buttonText}>
                        Please Input Your Weight and Height
                    </Text>
         }
        else if (BMI<18.5){
            return <Text  style={styles.buttonText}>
                        You are Underweight
                    </Text>
         }
         else if (BMI>=18.5&&BMI<25){
            return <Text  style={styles.buttonText}>
                        You are Normal Weight
                    </Text>
         }
         else if (BMI>=25&&BMI<30){
            return <Text  style={styles.buttonText}>
                        You are Overweight
                    </Text>
         }
         else if (BMI>=30){
            return <Text  style={styles.buttonText}>
                        You are Obese
                    </Text>
            
         }
         else {
            return <Text  style={styles.buttonText}>
                        Incorrect Input
                    </Text>
         }
    }

    
  return (
    <Container style={styles.container}>
    <ImageBackground  style={styles.backgroundImage} source={background}>

            <View style={{width:"100%", height:'10%', alignItems:'center',  justifyContent:'center',  }}>

                <Text  style={{fontFamily: 'Avenir Next', fontSize: RFValue(25, 680), color: 'white'}}>
                        BMI Calculator
                </Text>
                          
            </View>

            <Col style={{width:"100%", height:'60%', justifyContent:'center'  }}>
                <View style={{ alignItems:'center' }}>

                    <LinearGradient useAngle={true}
                            angle={0}
                            colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.3)']}
                            locations={[0, 0]}
                            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                            style={styles.formInput}>
                            <TextInput  style={styles.formText}
                                        placeholder="Weight (Kg)"
                                        placeholderTextColor = "white"
                                        selectionColor="white"
                                        spellCheck={false}
                                        autoCorrect={false}
                                        onChangeText={(value)=>setWeight(value)}
                                        />
                    </LinearGradient>
                    <LinearGradient useAngle={true}
                            angle={0}
                            colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.3)']}
                            locations={[0,0.8]}
                            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                            style={styles.formInput}>
                            <TextInput  style={styles.formText}
                                        placeholder="Height (Cm)"
                                        placeholderTextColor = "white"
                                        selectionColor="white"
                                        onChangeText={(value)=>setHeight(value)}
                                        />
                    </LinearGradient>
                </View>

                <LinearGradient useAngle={true}
                            angle={0}
                            colors={[ 'rgba(255, 255, 255, 0.2)', '#ff8c00', 'grey']}
                            locations={[0, 0.8, 0.05]}
                            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                            style={styles.button}>
                <TouchableOpacity style={styles.button} onPress={calculateBMI}>
                    <Text style={styles.buttonText}> Calculate </Text>
                </TouchableOpacity>
                </LinearGradient>

                <LinearGradient useAngle={true}
                            angle={0}
                            colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.3)']}
                            locations={[0, 0.8]}
                            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                            style={styles.BMIanswer}>
                        <Text  style={styles.buttonText}>
                            {BMI}
                        </Text>
                            {cekBMI(BMI)}
                </LinearGradient>

            </Col>
            <LinearGradient useAngle={true}
                            angle={0}
                            colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.3)']}
                            locations={[0, 0.8]}
                            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                            style={styles.button}>
                <TouchableOpacity  style={styles.button} onPress={()=>navigation.navigate('SmallNumber')}>
                    <Text style={styles.buttonText}> Next Task </Text>
                </TouchableOpacity>
            </LinearGradient>
    </ImageBackground>
    </Container>

  );
}

const styles = StyleSheet.create({

    container: {
        flex: 0,
        flexGrow:1,
        flexDirection:'row',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },

    backgroundImage: {
        flex: 0,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },

    formInput:{
        width: RFPercentage(46),
        height: RFPercentage(7),
        flexDirection:'row',
        borderWidth:1,
        borderColor:'grey',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 22,
        marginVertical: '3%',
    },

    BMIanswer:{
        width: RFPercentage(46),
        height: RFPercentage(15),
        flexDirection:'column',
        borderWidth:1,
        borderColor:'grey',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 22,
        marginVertical: '3%',
    },

    formText: {
        width: RFPercentage(38),
        fontFamily: 'Avenir Next',
        fontSize: RFValue(16, 680),
        color: 'white',
        marginLeft:'10%'
    },

    button: {
        width: RFPercentage(25),
        height: RFPercentage(6),
        backgroundColor: 'transparent',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'grey',
        alignSelf:'center',
        borderRadius: 20,
        marginVertical: '5%',
    },

    buttonText: {
        fontFamily: 'Avenir Next',
        flexDirection:'column',
        fontSize: RFValue(18, 680),
        color: 'white',
        marginVertical:'3%'
    },

    BMIAnswerText: {
        fontFamily: 'Avenir Next',
        fontSize: RFValue(16, 680),
        color: 'white',
    },
});

export default BMI