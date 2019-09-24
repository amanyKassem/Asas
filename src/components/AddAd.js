import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, FlatList, StyleSheet} from "react-native";
import {Container, Header, Left, Right, Button, Icon, Content, Body, Item, Input, Form , Picker} from 'native-base';
import { ImagePicker } from 'expo';
import FooterSection from "./FooterSection";


class AddAd extends Component {
    constructor(props){
        super(props);
        this.state ={
            selected1: undefined,
            selected2: undefined,
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
    onValueChange(value) {
        this.setState({
            selected1: value
        });
    }
    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }
    static navigationOptions = () => ({
        drawerLabel: () => null
    });


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
                    <Text style={{color:'#797979' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>اضافة اعلان</Text>
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
                    <Form style={{ width:"100%"}}>
                        <Item  style={{marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                            <Input placeholder="عنوان الاعلان"
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#a7a7a7' }}
                            />
                            <Image source={require('../../assets/images/advtitle.png')} style={{ width: 20, height: 20, position: 'absolute', top: 12, left: 10 }} resizeMode={'contain'} />
                        </Item>
                        <Item  style={{marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                            <Input placeholder="تفاصيل الاعلان"
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#a7a7a7' }}
                            />
                            <Image source={require('../../assets/images/details.png')} style={{ width: 20, height: 20, position: 'absolute', top: 12, left: 10 }} resizeMode={'contain'} />
                        </Item>
                        <Item picker style={{paddingRight: 25 ,
                            paddingLeft: 40 ,marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{
                                    color: "#a7a7a7",
                                    fontSize:15 ,
                                    width: undefined  ,
                                    backgroundColor:"#fff" ,
                                    height:40,
                                    paddingRight: 25 ,
                                    paddingLeft: 40 ,
                                    textAlign:"right",
                                    fontFamily:"RegularFont"
                                }}
                                placeholder="القسم"
                                placeholderStyle={{ color: "#a7a7a7" }}
                                textStyle={{ fontFamily:"RegularFont" }}
                                itemStyle={{
                                    fontFamily:"RegularFont"
                                }}
                                itemTextStyle={{ fontFamily:"RegularFont"}}
                                placeholderIconColor="#fff"
                                selectedValue={this.state.selected1}
                                onValueChange={(value) => this.onValueChange(value)}
                            >
                                <Picker.Item label="القسم" value="key0" />
                                <Picker.Item label="القسم1" value="key1" />
                                <Picker.Item label="القسم2" value="key2" />

                            </Picker>
                            <Image source={require('../../assets/images/dept.png')} style={{ width: 20, height: 20, position: 'absolute', top: 12, left: 10 }} resizeMode={'contain'} />
                            <Image source={require('../../assets/images/downarrow.png')} style={{ width: 20, height: 20, position: 'absolute', top: 12, right: 10, }} resizeMode={'contain'} />
                        </Item>
                        <Item picker style={{paddingRight: 25 ,
                            paddingLeft: 40 ,marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{
                                    color: "#a7a7a7",
                                    fontSize:15 ,
                                    width: undefined  ,
                                    backgroundColor:"#fff" ,
                                    height:40,
                                    paddingRight: 25 ,
                                    paddingLeft: 40 ,
                                    textAlign:"right",
                                    fontFamily:"RegularFont"
                                }}
                                placeholder="القسم"
                                placeholderStyle={{ color: "#a7a7a7" }}
                                textStyle={{ fontFamily:"RegularFont" }}
                                itemStyle={{
                                    fontFamily:"RegularFont"
                                }}
                                itemTextStyle={{ fontFamily:"RegularFont"}}
                                placeholderIconColor="#fff"
                                selectedValue={this.state.selected2}
                                onValueChange={(value) => this.onValueChange2(value)}
                            >
                                <Picker.Item label="الموقع" value="key0" />
                                <Picker.Item label="الموقع1" value="key1" />
                                <Picker.Item label="الموقع2" value="key2" />

                            </Picker>
                            <Image source={require('../../assets/images/elmadina.png')} style={{ width: 20, height: 20, position: 'absolute', top: 12, left: 10 }} resizeMode={'contain'} />
                            <Image source={require('../../assets/images/downarrow.png')} style={{ width: 20, height: 20, position: 'absolute', top: 12, right: 10, }} resizeMode={'contain'} />
                        </Item>
                        <Item  style={{marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                            <Input placeholder="رقم الجوال"
                                   keyboardType='phone-pad'
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#a7a7a7' }}
                            />
                            <Image source={require('../../assets/images/phone.png')} style={{ width: 20, height: 20, position: 'absolute', top: 12, left: 10 }} resizeMode={'contain'} />
                        </Item>
                        <View style={{flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>

                            {image != null?
                                <View style={{width:150 , height:150, justifyContent:'center' , alignItems:'center',marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                                    <Image
                                        resizeMode={'cover'}
                                        style={{ width: '100%', height: '100%'  }}
                                        source={{ uri: image }}
                                    />
                                </View>
                                :
                                <View style={{width:150 , height:150, justifyContent:'center' , alignItems:'center',marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                                    <Image
                                        resizeMode={'cover'}
                                        style={{ width: 30, height: 30 }}
                                        source={require('../../assets/images/addpic.png')}

                                    />
                                </View>
                            }

                            <TouchableOpacity onPress={this._pickImage} style={{width:150 , height:150 , justifyContent:'center' , alignItems:'center'}}>
                                <Image
                                    resizeMode={'cover'}
                                    style={{ width: 30, height: 30  }}
                                    source={require('../../assets/images/plusgrey.png')}
                                    onPress={()=> this._pickImage() }
                                />
                            </TouchableOpacity>

                        </View>
                        <Button onPress={()=> this.props.navigation.navigate("product")} block style={{ backgroundColor: '#1da1f2', alignSelf: 'center',
                            marginTop: 10, width: '100%', borderRadius: 2, justifyContent: 'center', height: 43 , paddingBottom:10 }}>
                            <Text style={{ color: '#fff', textAlign: 'center', fontFamily:"RegularFont" , fontSize:15  }}>حفظ</Text>
                        </Button>
                    </Form>
                </Content>
                <FooterSection routeName={'addAd'} navigation={this.props.navigation}/>
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
export default AddAd;