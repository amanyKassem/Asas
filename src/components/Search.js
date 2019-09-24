import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity , FlatList} from "react-native";
import {Container, Header, Left, Right, Button, Icon, Content, Body, Textarea, Input, Item} from 'native-base';
import FooterSection from "./FooterSection";


const categoriesProduct=[
    {id:1 , name:'مطبخ' , image:require('../../assets/images/store_pic.png')},
    {id:2 , name:'غرفة نوم كبيرة' , image:require('../../assets/images/store_pic.png')},
    {id:1 , name:'مطبخ' , image:require('../../assets/images/store_pic.png')},
    {id:1 , name:'مطبخ' , image:require('../../assets/images/store_pic.png')},
    {id:1 , name:'مطبخ' , image:require('../../assets/images/store_pic.png')},
]
class Search extends Component {
    constructor(props){
        super(props);

        this.state={
            categoriesProduct
        }
    }

    static navigationOptions = () => ({
        drawerLabel: () => null
    });

    _keyExtractor = (item, index) => item.id;

    renderItems = (item) => {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('product', { id: item.id })} style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, margin: 5 , width :'100%' }}>
                <View style={{ flex: 1, width: '100%' }}>
                    <View style={{width:'100%' , height:160, padding:15 , backgroundColor: '#00000040' , justifyContent:'center' , alignItems:'center' , position: 'absolute' , zIndex:1 , flexDirection:'column'}}>
                        <Icon name={'heart'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:17 ,alignSelf:'flex-end'}}/>
                        <View style={{width:'100%' , flex:1, marginBottom:0 , top:'40%'}}>
                            <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:17}}>{item.name}</Text>
                        </View>
                        <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <Icon name={'attach-money'} type={'MaterialIcons'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>500</Text>
                            </View>
                            <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14,  alignSelf:'flex-end'}}>قبل 3 دقائق</Text>
                        </View>

                    </View>
                    <Image source={item.image} resizeMode={'cover'} style={{ width: '100%', height: 160}}/>
                </View>
            </TouchableOpacity>
        );
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
                    <Text style={{color:'#797979' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>بحث</Text>
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
                <Content style={{ padding: 15 }}>
                    <View style={{ flexDirection: 'row' , flex:1 , width:'100%' , marginBottom:0}}>
                        <Item  style={{marginLeft:0 , borderColor:'#ebebeb' , height:47 , borderRadius:3 , borderTopWidth:2, borderRightWidth:2, borderLeftWidth:2, borderBottomWidth:2 , marginBottom:10 , flex:1 , width:'100%'}}>
                            <Input placeholder="ابحث هنا"
                                   style={{ paddingLeft:30 , textAlign:'right' , width:'100%', color:'#868686' ,fontFamily: 'RegularFont' , fontSize:15 }}
                                   placeholderTextColor={{ color: '#868686' }}
                            />
                            <Icon name={'search'} type={'MaterialIcons'} style={{ position: 'absolute', top: 13, left: 0, color: "#1da1f2" , fontSize:20}}/>
                        </Item>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center'  , marginBottom:40}}>
                        <FlatList
                            data={this.state.categoriesProduct}
                            renderItem={({item}) => this.renderItems(item)}
                            numColumns={1}
                            keyExtractor={this._keyExtractor}
                        />
                    </View>
                </Content>
                <FooterSection routeName={'search'} navigation={this.props.navigation}/>
            </Container>

        );
    }
}


export default Search;