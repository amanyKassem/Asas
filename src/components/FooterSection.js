import React, { Component } from 'react';
import { View } from 'react-native';
import {Footer, FooterTab, Button, Icon, Text, Badge, Container, Form} from 'native-base';
import Modal from "react-native-modal";


export default class FooterSection extends Component {
    constructor(props){
        super(props);
        console.log('route name', this.props.routeName);

        this.state={
            routeName:this.props.routeName,
            isFooterModalVisible: false,
        }
    }
    footer_toggleModal = () =>
        this.setState({ isFooterModalVisible: !this.state.isFooterModalVisible });

    btnClick(){
        this.props.navigation.navigate("addAd");
        this.setState({ isFooterModalVisible: !this.state.isFooterModalVisible })
    }

    render() {
        return (
            <Footer style={{}}>
                <FooterTab style={{ backgroundColor:'#fff' , flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Button  onPress={()=> this.props.navigation.navigate("home")} style={{}} >
                        <Icon name='home-outline' type={"MaterialCommunityIcons"} style={{ color:  this.state.routeName === 'home' ? "#1da1f2" : "#b6b6b6" , fontSize:23 , marginBottom:0}}/>
                    </Button>
                    <Button onPress={()=> this.props.navigation.navigate("profile")} style={{right:20}} >
                        <Icon name='user-o' type={"FontAwesome"} style={{ color:  this.state.routeName === 'profile' ? "#1da1f2" : "#b6b6b6" , fontSize:20, marginBottom:0}}/>
                    </Button>
                    <Button onPress={this.footer_toggleModal} style={{ borderWidth:2 , borderColor:this.state.routeName === 'addAd' ? "#1da1f2" : "transparent" , backgroundColor: this.state.routeName === 'addAd' ? "#fff" : "#1da1f2" , borderRadius: 50, bottom: 22, width: 50, height: 50 , position:'absolute', alignItems: 'center', justifyContent: 'center', right: '42.9%' }}>
                        <Icon type={'FontAwesome'} name={'plus'} style={{ fontSize: 20, color:this.state.routeName === 'addAd'  ? "#1da1f2" : "#fff" }} />
                    </Button>
                    <Button onPress={()=> this.props.navigation.navigate("search")} style={{left:20}}>
                        <Icon name='search' type={"MaterialIcons"} style={{ color:  this.state.routeName === 'search' ? "#1da1f2" : "#b6b6b6" , fontSize:25 , marginBottom:0}}/>
                    </Button>
                    <Button onPress={()=> this.props.navigation.navigate("fav")}>
                        <Icon name='heart-o' type={"FontAwesome"} style={{ color:  this.state.routeName === 'fav'  ? "#1da1f2" : "#b6b6b6" , fontSize:22 , marginBottom:0}}/>
                    </Button>
                </FooterTab>

                <Modal isVisible={this.state.isFooterModalVisible} onBackdropPress={this.footer_toggleModal}>
                    <View style={{ flex: 1, backgroundColor: '#fff', padding: 10, position: 'absolute', width: '100%', borderRadius: 5, height: 250, justifyContent: 'center' }}>

                        <Button onPress={()=> this.btnClick()} block style={{ backgroundColor: '#1da1f2', alignSelf: 'center',marginBottom: 20, width: '100%', borderRadius: 2, justifyContent: 'center', height: 43 , paddingBottom:10 }}>
                            <Text style={{ color: '#fff', textAlign: 'center', fontFamily:"RegularFont" , fontSize:17  }}>اعلان مميز</Text>
                        </Button>

                        <Button onPress={()=> this.btnClick()} block style={{ backgroundColor: '#1da1f2', alignSelf: 'center', width: '100%', borderRadius: 2, justifyContent: 'center', height: 43 , paddingBottom:10 }}>
                            <Text style={{ color: '#fff', textAlign: 'center', fontFamily:"RegularFont" , fontSize:17  }}>اعلان عادي</Text>
                        </Button>
                    </View>
                </Modal>
            </Footer>
        );
    }
}