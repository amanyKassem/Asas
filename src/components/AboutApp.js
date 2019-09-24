import React, { Component } from "react";
import {View, Text, Image , Dimensions} from "react-native";
import {Container, Header, Left, Right, Button, Icon, Content, Body,} from 'native-base';
import axios from 'axios'
import CONST from '../consts'
import { Bars } from 'react-native-loader';
import FooterSection from "./FooterSection";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
class AboutApp extends Component {
    constructor(props){
        super(props);
        this.state ={
            about:null,
            status: '0',
        }

    }
    static navigationOptions = () => ({
        drawerLabel: 'عن التطبيق',
        drawerIcon: ( <Icon style={{ fontSize: 18,top:2, color: '#1da1f2' }} type={'FontAwesome'} name={'info-circle'}/> )
    })

    componentWillMount() {
        axios.get(CONST.url + 'about').then(response => {
            this.setState({ about: response.data.data, status: response.data.value })
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
                        <Button transparent onPress={() => this.props.navigation.openDrawer()} style={{ paddingRight:0 , paddingLeft:0}}>
                            <Image source={require('../../assets/images/menu.png')} style={{ width: 25, height: 25 }} resizeMode={'contain'} />
                        </Button>
                    </Left>
                    <Body style={{  alignSelf:'center'}}>
                    <Text style={{color:'#797979' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>عن التطبيق</Text>
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
                    { this.renderLoader() }
                    <View style={{ flexDirection:'column' , alignItems:'center' , justifyContent:'center' , marginTop:70 }}>
                        <Image source={require('../../assets/images/check.png')} style={{ width: (width*45)/100, height: (height*15)/100 , marginBottom:15}} resizeMode={'contain'} />
                        <Text style={{fontFamily:'RegularFont' , fontSize:15 , color:'#797979' , textAlign:'center'}} >{this.state.about}</Text>
                        <Button onPress={()=> this.props.navigation.navigate("home")} block style={{ backgroundColor: '#1da1f2', alignSelf: 'center',
                            marginTop: 20, width: '100%', borderRadius: 2, justifyContent: 'center', height: 43 , paddingBottom:10 }}>
                            <Text style={{ color: '#fff', textAlign: 'center', fontFamily:"RegularFont" , fontSize:15  }}>الرئيسية</Text>
                        </Button>
                    </View>
                </Content>
                <FooterSection routeName={'aboutApp'} navigation={this.props.navigation}/>
            </Container>

        );
    }
}


export default AboutApp;