import React, { Component } from "react";
import {View, Text, Image, Dimensions} from "react-native";
import {Container, Header, Left, Right, Button, Icon , Content ,Body , Card, CardItem, Thumbnail} from 'native-base';
import axios from 'axios'
import CONST from '../consts'
import { Bars } from 'react-native-loader';
import FooterSection from "./FooterSection";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Notifications extends Component {
    constructor(props){
        super(props);

        this.state={
            notifications:[],
            status: '0',
        }
    }

    static navigationOptions = () => ({
        drawerLabel: () => null
    });

    componentWillMount() {
        axios.post(CONST.url + 'notifications', { user_id: 2 }).then(response => {
            this.setState({ notifications: response.data.notifications , status: response.data.value  })
        });
    }

    renderLoader(){
        if (this.state.status == 0){
            return(
                <View style={{ alignItems: 'center', justifyContent: 'center', height: height - 80, alignSelf:'center' , backgroundColor:'#fff' }}>
                    <Bars size={15} color="#1da1f2" />
                </View>
            );
        }
    }
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
                    <Text style={{color:'#797979' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>الاشعارات</Text>
                    </Body>
                    <Right style={{flex:0}}>
                        <Button transparent onPress={() => this.props.navigation.goBack()} style={{  paddingRight:7 , paddingLeft:7}}>
                            <Image source={require('../../assets/images/back.png')} style={{ width: 20, height: 20 }} resizeMode={'contain'} />
                        </Button>
                    </Right>
                </Header>
                <Content style={{ padding: 15}}>
                    { this.renderLoader() }
                    <View style={{width:'100%' , flex:1   , flexDirection:'column' , marginBottom: 35 }}>

                        {
                            this.state.notifications.map((noti, i) => {
                                return (

                                    <Card key={i}>
                                        <CardItem>
                                            <Left>
                                                <Thumbnail source={{uri:noti.user_avatar}}/>
                                                <Body>
                                                <Text style={{color: '#222', fontFamily: 'RegularFont', fontSize: 15}}>{noti.user_name}</Text>
                                                <Text note style={{
                                                    color: '#868686',
                                                    fontFamily: 'RegularFont',
                                                    fontSize: 13,
                                                    lineHeight: 18,
                                                    borderRadius: 25
                                                }}>{noti.content}</Text>
                                                </Body>
                                            </Left>
                                        </CardItem>
                                    </Card>
                                )
                            })
                        }
                    </View>
                </Content>
                <FooterSection routeName={'notifications'} navigation={this.props.navigation}/>
            </Container>

        );
    }
}


export default Notifications;