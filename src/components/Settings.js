import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, FlatList, StyleSheet} from "react-native";
import {Container, Header, Left, Right, Button, Icon, Content, Body, Item, Input, Form } from 'native-base';
import { ImagePicker } from 'expo';
import FooterSection from "./FooterSection";


class Settings extends Component {
    constructor(props){
        super(props);
        this.state ={
            image: null,
        }

    }
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64:true
        });

        console.log(result);

        // check if there is image then set it and make button not disabled
        if (!result.cancelled) {
            this.setState({ image: result.uri ,base64:result.base64});
        }
    };

    static navigationOptions = () => ({
        drawerLabel: 'الاعدادات',
        drawerIcon: ( <Icon style={{ fontSize: 18,top:2, color: '#1da1f2' }} type={'FontAwesome'} name={'cog'}/> )
    })


    render() {
        let image = this.state.image;
        return (

            <Container >
                <Header style={{ backgroundColor: "#fff" , alignItems: 'center', paddingTop: 25, height: 80, justifyContent: 'center'}}>
                    <Left style={{flex:0}}>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()} style={{ paddingRight:0 , paddingLeft:0}}>
                            <Image source={require('../../assets/images/menu.png')} style={{ width: 25, height: 25 }} resizeMode={'contain'} />
                        </Button>
                    </Left>
                    <Body style={{  alignSelf:'center'}}>
                    <Text style={{color:'#797979' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>الاعدادات</Text>
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
                    <View style={{flex:1 , alignItems: 'center'  , marginBottom:20}}>

                        {image != null?
                            <TouchableOpacity onPress={this._pickImage}>
                                <Image
                                    resizeMode={'cover'}
                                    style={{ width: 100, height: 100 , borderRadius:50 }}
                                    source={{ uri: image }}
                                />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={this._pickImage} style={{width: 100, height: 100 , justifyContent:'center' , alignItems:'center', borderRadius:50 }}>
                                <Image
                                    resizeMode={'cover'}
                                    style={{ width: 25, height: 25  }}
                                    source={require('../../assets/images/cam.png')}
                                />
                                <Image
                                    resizeMode={'cover'}
                                    style={{ width: '100%', height: 100, position:'absolute',zIndex:-1,  borderRadius:50  }}
                                    source={require('../../assets/images/profile.png')}
                                />
                                <View
                                    style={{ width: '100%', height: 100, position:'absolute',zIndex:-1,  borderRadius:50 , backgroundColor: '#00000040' }}
                                />
                            </TouchableOpacity>
                        }

                    </View>
                    <Form style={{ width:"100%"}}>
                        <Item  style={{marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                            <Input placeholder="الاسم"
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#ebebeb' }}
                                   autoCapitalize='none'
                            />
                            <Icon name={'user'} type={'FontAwesome'} style={{ position: 'absolute', top: 15, left: 3, color: "#ebebeb" , fontSize:17}}/>
                        </Item>
                        <Item  style={{marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                            <Input placeholder="البريد الالكتروني"
                                   keyboardType='email-address'
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#a7a7a7' }}
                            />
                            <Icon name={'envelope'} type={'FontAwesome'} style={{ position: 'absolute', top: 15, left: 3, color: "#ebebeb" , fontSize:17}}/>
                        </Item>
                        <Item  style={{marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                            <Input placeholder="رقم الجوال"
                                   keyboardType='phone-pad'
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#a7a7a7' }}
                            />
                            <Icon name={'phone'} type={'FontAwesome'} style={{ position: 'absolute', top: 15, left: 3, color: "#ebebeb" , fontSize:17}}/>
                        </Item>

                        <Button onPress={()=> this.props.navigation.navigate("product")} block style={{ backgroundColor: '#1da1f2', alignSelf: 'center',
                            marginTop: 10, width: '100%', borderRadius: 2, justifyContent: 'center', height: 43 , paddingBottom:10 }}>
                            <Text style={{ color: '#fff', textAlign: 'center', fontFamily:"RegularFont" , fontSize:15  }}>حفظ</Text>
                        </Button>
                    </Form>
                </Content>
                <FooterSection routeName={'settings'} navigation={this.props.navigation}/>
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
export default Settings;