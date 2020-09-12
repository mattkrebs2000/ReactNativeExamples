import React, { Component } from "react";
import { Dimensions, View, StyleSheet, Text } from "react-native";

let { width, height, horizontal } = Dimensions.get("screen");

class Peace extends Component {
  constructor() {
    super();
    this.state = {
      width,
      height,
      horizontal,
      OrientationStatus: "",
    };
  }

  DetectOrientation() {
    if (this.state.width > this.state.height) {
      console.log("you are horizontal");

      this.setState({
        OrientationStatus: "Landscape Mode",
      });
    } else {
      console.log("you are vertical");

      this.setState({
        OrientationStatus: "Portrait Mode",
      });
    }
  }

  _handleLayout = (event) => {
    this.setState(
      {
        width: event.nativeEvent.layout.width,
        height: event.nativeEvent.layout.height,
        horizontal: width > height,
      },
      () => this.DetectOrientation()
    );
  };

  render() {
    width = this.state.width;
    height = this.state.height;
    horizontal = this.state.horizontal;
    console.log(this.state.horizontal);
    console.log("happy", this.state.horizontal);
    /* this should re-render our component and assign to outer scope vars */

    return (
      <View>
        <View style={styles.container} onLayout={this._handleLayout.bind(this)}>
          <Text style={styles.text}>
            {" "}
            What the heck {this.state.width}What the aheck {this.state.height}{" "}
            What the heck {this.state.horizontal}
          </Text>
        </View>
      </View>
    );
  }
}

export default Peace;

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  text: {
    top: 200,
  },
});
