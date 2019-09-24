import React, { Component } from "react";
import {View, Text, Image, KeyboardAvoidingView, Dimensions} from "react-native";
import {Container, Header, Left, Right, Button, Icon, Content, Body, Item, Input, Form} from 'native-base';
import FooterSection from "./FooterSection";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Chat extends Component {
    constructor(props){
        super(props);
        this.state ={

        }

    }

    static navigationOptions = () => ({
        drawerLabel: () => null
    });


    render() {
        return (

            <Container >
                <Header style={{ backgroundColor: "#fff" , alignItems: 'center', paddingTop: 25, height: 80, justifyContent: 'center'}}>
                    <Left style={{flex:0}}>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()} style={{ paddingRight:0 , paddingLeft:0}}>
                            <Image source={require('../../assets/images/menu.png')} style={{ width: 25, height: 25 }} resizeMode={'contain'} />
                        </Button>
                    </Left>
                    <Body style={{  alignSelf:'center'}}>
                    </Body>
                    <Right style={{flex:0}}>
                        <Button transparent onPress={()=> this.props.navigation.navigate("notifications")} style={{ paddingRight:0 , paddingLeft:0 , marginRight:10}}>
                            <Image source={require('../../assets/images/noti.png')} style={{ width: 20, height: 20 }} resizeMode={'contain'} />
                        </Button>
                        <Button transparent onPress={() => this.props.navigation.goBack()} style={{  paddingRight:7 , paddingLeft:7}}>
                            <Image source={require('../../assets/images/back.png')} style={{ width: 20, height: 20 }} resizeMode={'contain'} />
                        </Button>
                    </Right>
                </Header>
                <KeyboardAvoidingView behavior={'position'} style={{width:'100%', flexDirection:'column', flex: 1, zIndex: -1 }}>
                    <View style={{height:height-80 , paddingTop:20}}>
                            <View style={{alignSelf:'flex-end' ,marginLeft:75, borderWidth:2 , borderColor:'#ebebeb' , padding:10 , borderRadius:5 , paddingTop:0 , marginBottom:15 , marginHorizontal: 20}}>
                                <Text style={{color:'#797979' , alignItems: 'center', justifyContent: 'center' , fontFamily:"RegularFont" , fontSize:17}}>مرحبا بك نود ابلاغكم انه سوف يتم الرد عيكم</Text>
                            </View>
                            <View style={{alignSelf:'flex-start' ,marginRight:75 , borderWidth:2 , borderColor:'transparent' , backgroundColor:'#1da1f2' , padding:10 , marginBottom:15, borderRadius:5 , paddingTop:0  , marginHorizontal: 20}}>
                                <Text style={{color:'#fff' , alignItems: 'center', justifyContent: 'center' , fontFamily:"RegularFont" , fontSize:17}}>شكرا جزيلا لك</Text>
                            </View>
                            <View style={{alignSelf:'flex-end' ,marginLeft:75, borderWidth:2 , borderColor:'#ebebeb' , padding:10 , borderRadius:5 , paddingTop:0 , marginBottom:15 , marginHorizontal: 20}}>
                                <Text style={{color:'#797979' , alignItems: 'center', justifyContent: 'center' , fontFamily:"RegularFont" , fontSize:17}}>مرحبا بك نود ابلاغكم انه سوف يتم الرد عيكم</Text>
                            </View>
                            <View style={{alignSelf:'flex-start' ,marginRight:75 , borderWidth:2 , borderColor:'transparent' , backgroundColor:'#1da1f2' , padding:10 , marginBottom:15, borderRadius:5 , paddingTop:0  , marginHorizontal: 20}}>
                                <Text style={{color:'#fff' , alignItems: 'center', justifyContent: 'center' , fontFamily:"RegularFont" , fontSize:17}}>شكرا جزيلا لك</Text>
                            </View>
                            <View style={{alignSelf:'flex-end' ,marginLeft:75, borderWidth:2 , borderColor:'#ebebeb' , padding:10 , borderRadius:5 , paddingTop:0 , marginBottom:15 , marginHorizontal: 20}}>
                                <Text style={{color:'#797979' , alignItems: 'center', justifyContent: 'center' , fontFamily:"RegularFont" , fontSize:17}}>مرحبا بك نود ابلاغكم انه سوف يتم الرد عيكم</Text>
                            </View>
                            <View style={{alignSelf:'flex-start' ,marginRight:75 , borderWidth:2 , borderColor:'transparent' , backgroundColor:'#1da1f2' , padding:10 , marginBottom:15, borderRadius:5 , paddingTop:0  , marginHorizontal: 20}}>
                                <Text style={{color:'#fff' , alignItems: 'center', justifyContent: 'center' , fontFamily:"RegularFont" , fontSize:17}}>شكرا جزيلا لك</Text>
                            </View>
                            <View style={{alignSelf:'flex-end' ,marginLeft:75, borderWidth:2 , borderColor:'#ebebeb' , padding:10 , borderRadius:5 , paddingTop:0 , marginBottom:15 , marginHorizontal: 20}}>
                                <Text style={{color:'#797979' , alignItems: 'center', justifyContent: 'center' , fontFamily:"RegularFont" , fontSize:17}}>مرحبا بك نود ابلاغكم انه سوف يتم الرد عيكم</Text>
                            </View>
                            <View style={{alignSelf:'flex-start' ,marginRight:75 , borderWidth:2 , borderColor:'transparent' , backgroundColor:'#1da1f2' , padding:10 , marginBottom:15, borderRadius:5 , paddingTop:0  , marginHorizontal: 20}}>
                                <Text style={{color:'#fff' , alignItems: 'center', justifyContent: 'center' , fontFamily:"RegularFont" , fontSize:17}}>شكرا جزيلا لك</Text>
                            </View>
                            <Form style={{flexDirection:'row' , flex: 1, width: '100%',height:40, position:'absolute' , bottom:0, alignSelf:'flex-end'}}>
                                <Item  style={{flex:1,zIndex:2222 , marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:1, borderRightWidth:0, borderLeftWidth:0, borderBottomWidth:1 , height:45 , alignSelf:'flex-end'}}>
                                    <Input placeholder="رسالة جديدة"
                                           style={{ flex:1, width:'100%', paddingLeft:20 , fontFamily:'RegularFont' , paddingBottom:10 , color: '#797979' , textAlign:'right' , backgroundColor:'#fff'}}
                                           placeholderTextColor={{ color: '#a7a7a7' }}
                                    />
                                </Item>
                                <Button onPress={()=> this.props.navigation.navigate("notifications")} block style={{ zIndex:-1,backgroundColor: '#1da1f2', justifyContent: 'flex-end', height: 45  , width:80 , alignSelf:'flex-end',borderRadius:0}}>
                                    <View style={{ backgroundColor: '#fff' , width:27,height:55,bottom:6,right:15,borderTopLeftRadius:50,zIndex:-1, transform: [{ rotate: '-32deg'}]}}/>
                                    <Icon name={'share'} type={'FontAwesome'} style={{  color: "#fff" , fontSize:17 , transform: [{ rotateY: '-180deg'}]}}/>
                                </Button>
                            </Form>
                    </View>
                </KeyboardAvoidingView>
                {/*<FooterSection routeName={'chat'} navigation={this.props.navigation}/>*/}
            </Container>

        );
    }
}


export default Chat;