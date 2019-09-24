import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {Container, Header, Left, Right, Button, Icon , Content ,Body , Card, CardItem, Thumbnail} from 'native-base';
import FooterSection from "./FooterSection";


class Inbox extends Component {
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
                        <Button transparent onPress={() => this.props.navigation.openDrawer()} style={{paddingRight:0 , paddingLeft:0}} >
                            <Image source={require('../../assets/images/menu.png')} style={{ width: 25, height: 25 }} resizeMode={'contain'} />
                        </Button>
                    </Left>
                    <Body style={{  alignSelf:'center'}}>
                    <Text style={{color:'#797979' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>البريد الوارد</Text>
                    </Body>
                    <Right style={{flex:0}}>
                        <Button transparent onPress={() => this.props.navigation.goBack()} style={{  paddingRight:7 , paddingLeft:7}}>
                            <Image source={require('../../assets/images/back.png')} style={{ width: 20, height: 20 }} resizeMode={'contain'} />
                        </Button>
                    </Right>
                </Header>
                <Content style={{ padding: 15}}>
                    <View style={{width:'100%' , flex:1   , flexDirection:'column' , marginBottom: 35 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('chat')}>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require('../../assets/images/profile.png')} />
                                        <Body>
                                        <Text style={{color:'#222' ,fontFamily: 'RegularFont' , fontSize:15  }}>نور الهلالي</Text>
                                        <Text note style={{color:'#868686' ,fontFamily: 'RegularFont' , fontSize:13, lineHeight:18 , borderRadius:25 }}>قامت نور بالتعليق علي منشورك</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('chat')}>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require('../../assets/images/profile.png')} />
                                        <Body>
                                        <Text style={{color:'#222' ,fontFamily: 'RegularFont' , fontSize:15  }}>نور الهلالي</Text>
                                        <Text note style={{color:'#868686' ,fontFamily: 'RegularFont' , fontSize:13, lineHeight:18 , borderRadius:25 }}>قامت نور بالتعليق علي منشورك</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('chat')}>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require('../../assets/images/profile.png')} />
                                        <Body>
                                        <Text style={{color:'#222' ,fontFamily: 'RegularFont' , fontSize:15  }}>نور الهلالي</Text>
                                        <Text note style={{color:'#868686' ,fontFamily: 'RegularFont' , fontSize:13, lineHeight:18 , borderRadius:25 }}>قامت نور بالتعليق علي منشورك</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('chat')}>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require('../../assets/images/profile.png')} />
                                        <Body>
                                        <Text style={{color:'#222' ,fontFamily: 'RegularFont' , fontSize:15  }}>نور الهلالي</Text>
                                        <Text note style={{color:'#868686' ,fontFamily: 'RegularFont' , fontSize:13, lineHeight:18 , borderRadius:25 }}>قامت نور بالتعليق علي منشورك</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('chat')}>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require('../../assets/images/profile.png')} />
                                        <Body>
                                        <Text style={{color:'#222' ,fontFamily: 'RegularFont' , fontSize:15  }}>نور الهلالي</Text>
                                        <Text note style={{color:'#868686' ,fontFamily: 'RegularFont' , fontSize:13, lineHeight:18 , borderRadius:25 }}>قامت نور بالتعليق علي منشورك</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('chat')}>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require('../../assets/images/profile.png')} />
                                        <Body>
                                        <Text style={{color:'#222' ,fontFamily: 'RegularFont' , fontSize:15  }}>نور الهلالي</Text>
                                        <Text note style={{color:'#868686' ,fontFamily: 'RegularFont' , fontSize:13, lineHeight:18 , borderRadius:25 }}>قامت نور بالتعليق علي منشورك</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('chat')}>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require('../../assets/images/profile.png')} />
                                        <Body>
                                        <Text style={{color:'#222' ,fontFamily: 'RegularFont' , fontSize:15  }}>نور الهلالي</Text>
                                        <Text note style={{color:'#868686' ,fontFamily: 'RegularFont' , fontSize:13, lineHeight:18 , borderRadius:25 }}>قامت نور بالتعليق علي منشورك</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    </View>
                </Content>
                <FooterSection routeName={'inbox'} navigation={this.props.navigation}/>
            </Container>

        );
    }
}


export default Inbox;