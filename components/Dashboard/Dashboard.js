import React, { Component } from "react";
import { Container, Content } from "native-base";

import SearchBar from "../SearchBar/SearchBar";
import Menu from "../Menu/Menu";

import styles from "./styles";

class Dashboard extends Component {
  static navigationOptions = {
    headerTitle: "Find all Around Me!"
  };
  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.container}>
        <SearchBar />
        <Content>
          <Menu navigation={navigation} />
        </Content>
      </Container>
    );
  }
}

export default Dashboard;
