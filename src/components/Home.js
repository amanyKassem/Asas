import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, FlatList, Dimensions} from "react-native";
import {Container, Header, Left, Right, Button, Icon , Content ,Body } from 'native-base';
import axios from 'axios'
import CONST from '../consts'
import { Bars } from 'react-native-loader';
import FooterSection from "./FooterSection";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
// const categories=[
//     {id:1 , name:'مطبخ' , image:require('../../assets/images/product_pic.png')},
//     {id:2 , name:'مطبخ' , image:require('../../assets/images/product_pic.png')},
//     {id:1 , name:'مطبخ' , image:require('../../assets/images/product_pic.png')},
//     {id:1 , name:'مطبخ' , image:require('../../assets/images/product_pic.png')},
//     {id:1 , name:'مطبخ' , image:require('../../assets/images/product_pic.png')},
//     {id:1 , name:'مطبخ' , image:require('../../assets/images/product_pic.png')},
//     {id:1 , name:'مطبخ' , image:require('../../assets/images/product_pic.png')},
//     {id:1 , name:'مطبخ' , image:require('../../assets/images/product_pic.png')},
// ]
class Home extends Component {
    constructor(props){
        super(props);

        this.state={
            categories:[],
            status: '0',
        }
    }

    static navigationOptions = () => ({
        drawerLabel: 'الرئيسية',
        drawerIcon: ( <Icon style={{ fontSize: 23,top:2, color: '#1da1f2' }} type={'MaterialCommunityIcons'} name={'home-outline'}/> )
    })

    componentWillMount() {
        axios.get(CONST.url + 'categories').then(response => {
            this.setState({ categories: response.data.categories, status: response.data.value })
        });
    }


    _keyExtractor = (item, index) => item.id;

    renderItems = (item) => {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('category', { id: item.id })} style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, margin: 5 , borderRadius:3}}>
                <View style={{ flex: 1, width: '100%' , borderRadius:3}}>
                    <View style={{width:'100%' , height:150 , backgroundColor: '#00000040' , justifyContent:'center' , alignItems:'center' , position: 'absolute' , zIndex:1 , borderRadius:3}}>
                        <Text style={{color:'#fff' ,fontFamily: 'BoldFont' , fontSize:25}}>{item.name}</Text>
                    </View>
                    <Image source={{uri:item.image}} resizeMode={'cover'} style={{ width: '100%', height: 150 , borderRadius:3}}/>
                </View>
            </TouchableOpacity>
        );
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
                         <Text style={{color:'#797979' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>الرئيسية</Text>
                    </Body>
                    <Right style={{flex:0}}>
                        <Button transparent onPress={()=> this.props.navigation.navigate("notifications")} style={{paddingRight:7 , paddingLeft:7}}>
                            <Image source={require('../../assets/images/noti.png')} style={{ width: 20, height: 20 }} resizeMode={'contain'} />
                        </Button>
                    </Right>
                </Header>
                <Content style={{ padding: 7}}>
                    { this.renderLoader() }
                    <View style={{ flexDirection: 'row', justifyContent: 'center' , marginBottom:30}}>
                        <FlatList
                            data={this.state.categories}
                            renderItem={({item}) => this.renderItems(item)}
                            numColumns={2}
                            keyExtractor={this._keyExtractor}
                        />
                    </View>
                </Content>
                <FooterSection routeName={'home'} navigation={this.props.navigation}/>
            </Container>

        );
    }
}


export default Home;