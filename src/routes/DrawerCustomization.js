import React, { Component } from "react";
import { View, Text, Image , TouchableOpacity  } from "react-native";
import {Container, Content, Icon} from 'native-base';
import {DrawerItems} from 'react-navigation';


class DrawerCustomization extends Component {


    render() {
        return (
            <Container>
                <Content>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("profile")} style={{flex:1 , alignItems: 'center' , paddingTop:70 , marginBottom:15}}>
                        <Image source={require('../../assets/images/profile.png')} resizeMode={'cover'} style={{ width: 90, height: 90 , borderRadius:50 }}/>
                        <Text style={{color:'#797979',  fontSize:17, fontFamily: 'RegularFont'}}>احمد الشناوي</Text>
                    </TouchableOpacity>
                    <DrawerItems {...this.props}  activeBackgroundColor='#f3fafe' inactiveBackgroundColor='transparent'
                                 labelStyle={{color: '#797979' , fontSize:17 , marginLeft: 0 , marginRight: 0 , marginBottom:10 , marginTop:10 , fontFamily: 'RegularFont' ,  fontWeight: 'normal' }} iconContainerStyle ={{  marginRight: 12}}
                                 itemStyle  = {{marginBottom:0 , paddingBottom:0 , marginTop:0 , paddingTop:0 , fontFamily: 'RegularFont'}} itemsContainerStyle ={{fontFamily: 'RegularFont'}} />

                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{flexDirection: 'row' }}>
                            <Icon style={{ fontSize: 17,top:10, color: '#1da1f2' , marginHorizontal:18 }} type={'AntDesign'} name={'logout'}/>
                            <Text style={{color:'#797979',  fontSize:17, fontFamily: 'RegularFont'}}>تسجيل الخروج</Text>
                        </TouchableOpacity>
                    </View>
                    </Content>
                <Image source={require('../../assets/images/background.png')} style={{ width: '100%' , height:100 , bottom:-20 , zIndex: -1 , position:'absolute' , left:0 , right:0}} resizeMode={'stretch'} />

            </Container>
        );
    }
}


export default DrawerCustomization;