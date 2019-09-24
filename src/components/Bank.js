import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, FlatList, StyleSheet} from "react-native";
import {Container, Header, Left, Right, Button, Icon, Content, Body, Item, Input, Form , Textarea , ListItem , Radio} from 'native-base';
import FooterSection from "./FooterSection";


class Bank extends Component {
    constructor(props){
        super(props);
        this.state ={

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
                    <Text style={{color:'#797979' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>تحويل بنكي</Text>
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
                            <Input placeholder="اسم المستخدم"
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#ebebeb' }}
                                   autoCapitalize='none'
                            />
                            <Icon name={'user'} type={'FontAwesome'} style={{ position: 'absolute', top: 15, left: 3, color: "#ebebeb" , fontSize:17}}/>
                        </Item>
                        <Item  style={{marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                            <Input placeholder="مبغ العمولة"
                                   keyboardType='phone-pad'
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#a7a7a7' }}
                            />
                            <Icon name={'attach-money'} type={'MaterialIcons'} style={{ position: 'absolute', top: 15, left: 3, color: "#ebebeb" , fontSize:20}}/>
                        </Item>
                        <Item  style={{marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                            <Input placeholder="اسم البنك الذي تم التحويل اليه"
                                   autoCapitalize='none'
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#a7a7a7' }}
                            />
                            <Icon name={'credit-card-alt'} type={'FontAwesome'} style={{ position: 'absolute', top: 15, left: 3, color: "#ebebeb" , fontSize:17}}/>
                        </Item>
                        <Item  style={{marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                            <Input placeholder="متي تم التحويل"
                                   autoCapitalize='none'
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#a7a7a7' }}
                            />
                            <Icon name={'calendar'} type={'FontAwesome'} style={{ position: 'absolute', top: 15, left: 3, color: "#ebebeb" , fontSize:17}}/>
                        </Item>
                        <Item  style={{marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                            <Input placeholder="اسم المحول"
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
                            <Input placeholder="رقم الاعلان"
                                   keyboardType='phone-pad'
                                   style={styles.input}
                                   placeholderTextColor={{ color: '#a7a7a7' }}
                            />
                            <Icon name={'volume-down'} type={'FontAwesome'} style={{ position: 'absolute', top: 15, left: 3, color: "#ebebeb" , fontSize:17}}/>
                        </Item>
                        <View style={{flexDirection: 'row' }}>
                            <Item  style={{marginLeft:0 , flex:1, marginRight:15, borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                                <Input placeholder="رقم التحقق"
                                       keyboardType='phone-pad'
                                       style={{color: "#1da1f2",
                                           fontSize:15 ,
                                           width: '100%' ,
                                           backgroundColor:"#fff" ,
                                           height:40,
                                           borderRadius:3 ,
                                           paddingRight: 25 ,
                                           paddingLeft: 40 ,
                                           textAlign:"right",
                                           fontFamily:"RegularFont", flex:1}}
                                       placeholderTextColor={{ color: '#a7a7a7' }}
                                />
                                <Icon name={'credit-card-alt'} type={'FontAwesome'} style={{ position: 'absolute', top: 15, left: 3, color: "#ebebeb" , fontSize:17}}/>
                            </Item>
                            <Text style={{ color: '#a7a7a7', textAlign: 'center', fontFamily:"RegularFont" , fontSize:15 , width:'25%'}}>5207</Text>
                        </View>
                        <Item  style={{marginLeft:0 , borderColor:'#ebebeb' , borderTopWidth:0, borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:2 , marginBottom:13}}>
                            <Textarea rowSpan={2} placeholderTextColor={{ color: '#a7a7a7' }} style={styles.input}  placeholder="الملاحظات" />
                            <Icon name={'file-text'} type={'FontAwesome'} style={{ position: 'absolute', top: 9, left: 3, color: "#ebebeb" , fontSize:17}}/>
                        </Item>

                        <Button onPress={()=> this.props.navigation.navigate("product")} block style={{ backgroundColor: '#1da1f2', alignSelf: 'center',
                            marginTop: 10, width: '100%', borderRadius: 2, justifyContent: 'center', height: 43 , paddingBottom:10 }}>
                            <Text style={{ color: '#fff', textAlign: 'center', fontFamily:"RegularFont" , fontSize:15  }}>ارسال</Text>
                        </Button>
                    </Form>
                </Content>
                <FooterSection routeName={'bank'} navigation={this.props.navigation}/>
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
export default Bank;