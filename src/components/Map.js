import React, { Component } from "react";
import {View, Text, Image, Dimensions, WebView , TouchableOpacity} from "react-native";
import {Container, Header, Left, Right, Button, Icon, Content, Body} from 'native-base';
import { MapView } from 'expo';
import FooterSection from "./FooterSection";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Map extends Component {
    constructor(props){
        super(props);
        this.state ={
            markers: [{
                title: 'hello',
                coordinates: {
                    latitude: 3.148561,
                    longitude: 101.652778
                },
            },
                {
                    title: 'hello2',
                    coordinates: {
                        latitude: 3.159771,
                        longitude: 101.655449
                    },
                }]
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
                    <Text style={{color:'#797979' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>مطابخ</Text>
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
                <Content style={{ }}>
                    <View style={{flex: 1 }}>
                        <MapView style={{ flex: 1 , width:width , height:height }} initialRegion={{
                            latitude: 3.148561,
                            longitude: 101.652778,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }} >

                            {this.state.markers.map((marker , i) => (
                                <MapView.Marker key={i}
                                    coordinate={marker.coordinates}
                                    title={marker.title}
                                    image={require('../../assets/images/location.png')}
                                    onCalloutPress={() => this.props.navigation.navigate('product')}
                                >
                                    <MapView.Callout >
                                        <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, margin: 5 , width :200 }}>
                                            <View style={{ flex: 1, width: '100%' }}>
                                                <View style={{width:'100%' , height:100, padding:15 , backgroundColor: '#00000040' , justifyContent:'center' , alignItems:'center' , position: 'absolute' , zIndex:1 , flexDirection:'column'}}>
                                                    <View style={{width:'100%' , flex:1, marginBottom:15 }}>
                                                        <Icon name={'heart'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:17 ,alignSelf:'flex-end'}}/>
                                                        <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:17,alignSelf:'flex-start'}}>مطبخ</Text>
                                                    </View>
                                                    <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>
                                                        <View style={{flexDirection:'row'}}>
                                                            <Icon name={'map-marker'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , top:9}}/>
                                                            <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 }}>65 كم</Text>
                                                        </View>
                                                        <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14}}>قبل 3 دقائق</Text>
                                                    </View>
                                                </View>
                                                <WebView
                                                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnLJyIqgpyN1IfklpRdwqujsODSTcpx2gVgPahZzZXSZ0B2b2'}}
                                                    // style={{flex: 1}}
                                                    style={{height: 100, width: '100%'}}
                                                />
                                                {/*<Image source={require('../../assets/images/store_pic.png')} resizeMode={'cover'} style={{ width: '100%', height: 100}}/>*/}
                                            </View>
                                        </View>
                                    </MapView.Callout>
                                </MapView.Marker>
                            ))}
                        </MapView>

                    </View>

                </Content>
                <FooterSection routeName={'map'} navigation={this.props.navigation}/>
            </Container>

        );
    }
}


export default Map;