import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { Content, CardItem, Container, Text, Form, View, Textarea, Picker, Col, Icon, Button} from 'native-base';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { background } from '../../Assets/Images/index';
import LinearGradient from 'react-native-linear-gradient';


const SmallNumber = () => {

    const [number, SetNumber] = useState([ "5408", "6604", "32158", "84984", "8774", "34871"]);
    const [order, setOrder] = useState('');
    const [result, setResult] = useState('');

    const findNumber = () => {
        if (order > number.length) {
            alert("Not Found")
        }
        else {
            let min = number.slice().sort((a, b) => a - b).slice(0, (order));
            let lastItem = (min[min.length - 1])
            console.log(order)
            setResult(lastItem)
        }
    }

    return (
        <Container style={styles.container}>
        <ImageBackground  style={styles.backgroundImage} source={background}>
    
                <View style={{width:"100%", height:'10%', alignItems:'center',  justifyContent:'center',  }}>
    
                    <Text  style={{fontFamily: 'Avenir Next', fontSize: RFValue(25, 680), color: 'white'}}>
                           Small Number in Array
                    </Text>
                              
                </View>
    
                <Col style={{width:"100%", height:'60%', justifyContent:'center'  }}>
                    <View style={{ alignItems:'center', }}>
                        <LinearGradient useAngle={true}
                            angle={0}
                            colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.3)']}
                            locations={[0, 0]}
                            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                            style={styles.formInput}>
                            <TextInput  style={styles.formText}
                                        placeholder="Input Order"
                                        placeholderTextColor = "white"
                                        selectionColor="white"
                                        spellCheck={false}
                                        autoCorrect={false}
                                        onChangeText={(value)=>setOrder(value)}
                                        />
                        </LinearGradient>
                    </View>
    
                    <LinearGradient useAngle={true}
                            angle={0}
                            colors={[ 'rgba(255, 255, 255, 0.2)', '#ff8c00', 'grey']}
                            locations={[0, 0.8, 0.05]}
                            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                            style={styles.button}>
                        <TouchableOpacity style={styles.button} onPress={findNumber}>
                            <Text style={styles.resultText}> Find </Text>
                        </TouchableOpacity>
                    </LinearGradient>

    
                    <LinearGradient useAngle={true}
                            angle={0}
                            colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.3)']}
                            locations={[0, 0.8]}
                            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                            style={styles.resultView}>
                            <Text  style={styles.resultText}>
                               {result}
                                
                            </Text>
                    </LinearGradient>
    
                </Col>
        </ImageBackground>
        </Container>
    
  )
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

    resultView:{
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

    resultText: {
        fontFamily: 'Avenir Next',
        flexDirection:'column',
        fontSize: RFValue(18, 680),
        color: 'white',
        marginVertical:'3%'
    },
});

export default SmallNumber