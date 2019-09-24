import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity , ScrollView , Share } from "react-native";
import {Container, Header, Left, Right, Button, Icon , Content ,Body , Card, CardItem, Thumbnail , Textarea} from 'native-base';
import FooterSection from "./FooterSection";
import StarRating from 'react-native-star-rating';


class Product extends Component {
    constructor(props){
        super(props);

        this.state={
            starCount: 3,
            blueHeart: true,
        }
    }
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    blueHeart() {
        this.setState({ blueHeart: !this.state.blueHeart })
    }
    static navigationOptions = () => ({
        drawerLabel: () => null
    });

    onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            })

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };



    render() {
        return (

            <Container >
                <Header style={{zIndex: 9999999, marginTop: 20, backgroundColor: "transparent" , alignItems: 'center', paddingTop: 0, height: 80, justifyContent: 'center'}} noShadow>
                        <Left style={{flex:0}}>
                            <Button transparent onPress={() => this.props.navigation.openDrawer()} style={{paddingRight:0 , paddingLeft:0}} >
                                <Image source={require('../../assets/images/menu.png')} style={{ width: 25, height: 25 }} resizeMode={'contain'} />
                            </Button>
                        </Left>
                        <Body style={{  alignSelf:'center'}}>
                        </Body>
                        <Right style={{flex:0}}>
                            <Button transparent onPress={() => this.props.navigation.goBack()} style={{  paddingRight:7 , paddingLeft:7}}>
                                <Image source={require('../../assets/images/back.png')} style={{ width: 20, height: 20 }} resizeMode={'contain'} />
                            </Button>
                        </Right>
                </Header>
                <Content style={{ zIndex: -99, marginTop: -100 }}>
                    <View style={{ flex: 1, width: '100%' }}>
                        <View style={{width:'100%' , height:250, padding:15 , backgroundColor: '#00000040' , justifyContent:'center' , alignItems:'center' , position: 'absolute' , zIndex:1 , flexDirection:'column'}}>
                            <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>
                                <View style={{alignSelf:'flex-end'}}>
                                    <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:17 }}>سفرة عائلية صغيره</Text>
                                </View>
                                <View style={{flexDirection:'row' , alignSelf:'flex-end'}}>
                                    <TouchableOpacity onPress={() => this.blueHeart()}>
                                        <Icon name={'heart'} type={'FontAwesome'} style={{ color: this.state.blueHeart === true ? "#1da1f2" :"#fff" , fontSize:17 }}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("chat")}>
                                        <Icon name={'comment'} type={'FontAwesome'} style={{  color: "#fff" , fontSize:17 , marginHorizontal:15 }}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={this.onShare}>
                                        <Icon name={'share-alt'} type={'FontAwesome'} style={{  color: "#fff" , fontSize:17 }}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <Image source={require('../../assets/images/store_pic.png')} resizeMode={'cover'} style={{ width: '100%', height: 250}}/>
                    </View>
                    <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between' , paddingLeft:10, paddingRight:15 , paddingTop:5}}>
                        <View style={{flexDirection:'row'}}>
                            <Icon name={'attach-money'} type={'MaterialIcons'} style={{  color: "#1da1f2" , fontSize:17 , top:10 }}/>
                            <Text style={{color:'#868686' ,fontFamily: 'RegularFont' , fontSize:17 , marginHorizontal: 5 }}>200</Text>
                        </View>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={this.state.starCount}
                            fullStarColor={'#fac917'}
                            emptyStarColor={'#f8eab7'}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                            starSize={17}
                            starStyle={{marginHorizontal: 2 }}
                            containerStyle={{backgroundColor:'#f7f7f7' , alignItems:'center' , justifyContent:'center' , marginTop:5}}
                            reversed
                        />
                    </View>
                    <View style={{width:'100%' , flex:1  , paddingLeft:15, paddingRight:15 , flexDirection:'column' }}>
                        <View style={{flexDirection:'row'}}>
                            <Icon name={'map-marker'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , top:10 }}/>
                            <Text style={{color:'#868686' ,fontFamily: 'RegularFont' , fontSize:16 , marginHorizontal: 5 }}>الرياض - السعودية</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Icon name={'phone'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , top:10 }}/>
                            <Text style={{color:'#868686' ,fontFamily: 'RegularFont' , fontSize:16 , marginHorizontal: 5 }}>0123456789</Text>
                        </View>
                        <Text style={{color:'#868686' ,fontFamily: 'RegularFont' , fontSize:16  }}>سفرة عائلية صغيرة مكونة من تربيزه و 4 كراسي كبار و توجد باللون البني الغامق</Text>
                    </View>
                    <View style={{width:'100%' , flex:1  , paddingLeft:15, paddingRight:15 , flexDirection:'column' , marginTop:10 }}>
                        <Text style={{color:'#868686' ,fontFamily: 'RegularFont' , fontSize:17  }}>التعليقات</Text>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../assets/images/profile.png')} />
                                    <Body>
                                        <Text style={{color:'#222' ,fontFamily: 'RegularFont' , fontSize:15 , marginBottom:5 }}>عبدالله <Text style={{color:'#868686' ,fontFamily: 'RegularFont' , fontSize:13  }}>منذ 3 دقائق</Text></Text>
                                        <Text note style={{color:'#868686' ,fontFamily: 'RegularFont' , fontSize:12, padding:7 , lineHeight:18 , backgroundColor:'#f7f7f7' , borderRadius:25 }}>مثال لنص مثال لنص مثال لنص مثال لنص مثال لنص مثال لنص مثال لنص مثال لنص</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../assets/images/profile.png')} />
                                    <Body>
                                        <Textarea rowSpan={2} placeholderTextColor={{ color: "#868686" }} style={{ textAlign:'right' , borderTopWidth:0 , borderBottomWidth:0 , borderLeftWidth:0 , borderRightWidth:0 , color:'#868686' ,fontFamily: 'RegularFont' , fontSize:12, padding:7 , lineHeight:18 , backgroundColor:'#f7f7f7' , borderRadius:25 }} bordered placeholder="اكتب تعليقك هنا" />
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>
                        <View style={{ borderBottomWidth:2 , borderBottomColor:'#eee' , marginTop: 15}}/>
                    </View>
                    <View style={{width:'100%' , flex:1  , paddingLeft:15, paddingRight:15 , flexDirection:'column'  }}>
                        <Text style={{color:'#868686' ,fontFamily: 'RegularFont' , fontSize:17 , marginBottom:3  }}>اعلانات مشابهه</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom:30}}>
                            <TouchableOpacity  style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, margin: 5 , borderRadius:3}}>
                                <View style={{ flex: 1, width: '100%' , borderRadius:3}}>
                                    <View style={{width:'100%' , height:170, padding:10 , backgroundColor: '#00000040' , position: 'absolute' , zIndex:1 , flexDirection:'column' }}>
                                        <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>
                                            <View style={{flexDirection:'row'}}>
                                                <Icon name={'map-marker'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>القاهرة - مصر</Text>
                                            </View>
                                            <Icon name={'heart'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3 ,  alignSelf:'flex-end'}}/>
                                        </View>
                                    </View>
                                    <Image source={require('../../assets/images/store_pic.png')} resizeMode={'cover'} style={{ width: 150, height: 170 , borderRadius:3}}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity  style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, margin: 5 , borderRadius:3}}>
                                <View style={{ flex: 1, width: '100%' , borderRadius:3}}>
                                    <View style={{width:'100%' , height:170, padding:10 , backgroundColor: '#00000040' , position: 'absolute' , zIndex:1 , flexDirection:'column' }}>
                                        <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>
                                            <View style={{flexDirection:'row'}}>
                                                <Icon name={'map-marker'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>القاهرة - مصر</Text>
                                            </View>
                                            <Icon name={'heart'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3 ,  alignSelf:'flex-end'}}/>
                                        </View>
                                    </View>
                                    <Image source={require('../../assets/images/store_pic.png')} resizeMode={'cover'} style={{ width: 150, height: 170 , borderRadius:3}}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity  style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, margin: 5 , borderRadius:3}}>
                                <View style={{ flex: 1, width: '100%' , borderRadius:3}}>
                                    <View style={{width:'100%' , height:170, padding:10 , backgroundColor: '#00000040' , position: 'absolute' , zIndex:1 , flexDirection:'column' }}>
                                        <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>
                                            <View style={{flexDirection:'row'}}>
                                                <Icon name={'map-marker'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>القاهرة - مصر</Text>
                                            </View>
                                            <Icon name={'heart'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3 ,  alignSelf:'flex-end'}}/>
                                        </View>
                                    </View>
                                    <Image source={require('../../assets/images/store_pic.png')} resizeMode={'cover'} style={{ width: 150, height: 170 , borderRadius:3}}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity  style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, margin: 5 , borderRadius:3}}>
                                <View style={{ flex: 1, width: '100%' , borderRadius:3}}>
                                    <View style={{width:'100%' , height:170, padding:10 , backgroundColor: '#00000040' , position: 'absolute' , zIndex:1 , flexDirection:'column' }}>
                                        <View style={{width:'100%' , flex:1 , flexDirection:'row' , justifyContent:'space-between'}}>
                                            <View style={{flexDirection:'row'}}>
                                                <Icon name={'map-marker'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3, alignSelf:'flex-end'}}/>
                                                <Text style={{color:'#fff' ,fontFamily: 'RegularFont' , fontSize:14 , marginHorizontal: 5 , alignSelf:'flex-end'}}>القاهرة - مصر</Text>
                                            </View>
                                            <Icon name={'heart'} type={'FontAwesome'} style={{  color: "#1da1f2" , fontSize:14 , bottom:3 ,  alignSelf:'flex-end'}}/>
                                        </View>
                                    </View>
                                    <Image source={require('../../assets/images/store_pic.png')} resizeMode={'cover'} style={{ width: 150, height: 170 , borderRadius:3}}/>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </Content>
                <FooterSection routeName={'product'} navigation={this.props.navigation}/>
            </Container>

        );
    }
}


export default Product;