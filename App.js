import React from 'react';
import { StyleSheet, Text, View , I18nManager} from 'react-native';
import { Root } from "native-base";
import AppNavigator from './src/routes';
import {Font} from "expo";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.loadFontAsync();
    this.state = {
      fontLoaded: false
    };
  }
  componentWillMount() {
    I18nManager.forceRTL(true);
  }
  async loadFontAsync() {
    try {
      await Font.loadAsync({ RegularFont: require("./assets/fonts/DINNextLTW23-Regular.ttf") });
      await Font.loadAsync({ BoldFont: require("./assets/fonts/DINNextLTW23-Bold.ttf") });
      await Font.loadAsync({ Roboto: require("native-base/Fonts/Roboto.ttf") });
      await Font.loadAsync({ Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf") });
      this.setState({ fontLoaded: true });
    } catch (e) {
      console.log(e);
    }
  }
  render() {

    if (!this.state.fontLoaded) {
      return <View />;
    }

    return (
        <Root>
          <AppNavigator />
        </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
