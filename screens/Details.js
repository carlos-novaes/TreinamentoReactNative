import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class DetailsScreen extends Component {
  imgUri =
    this.props.navigation.getParam('originalImage', '') ||
    this.props.navigation.getParam('mediumImage', '');

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={styles.image}
          source={{
            uri: this.imgUri,
          }}
        />
        <Text>Name: {this.props.navigation.getParam('name', 'NO-NAME')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 120,
    resizeMode: 'contain',
  },
});
