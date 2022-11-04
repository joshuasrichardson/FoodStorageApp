import * as React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

const themeGreen = "#003815";
const themeDarkGreen = "#002704";

export default class App extends React.Component {
  render() {
    return (
      <>
        <View style={{ height: 20, backgroundColor: themeDarkGreen }}></View>
        <WebView
          source={{ uri: "https://joshumi.joshuasrichardson.com/" }}
          style={{ backgroundColor: themeGreen }}
        ></WebView>
      </>
    );
  }
}
