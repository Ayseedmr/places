import React, { Component } from "react";
import { StyleSheet} from 'react-native';
import { SearchBar } from "react-native-elements";
export default class Search extends Component {
  render() {
    return (
      <SearchBar
        placeholder="Search..."
        value={null}
        round
        platform="android"
        containerStyle={styles.searchContainer}
      />
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
       borderBottomColor: "#ECECEC",
       borderBottomWidth: 2
}
});
