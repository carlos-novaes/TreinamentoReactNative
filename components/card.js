import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default class Card extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          this.props.navigation.navigate('Details', {
            itemId: this.props.info.id,
            mediumImage:
              this.props.info.image.medium ||
              'https://i.ibb.co/YfZFr7k/noimg.png',
            originalImage: this.props.info.image.original,
            name: this.props.info.name,
            genres: this.props.info.genres,
            status: this.props.info.status,
            networkName: this.props.info.network.name,
            summary: this.props.info.summary,
          })
        }>
        <View style={styles.cardView}>
          <View>
            <Image
              style={styles.image}
              source={{
                uri:
                  this.props.info.image == null
                    ? 'https://i.ibb.co/YfZFr7k/noimg.png'
                    : this.props.info.image.original ||
                      this.props.info.image.medium,
              }}
            />
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.name}>
              {this.props.info.name || 'Sem nome'}
            </Text>
            <Text style={styles.genres}>
              {this.props.info.genres || 'Sem gênero'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  cardView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 120,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 20,
    marginLeft: 10,
  },
  genres: {
    fontSize: 16,
    marginLeft: 10,
  },
});
