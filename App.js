import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import api from './services/api';

import Card from './components/card';
import Searchbar from './components/searchbar';

export default class App extends Component {
  state = {
    searchText: '',
    searchResults: null,
  };

  submitSearch = async () => {
    if (this.state.searchText !== '') {
      try {
        const response = await api.get('/search/shows', {
          params: {q: this.state.searchText},
        });
        this.setState({searchResults: response.data});
      } catch (error) {
        console.log(JSON.stringify(error));
      }
    }
  };

  searchHandler = text => {
    this.setState({searchText: text});
  };

  render() {
    return (
      <View style={styles.screen}>
        <Searchbar
          handleSubmitSearch={this.submitSearch}
          search={this.searchHandler}
        />
        <View style={styles.results}>
          <FlatList
            data={this.state.searchResults}
            renderItem={({item}) => <Card info={item.show} />}
            keyExtractor={item => item.show.id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
  },
  search: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: 55,
    height: 40,
    width: 250,
    borderColor: 'lightgray',
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
  results: {
    flex: 4,
    backgroundColor: 'lightgray',
    alignItems: 'center',
  },
});
