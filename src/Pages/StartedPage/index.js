import React from 'react';
import { StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { Card, CardItem, Container, Text, Form, View, Textarea, Picker, Col, Icon, Button} from 'native-base';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { logoWebimp } from '../../Assets/Images/index';

const StartedPage = ({ navigation }) => {
    
  return (
    <Container style={styles.container}>
        <Col style={{  justifyContent:'center', alignSelf:'center',  }}>  
                <TouchableOpacity onPress={()=>navigation.replace('BMI')}>
                    <Image style={styles.logoStyle} source={logoWebimp} />
                    <Text style={styles.buttonText}>
                        Getting Started
                    </Text>
                </TouchableOpacity>     
        </Col>
    </Container>
  );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor:'black',
        justifyContent: 'center',
    },

    logoStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: RFPercentage(42),
        height: RFPercentage(10),
        },

    buttonText: {
        fontFamily: 'Avenir Next',
        fontSize: RFValue(25, 680),
        color: '#ff8c00',
        textAlign: 'center',
        marginTop:'10%'
    },
});

export default StartedPage;