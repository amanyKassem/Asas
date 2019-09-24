import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity , FlatList} from "react-native";
import {Container, Header, Left, Right, Button, Icon , Content ,Body } from 'native-base';
import FooterSection from "./FooterSection";


const categoriesProduct=[
    {id:1 , name:'مطبخ' , image:require('../../assets/images/store_pic.png')},
    {id:2 , name:'غرفة نوم كبيرة' , image:require('../../assets/images/store_pic.png')},
    {id:1 , name:'مطبخ' , image:require('../../assets/images/store_pic.png')},
    {id:1 , name:'مطبخ' , image:require('../../assets/images/store_pic.png')},
    {id:1 , name:'مطبخ' , image:require('../../assets/images/store_pic.png')},
]
class Category extends Component {
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
                    <View style={{width:'100%' , height:100, padding:15 , backgroundColor: '#00000040' , justifyContent:'center' , alignItems:'center' , position: 'absolute' , zIndex:1 , flexDirection:'column'}}>
                        <View style={{width:'100%' , flex:1, marginBottom:15 }}>
                            <Icon name={'heart'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:17 ,alignSelf:'flex-end'}}/>
                            <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:17,alignSelf:'flex-start'}}>{item.name}</Text>
                        </View>
                        <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <Icon name={'map-marker'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , top:9}}/>
                                <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 }}>65 كم</Text>
                            </View>
                            <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14}}>قبل 3 دقائق</Text>
                        </View>
                    </View>
                    <Image source={item.image} resizeMode={'cover'} style={{ width: '100%', height: 100}}/>
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
                    <Text style={{color:'#797979' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>مطبخ</Text>
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' , top:4}}>
                        <Button transparent  style={{borderWidth:1, borderBottomWidth:0, borderColor:'#eee', alignSelf:'center' ,flexDirection: 'row', justifyContent: 'center' , alignItems:'center'}}>
                            <Text style={{  color: "#b6b6b6" , fontSize:17, fontFamily:"RegularFont" , marginLeft:16}}>المدينة</Text>
                            <Icon name={'map-marker'} type={'FontAwesome'} style={{  color: "#b6b6b6" , fontSize:17 , top:3}}/>
                        </Button>
                        <Button transparent style={{borderWidth:1,borderTopWidth:3,borderBottomWidth:0, borderColor:'#eee',alignSelf:'center' ,flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                            <Text style={{  color: "#1da1f2" , fontSize:17, fontFamily:"RegularFont", marginLeft:16}}>القريب</Text>
                            <Icon name={'location-arrow'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:17, top:3}}/>
                        </Button>
                        <Button transparent onPress={()=> this.props.navigation.navigate("map")} style={{borderWidth:1,borderBottomWidth:0, borderColor:'#eee',alignSelf:'center' ,flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                            <Text style={{  color: "#b6b6b6" , fontSize:17, fontFamily:"RegularFont", marginLeft:16}}>الخريطة</Text>
                            <Icon name={'globe'} type={'FontAwesome'} style={{  color: "#b6b6b6" , fontSize:17, top:3}}/>
                        </Button>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, margin: 5 , width :'100%' }}>
                            <View style={{width:'100%' , height:100 , backgroundColor: '#00000040' , justifyContent:'center' , alignItems:'center' , position: 'absolute' , zIndex:1}}>
                                <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:25}}>ضع البانر الاعلاني هنا</Text>
                            </View>
                            <Image source={require('../../assets/images/product_pic.png')} resizeMode={'cover'} style={{ width: '100%', height: 100}}/>
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
                <FooterSection routeName={'category'} navigation={this.props.navigation}/>
            </Container>

        );
    }
}


export default Category;