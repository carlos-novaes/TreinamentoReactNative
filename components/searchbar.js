import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const searchbar = props => (
  <View style={styles.search}>
    <TextInput
      placeholder={'Procure uma série...'}
      style={styles.input}
      onChangeText={props.search}
      onSubmitEditing={props.handleSubmitSearch}
    />
  </View>
);
const styles = StyleSheet.create({
  search: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default searchbar;
