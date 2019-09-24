import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import {Container, Header, Left, Right, Button, Icon , Content , Form, Item, Input, Label} from 'native-base';

class ForgetPassword extends Component {


    render() {
        return (
            <Container >
                <Content style={{ padding: 30 }}>
                    <View style={{alignItems: 'center'}}>
                        <Image source={require('../../assets/images/logo_.png')} resizeMode={'contain'} style={{ width: 200 }}/>
                    </View>
                    <View style={{flex: 1 , justifyContent:'center', marginBottom:30 , alignItems:'center'}}>
                        <Text style={{color:"#a1a1a1" , fontFamily:"RegularFont"  , fontSize:16 }}>ادخل رقم جوالك</Text>
                        <Text style={{color:"#a1a1a1" , fontFamily:"RegularFont" , fontSize:16 , marginTop:-10}}>وسيتم ارسال كود التحقق في رسالة قصيرة</Text>
                    </View>
                    <Form style={{ width:"100%"}}>
                        <Item  style={{marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                            <Input placeholder="رقم الجوال"
                                   keyboardType='phone-pad'
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#a7a7a7' }}
                            />
                            <Icon name={'phone'} type={'FontAwesome'} style={{ position: 'absolute', top: 15, left: 3, color: "#ebebeb" , fontSize:17}}/>
                        </Item>
                        <Button onPress={()=> this.props.navigation.navigate("verifyCode")}  block style={{ backgroundColor: '#1da1f2', alignSelf: 'center',
                            marginTop: 20,marginBottom: 10, width: '100%', borderRadius: 2, justifyContent: 'center', height: 43 , paddingBottom:10 }}>
                            <Text style={{ color: '#fff', textAlign: 'center', fontFamily:"RegularFont" , fontSize:15  }}>ارسال</Text>
                        </Button>
                    </Form>
                </Content>
                <Image source={require('../../assets/images/background.png')} style={{ width: '100%' , height:100 , bottom:-30 , zIndex: -1 , position:'absolute' , left:0 , right:0}} resizeMode={'stretch'} />
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    input : {
        color: "#1da1f2",
        fontSize:15 ,
        width: '100%' ,
        backgroundColor:"#fff" ,
        height:40,
        borderRadius:3 ,
        paddingRight: 25 ,
        paddingLeft: 30 ,
        textAlign:"right",
        fontFamily:"RegularFont"
    }
});
export default ForgetPassword;