import React from "react";
import { ResponsiveComponent } from "react-native-responsive-ui";

export default class Debug extends ResponsiveComponent {
  render() {
    const { width, height } = this.state.window;
    console.log(`New window dimensions: ${width}x${height}`);
    return null;
  }
}
