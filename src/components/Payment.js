import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, FlatList, StyleSheet} from "react-native";
import {Container, Header, Left, Right, Button, Icon, Content, Body, Item, Input, Form , Textarea , ListItem , Radio} from 'native-base';
import FooterSection from "./FooterSection";


class Payment extends Component {
    constructor(props){
        super(props);
        this.state ={

        }

    }

    static navigationOptions = () => ({
        drawerLabel: 'الدفع / العمولة',
        drawerIcon: ( <Icon style={{ fontSize: 18,top:2, color: '#1da1f2' }} type={'FontAwesome'} name={'credit-card-alt'}/> )
    })


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
                    <Text style={{color:'#797979' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>الدفع</Text>
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
                    <Form style={{ width:"100%"}}>
                        <Item  style={{marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                            <Input placeholder="الاسم"
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#ebebeb' }}
                                   autoCapitalize='none'
                            />
                            <Icon name={'user'} type={'FontAwesome'} style={{ position: 'absolute', top: 15, left: 3, color: "#ebebeb" , fontSize:17}}/>
                        </Item>
                        <Item  style={{marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                            <Input placeholder="رقم الجوال"
                                   keyboardType='phone-pad'
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#a7a7a7' }}
                            />
                            <Icon name={'phone'} type={'FontAwesome'} style={{ position: 'absolute', top: 15, left: 3, color: "#ebebeb" , fontSize:17}}/>
                        </Item>
                        <Item  style={{marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                            <Textarea rowSpan={3} placeholderTextColor={{ color: '#a7a7a7' }} style={{color: "#1da1f2",
                                fontSize:15 ,
                                width: '100%' ,
                                backgroundColor:"#fff" ,
                                borderRadius:3 ,
                                paddingRight: 25 ,
                                paddingLeft: 40 ,
                                textAlign:"right",
                                fontFamily:"RegularFont"}}  placeholder="رسالة" />
                            <Icon name={'commenting'} type={'FontAwesome'} style={{ position: 'absolute', top: 9, left: 3, color: "#ebebeb" , fontSize:17}}/>
                        </Item>
                        <View style={{width:'100%' , flex:1   , flexDirection:'column', marginBottom:13 }}>
                            <Text style={{color:'#868686' ,fontFamily: 'BoldFont' , fontSize:16  }}>نوع الدفع :</Text>
                            <ListItem style={{ borderBottomWidth: 0 ,paddingBottom:0 , paddingTop:0 , paddingRight:0 , marginLeft:0}}>
                                <Left style={{flex:1}}>
                                    <Radio selected={true}  selectedColor={'#1da1f2'} color={"#eee"} style={{top:5 , marginHorizontal: 5}}/>
                                    <Text style={{color:'#868686', fontFamily:"RegularFont", fontSize:16 }}>عمولة</Text>
                                </Left>
                            </ListItem>
                            <ListItem style={{ borderBottomWidth: 0 ,paddingBottom:0 , paddingTop:0 , paddingRight:0 , marginLeft:0}}>
                                <Left style={{flex:1}}>
                                    <Radio selected={false}  selectedColor={'#1da1f2'} color={"#eee"} style={{top:5 , marginHorizontal: 5 }}/>
                                    <Text style={{color:'#868686', fontFamily:"RegularFont", fontSize:16 }}>مساحة اعلانية</Text>
                                </Left>
                            </ListItem>
                            <Text style={{color:'#868686' ,fontFamily: 'BoldFont' , fontSize:16  }}>طريقة الدفع :</Text>
                            <ListItem style={{ borderBottomWidth: 0 ,paddingBottom:0 , paddingTop:0 , paddingRight:0 , marginLeft:0}}>
                                <TouchableOpacity onPress={()=> this.props.navigation.navigate("bank")}>
                                    <Left style={{flex:1}}>
                                        <Radio selected={false}  selectedColor={'#1da1f2'} color={"#eee"} style={{top:5 , marginHorizontal: 5}}/>
                                        <Text style={{color:'#868686', fontFamily:"RegularFont", fontSize:16 }}>تحويل بنكي</Text>
                                    </Left>
                                </TouchableOpacity>
                            </ListItem>
                            <ListItem style={{ borderBottomWidth: 0 ,paddingBottom:0 , paddingTop:0 , paddingRight:0 , marginLeft:0}}>
                                <TouchableOpacity onPress={()=> this.props.navigation.navigate("feza")}>
                                    <Left style={{flex:1}}>
                                        <Radio selected={false}  selectedColor={'#1da1f2'} color={"#eee"} style={{top:5 , marginHorizontal: 5}}/>
                                        <Text style={{color:'#868686', fontFamily:"RegularFont", fontSize:16 }}>فيزا</Text>
                                    </Left>
                                </TouchableOpacity>
                            </ListItem>
                        </View>

                        <Button onPress={()=> this.props.navigation.navigate("product")} block style={{ backgroundColor: '#1da1f2', alignSelf: 'center',
                            marginTop: 10, width: '100%', borderRadius: 2, justifyContent: 'center', height: 43 , paddingBottom:10 }}>
                            <Text style={{ color: '#fff', textAlign: 'center', fontFamily:"RegularFont" , fontSize:15  }}>ارسال</Text>
                        </Button>
                    </Form>
                </Content>
                <FooterSection routeName={'payment'} navigation={this.props.navigation}/>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    input : {
        color: "#1da1f2",
        fontSize:15 ,
        width: '100%' ,
        backgroundColor:"#fff" ,
        height:40,
        borderRadius:3 ,
        paddingRight: 25 ,
        paddingLeft: 40 ,
        textAlign:"right",
        fontFamily:"RegularFont"
    }
});
export default Payment;