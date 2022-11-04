import * as React from "react";
import { WebView } from "react-native-webview";

const themeGreen = "#003815";

export default class App extends React.Component {
  render() {
    return (
      <WebView
        source={{ uri: "https://joshumi.joshuasrichardson.com/" }}
        style={{ marginTop: 20, backgroundColor: themeGreen }}
      />
    );
  }
}
