import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet, Share, Linking, Dimensions} from "react-native";
import {Container, Header, Left, Right, Button, Icon, Content, Body, Item, Input, Form, Textarea , Toast } from 'native-base';
import axios from 'axios'
import CONST from '../consts'
import { Bars } from 'react-native-loader';
import FooterSection from "./FooterSection";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class ContactUs extends Component {
    constructor(props){
        super(props);
        this.state ={
            msg:null,
            status: '0',
            name:'',
            email:'',
            message:'',
            showToast: false
        }

    }
    static navigationOptions = () => ({
        drawerLabel: 'تواصل معنا',
        drawerIcon: ( <Icon style={{ fontSize: 18,top:2, color: '#1da1f2' }} type={'FontAwesome'} name={'phone'}/> )
    })



    // renderLoader(){
    //     if (this.state.status == 0){
    //         return(
    //             <View style={{ alignItems: 'center', justifyContent: 'center', height: height - 80, alignSelf:'center' , backgroundColor:'#fff' }}>
    //                 <Bars size={15} color="#1da1f2" />
    //             </View>
    //         );
    //     }
    // }


    onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            })

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    callContact(){
        const phone = this.state.phone;
        // tel app
        const url = `tel: ${phone}`;
        // check if app supported in your phone or not
        this.launchUrl(url);
    }
    textContact(){
        const phone = this.state.phone;
        // sms app
        const url = `sms: ${phone}`;
        // check if app supported in your phone or not
        this.launchUrl(url);
    }

    // check if app supported in your phone or not
    // supported de ay variable boolean
    launchUrl(url){
        Linking.canOpenURL(url)
            .then(supported => {
                if(!supported){
                    Alert.alert('app notsupported');
                } else {
                    Linking.openURL(url);
                }
            });
    }
    onSendPress (){

        this.setState({status:1})
        axios.post(CONST.url + 'contact-us', { name: this.state.name , email: this.state.email , message: this.state.message }).then(response => {
            this.setState({ msg: response.data.msg, status: 0 })
            Toast.show({
                text: this.state.msg,
                type: "success"
            })
        })

    }
    showButtonOrSpinner(){
        //if loading true
        if(this.state.status == 1) return   <View style={{justifyContent:'center' , alignItems:'center' , flex:1}}><Bars size={15} color="#1da1f2" /></View>

        //if loading false
        return( <Button onPress={()=> this.onSendPress()} block style={{ backgroundColor: '#1da1f2', alignSelf: 'center',
            marginTop: 10, width: '100%', borderRadius: 2, justifyContent: 'center', height: 43 , paddingBottom:10 }}>
            <Text style={{ color: '#fff', textAlign: 'center', fontFamily:"RegularFont" , fontSize:15  }}>ارسال</Text>
        </Button>)
    }
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
                    <Text style={{color:'#797979' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>تواصل معنا</Text>
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
                <Content style={{ padding: 20}}>
                    {/*{ this.renderLoader() }*/}
                    <View style={{flex:1 , justifyContent:'space-between' , marginBottom:13 , flexDirection: 'row'}}>
                        <TouchableOpacity onPress={this.onShare} style={{ backgroundColor: '#1da1f2', alignSelf: 'center',
                            marginTop: 10, borderRadius: 2, justifyContent: 'center', height: 43 , paddingBottom:10, alignItems:'center', width:100 }}>
                            <Icon name={'whatsapp'} type={'FontAwesome'} style={{  color: "#fff" , fontSize:20 , top:5}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.callContact()} style={{ backgroundColor: '#1da1f2', alignSelf: 'center',
                            marginTop: 10, borderRadius: 2, justifyContent: 'center', height: 43 , paddingBottom:10, alignItems:'center' , width:100  }}>
                            <Icon name={'phone'} type={'FontAwesome'} style={{  color: "#fff"  , fontSize:20 , top:5}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.textContact()} style={{ backgroundColor: '#1da1f2', alignSelf: 'center',
                            marginTop: 10, borderRadius: 2, justifyContent: 'center', height: 43 , paddingBottom:10, alignItems:'center', width:100   }}>
                            <Icon name={'envelope'} type={'FontAwesome'} style={{  color: "#fff"  , fontSize:20 , top:5}}/>
                        </TouchableOpacity>
                    </View>
                    <Form style={{ width:"100%"}}>
                        <Item  style={{marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                            <Input placeholder="الاسم"
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#ebebeb' }}
                                   autoCapitalize='none'
                                   onChangeText={(name) => this.setState({name})}
                            />
                            <Icon name={'user'} type={'FontAwesome'} style={{ position: 'absolute', top: 15, left: 3, color: "#ebebeb" , fontSize:17}}/>
                        </Item>
                        <Item  style={{marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                            <Input placeholder="البريد الالكتروني"
                                   keyboardType='email-address'
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#a7a7a7' }}
                                   onChangeText={(email) => this.setState({email})}
                            />
                            <Icon name={'envelope'} type={'FontAwesome'} style={{ position: 'absolute', top: 15, left: 3, color: "#ebebeb" , fontSize:17}}/>
                        </Item>
                        <Item  style={{marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                            <Textarea rowSpan={4} placeholderTextColor={{ color: '#a7a7a7' }} style={{color: "#1da1f2",
                                fontSize:15 ,
                                width: '100%' ,
                                backgroundColor:"#fff" ,
                                borderRadius:3 ,
                                paddingRight: 25 ,
                                paddingLeft: 40 ,
                                textAlign:"right",
                                fontFamily:"RegularFont"}}  placeholder="رسالتك" onChangeText={(message) => this.setState({message})}/>
                            <Icon name={'commenting'} type={'FontAwesome'} style={{ position: 'absolute', top: 9, left: 3, color: "#ebebeb" , fontSize:17}}/>
                        </Item>

                        {this.showButtonOrSpinner ()}
                    </Form>
                </Content>
                <FooterSection routeName={'contactUs'} navigation={this.props.navigation}/>
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
        paddingLeft: 40 ,
        textAlign:"right",
        fontFamily:"RegularFont"
    }
});
export default ContactUs;