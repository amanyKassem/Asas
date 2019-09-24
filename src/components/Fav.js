import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, FlatList, Dimensions} from "react-native";
import {Container, Header, Left, Right, Button, Icon , Content ,Body } from 'native-base';
import axios from 'axios'
import CONST from '../consts'
import { Bars } from 'react-native-loader';
import FooterSection from "./FooterSection";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const favs=[
    {id:1 , name:'غرفة نوم كبيرة' , image:require('../../assets/images/store_pic.png')},
    {id:1 , name:'غرفة نوم كبيرة' , image:require('../../assets/images/store_pic.png')},
    {id:1 , name:'غرفة نوم كبيرة' , image:require('../../assets/images/store_pic.png')},
    {id:1 , name:'غرفة نوم كبيرة' , image:require('../../assets/images/store_pic.png')},
    {id:1 , name:'غرفة نوم كبيرة' , image:require('../../assets/images/store_pic.png')},
    {id:1 , name:'غرفة نوم كبيرة' , image:require('../../assets/images/store_pic.png')},
    {id:1 , name:'غرفة نوم كبيرة' , image:require('../../assets/images/store_pic.png')},
]
class Fav extends Component {
    constructor(props){
        super(props);

        this.state={
            favs
        }
    }

    static navigationOptions = () => ({
        drawerLabel: () => null
    });

    _keyExtractor = (item, index) => item.id;

    renderItems = (item) => {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('product', { id: item.id })} style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, margin: 5 , borderRadius:3}}>
                <View style={{ flex: 1, width: '100%' , borderRadius:3}}>
                    <View style={{width:'100%' , height:170, padding:10 , backgroundColor: '#00000040' , position: 'absolute' , zIndex:1 , flexDirection:'column' }}>
                        <View style={{width:'100%' , flex:1, marginBottom:0 , top:'65%'}}>
                            <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:17}}>{item.name}</Text>
                        </View>
                        <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <Icon name={'attach-money'} type={'MaterialIcons'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>500</Text>
                            </View>
                            <Icon name={'heart'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3 ,  alignSelf:'flex-end'}}/>
                        </View>
                    </View>
                    <Image source={item.image} resizeMode={'cover'} style={{ width: '100%', height: 170 , borderRadius:3}}/>
                </View>
            </TouchableOpacity>
        );
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
                    <Text style={{color:'#797979' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>المفضلة</Text>
                    </Body>
                    <Right style={{flex:0}}>
                        <Button transparent onPress={()=> this.props.navigation.navigate("notifications")} style={{paddingRight:7 , paddingLeft:7}}>
                            <Image source={require('../../assets/images/noti.png')} style={{ width: 20, height: 20 }} resizeMode={'contain'} />
                        </Button>
                    </Right>
                </Header>
                <Content style={{ padding: 7 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' , marginBottom:30 }}>
                        <FlatList
                            data={this.state.favs}
                            renderItem={({item}) => this.renderItems(item)}
                            numColumns={2}
                            keyExtractor={this._keyExtractor}
                        />
                    </View>
                </Content>
                <FooterSection routeName={'fav'} navigation={this.props.navigation}/>
            </Container>

        );
    }
}


export default Fav;