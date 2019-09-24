import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, FlatList, ScrollView} from "react-native";
import {Container, Header, Left, Right, Button, Icon, Content, Body, Card, CardItem, Thumbnail} from 'native-base';
import FooterSection from "./FooterSection";


class Profile extends Component {
    constructor(props){
        super(props);

        this.state={
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
                    <Text style={{color:'#797979' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>الصفحة الشخصية</Text>
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
                <Content style={{ padding: 7}}>
                    <View style={{width:'100%' , flex:1   , flexDirection:'column' }}>
                        <Card transparent>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../assets/images/profile.png')} style={{width:70 , height:70 , borderRadius:50}} />
                                    <Body>
                                        <Text style={{color:'#797979' ,fontFamily: 'RegularFont' , fontSize:17  }}>احمد الشناوي</Text>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('inbox')} style={{ flexDirection: 'row'}}>
                                            <Text note style={{  color:'#b6b6b6' ,fontFamily: 'RegularFont' , fontSize:15 , borderRadius:25 ,  textDecorationLine: 'underline'}}>البريد الوارد</Text>
                                        </TouchableOpacity>
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{width:'100%' , flex:1  , paddingLeft:15, paddingRight:15 , flexDirection:'column'  }}>
                        <Text style={{color:'#868686' ,fontFamily: 'RegularFont' , fontSize:17 , marginBottom:3  }}>قسم : غرف نوم</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom:0}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('product')} style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, margin: 5 , borderRadius:3}}>
                                <View style={{ flex: 1, width: '100%' , borderRadius:3}}>
                                    <View style={{width:'100%' , height:180, padding:10 , backgroundColor: '#00000040' , position: 'absolute' , zIndex:1 , flexDirection:'column' }}>
                                        <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>
                                            <View style={{flexDirection:'column', alignSelf:'flex-end'}}>
                                                <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , top:2}}>غرفة نوم زرقاء</Text>
                                                <View style={{flexDirection:'row' , top:2}}>
                                                    <Icon name={'attach-money'} type={'MaterialIcons'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>500</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Icon name={'eye'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>5</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <Image source={require('../../assets/images/store_pic.png')} resizeMode={'cover'} style={{ width: 150, height: 180 , borderRadius:3}}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('product')} style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, margin: 5 , borderRadius:3}}>
                                <View style={{ flex: 1, width: '100%' , borderRadius:3}}>
                                    <View style={{width:'100%' , height:180, padding:10 , backgroundColor: '#00000040' , position: 'absolute' , zIndex:1 , flexDirection:'column' }}>
                                        <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>
                                            <View style={{flexDirection:'column', alignSelf:'flex-end'}}>
                                                <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , top:2}}>غرفة نوم زرقاء</Text>
                                                <View style={{flexDirection:'row' , top:2}}>
                                                    <Icon name={'attach-money'} type={'MaterialIcons'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>500</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Icon name={'eye'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>5</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <Image source={require('../../assets/images/store_pic.png')} resizeMode={'cover'} style={{ width: 150, height: 180 , borderRadius:3}}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('product')} style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, margin: 5 , borderRadius:3}}>
                                <View style={{ flex: 1, width: '100%' , borderRadius:3}}>
                                    <View style={{width:'100%' , height:180, padding:10 , backgroundColor: '#00000040' , position: 'absolute' , zIndex:1 , flexDirection:'column' }}>
                                        <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>
                                            <View style={{flexDirection:'column', alignSelf:'flex-end'}}>
                                                <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , top:2}}>غرفة نوم زرقاء</Text>
                                                <View style={{flexDirection:'row' , top:2}}>
                                                    <Icon name={'attach-money'} type={'MaterialIcons'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>500</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Icon name={'eye'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>5</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <Image source={require('../../assets/images/store_pic.png')} resizeMode={'cover'} style={{ width: 150, height: 180 , borderRadius:3}}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('product')}  style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, margin: 5 , borderRadius:3}}>
                                <View style={{ flex: 1, width: '100%' , borderRadius:3}}>
                                    <View style={{width:'100%' , height:180, padding:10 , backgroundColor: '#00000040' , position: 'absolute' , zIndex:1 , flexDirection:'column' }}>
                                        <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>
                                            <View style={{flexDirection:'column', alignSelf:'flex-end'}}>
                                                <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , top:2}}>غرفة نوم زرقاء</Text>
                                                <View style={{flexDirection:'row' , top:2}}>
                                                    <Icon name={'attach-money'} type={'MaterialIcons'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>500</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Icon name={'eye'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>5</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <Image source={require('../../assets/images/store_pic.png')} resizeMode={'cover'} style={{ width: 150, height: 180 , borderRadius:3}}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('product')} style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, margin: 5 , borderRadius:3}}>
                                <View style={{ flex: 1, width: '100%' , borderRadius:3}}>
                                    <View style={{width:'100%' , height:180, padding:10 , backgroundColor: '#00000040' , position: 'absolute' , zIndex:1 , flexDirection:'column' }}>
                                        <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>
                                            <View style={{flexDirection:'column', alignSelf:'flex-end'}}>
                                                <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , top:2}}>غرفة نوم زرقاء</Text>
                                                <View style={{flexDirection:'row' , top:2}}>
                                                    <Icon name={'attach-money'} type={'MaterialIcons'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>500</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Icon name={'eye'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>5</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <Image source={require('../../assets/images/store_pic.png')} resizeMode={'cover'} style={{ width: 150, height: 180 , borderRadius:3}}/>
                                </View>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                    <View style={{width:'100%' , flex:1  , paddingLeft:15, paddingRight:15 , flexDirection:'column'  }}>
                        <Text style={{color:'#868686' ,fontFamily: 'RegularFont' , fontSize:17 , marginBottom:3  }}>قسم : مطابخ</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom:30}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('product')} style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, margin: 5 , borderRadius:3}}>
                                <View style={{ flex: 1, width: '100%' , borderRadius:3}}>
                                    <View style={{width:'100%' , height:180, padding:10 , backgroundColor: '#00000040' , position: 'absolute' , zIndex:1 , flexDirection:'column' }}>
                                        <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>
                                            <View style={{flexDirection:'column', alignSelf:'flex-end'}}>
                                                <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , top:2}}>مطبخ</Text>
                                                <View style={{flexDirection:'row' , top:2}}>
                                                    <Icon name={'attach-money'} type={'MaterialIcons'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>500</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Icon name={'eye'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>5</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <Image source={require('../../assets/images/store_pic.png')} resizeMode={'cover'} style={{ width: 150, height: 180 , borderRadius:3}}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('product')} style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, margin: 5 , borderRadius:3}}>
                                <View style={{ flex: 1, width: '100%' , borderRadius:3}}>
                                    <View style={{width:'100%' , height:180, padding:10 , backgroundColor: '#00000040' , position: 'absolute' , zIndex:1 , flexDirection:'column' }}>
                                        <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>
                                            <View style={{flexDirection:'column', alignSelf:'flex-end'}}>
                                                <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , top:2}}>مطبخ</Text>
                                                <View style={{flexDirection:'row' , top:2}}>
                                                    <Icon name={'attach-money'} type={'MaterialIcons'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>500</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Icon name={'eye'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>5</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <Image source={require('../../assets/images/store_pic.png')} resizeMode={'cover'} style={{ width: 150, height: 180 , borderRadius:3}}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('product')} style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, margin: 5 , borderRadius:3}}>
                                <View style={{ flex: 1, width: '100%' , borderRadius:3}}>
                                    <View style={{width:'100%' , height:180, padding:10 , backgroundColor: '#00000040' , position: 'absolute' , zIndex:1 , flexDirection:'column' }}>
                                        <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>
                                            <View style={{flexDirection:'column', alignSelf:'flex-end'}}>
                                                <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , top:2}}>مطبخ</Text>
                                                <View style={{flexDirection:'row' , top:2}}>
                                                    <Icon name={'attach-money'} type={'MaterialIcons'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>500</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Icon name={'eye'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>5</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <Image source={require('../../assets/images/store_pic.png')} resizeMode={'cover'} style={{ width: 150, height: 180 , borderRadius:3}}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('product')} style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, margin: 5 , borderRadius:3}}>
                                <View style={{ flex: 1, width: '100%' , borderRadius:3}}>
                                    <View style={{width:'100%' , height:180, padding:10 , backgroundColor: '#00000040' , position: 'absolute' , zIndex:1 , flexDirection:'column' }}>
                                        <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>
                                            <View style={{flexDirection:'column', alignSelf:'flex-end'}}>
                                                <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , top:2}}>مطبخ</Text>
                                                <View style={{flexDirection:'row' , top:2}}>
                                                    <Icon name={'attach-money'} type={'MaterialIcons'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>500</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Icon name={'eye'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>5</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <Image source={require('../../assets/images/store_pic.png')} resizeMode={'cover'} style={{ width: 150, height: 180 , borderRadius:3}}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('product')} style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, margin: 5 , borderRadius:3}}>
                                <View style={{ flex: 1, width: '100%' , borderRadius:3}}>
                                    <View style={{width:'100%' , height:180, padding:10 , backgroundColor: '#00000040' , position: 'absolute' , zIndex:1 , flexDirection:'column' }}>
                                        <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>
                                            <View style={{flexDirection:'column', alignSelf:'flex-end'}}>
                                                <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , top:2}}>مطبخ</Text>
                                                <View style={{flexDirection:'row' , top:2}}>
                                                    <Icon name={'attach-money'} type={'MaterialIcons'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>500</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Icon name={'eye'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>5</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <Image source={require('../../assets/images/store_pic.png')} resizeMode={'cover'} style={{ width: 150, height: 180 , borderRadius:3}}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('product')} style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, margin: 5 , borderRadius:3}}>
                                <View style={{ flex: 1, width: '100%' , borderRadius:3}}>
                                    <View style={{width:'100%' , height:180, padding:10 , backgroundColor: '#00000040' , position: 'absolute' , zIndex:1 , flexDirection:'column' }}>
                                        <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>
                                            <View style={{flexDirection:'column', alignSelf:'flex-end'}}>
                                                <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , top:2}}>مطبخ</Text>
                                                <View style={{flexDirection:'row' , top:2}}>
                                                    <Icon name={'attach-money'} type={'MaterialIcons'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>500</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Icon name={'eye'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>5</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <Image source={require('../../assets/images/store_pic.png')} resizeMode={'cover'} style={{ width: 150, height: 180 , borderRadius:3}}/>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </Content>
                <FooterSection routeName={'profile'} navigation={this.props.navigation}/>
            </Container>

        );
    }
}


export default Profile;