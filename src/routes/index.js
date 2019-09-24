import React from "react";
import { createStackNavigator, createAppContainer , createDrawerNavigator } from "react-navigation";

import Register from '../components/Register';
import Login from '../components/Login';
import ForgetPassword from '../components/ForgetPassword';
import VerifyCode from '../components/VerifyCode';
import Home from "../components/Home";
import DrawerCustomization from "./DrawerCustomization";
import Category from "../components/Category";
import Fav from "../components/Fav";
import Product from "../components/Product";
import Notifications from "../components/Notifications";
import Search from "../components/Search";
import Profile from "../components/Profile";
import Inbox from "../components/Inbox";
import AddAd from "../components/AddAd";
import Payment from "../components/Payment";
import Feza from "../components/Feza";
import Bank from "../components/Bank";
import Settings from "../components/Settings";
import ContactUs from "../components/ContactUs";
import AboutApp from "../components/AboutApp";
import Service from "../components/Service";
import Map from "../components/Map";
import Chat from "../components/Chat";

const drawerCust = (props) => (<DrawerCustomization {...props} />)
const DrawerNavigator = createDrawerNavigator({
    home:Home,
    category:Category,
    fav:Fav,
    product:Product,
    notifications:Notifications,
    search:Search,
    profile:Profile,
    inbox:Inbox,
    addAd:AddAd,
    payment:Payment,
    feza:Feza,
    bank:Bank,
    contactUs:ContactUs,
    settings:Settings,
    aboutApp:AboutApp,
    service:Service,
    map:Map,
    chat:Chat,

},{
    initialRouteName:'home',
    drawerPosition:'right',
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    gesturesEnabled:false,
    drawerToggleRoute:'DrawerToggle',
    contentComponent:drawerCust
})
const AppNavigator = createStackNavigator({

    drawerNavigator: {
        screen: DrawerNavigator,
        navigationOptions: {
            header: null
        }
    },map: {
        screen: Map,
        navigationOptions: {
            header: null
        }
    },service: {
        screen: Service,
        navigationOptions: {
            header: null
        }
    },aboutApp: {
        screen: AboutApp,
        navigationOptions: {
            header: null
        }
    },contactUs: {
        screen: ContactUs,
        navigationOptions: {
            header: null
        }
    },profile: {
        screen: Profile,
        navigationOptions: {
            header: null
        }
    },inbox: {
        screen: Inbox,
        navigationOptions: {
            header: null
        }
    },search: {
        screen: Search,
        navigationOptions: {
            header: null
        }
    },  notifications: {
        screen: Notifications,
        navigationOptions: {
            header: null
        }
    },product: {
        screen: Product,
        navigationOptions: {
            header: null
        }
    },fav: {
        screen: Fav,
        navigationOptions: {
            header: null
        }
    },category: {
        screen: Category,
        navigationOptions: {
            header: null
        }
    },addAd: {
        screen: AddAd,
        navigationOptions: {
            header: null
        }
    },
    register: {
        screen: Register,
        navigationOptions: {
            header: null
        }
    },
    login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },forgetPassword: {
        screen: ForgetPassword,
        navigationOptions: {
            header: null
        }
    },verifyCode: {
        screen: VerifyCode,
        navigationOptions: {
            header: null
        }
    },feza: {
        screen: Feza,
        navigationOptions: {
            header: null
        }
    },payment: {
        screen: Payment,
        navigationOptions: {
            header: null
        }
    },bank: {
        screen: Bank,
        navigationOptions: {
            header: null
        }
    },settings: {
        screen: Settings,
        navigationOptions: {
            header: null
        }
    },chat: {
        screen: Chat,
        navigationOptions: {
            header: null
        }
    },
});

export default createAppContainer(AppNavigator);