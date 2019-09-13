import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, SectionList} from 'react-native';

export default class DebtList extends Component {
  
  static navigationOptions = {
    headerTitle: "Debit List",
    headerTransparent: true,
    headerRight: (
      //Btn Salve New Debit
      <TouchableOpacity onPress={ () => {} }> 
        <Text style={ {paddingRight:20, color:"#9d00dE", fontSize:15} }>Filter</Text>
      </TouchableOpacity>
      ),
  };


  render() {

    const debts = [
      { id:0, description: "Pizza no Fds", value: 15 ,category: "Food", createdAt: '12/09/2019' },
      { id:1, description: "Refri Coca cola no araujo", value: 5 ,category: "Food", createdAt: '13/09/2019' },
      { id:2, description: "Pao de manha na padaria", value: 2, category: "Food", createdAt: '13/09/2019' },
    ];

    return (
      <View style={styles.container}>

        <SectionList
          sections={ debts } 
          renderSectionHeader={ ( { section }) => <Text>{section.createdAt}</Text> } 
          renderItem={ ( { item } ) => <Text>{item.description} </Text> } 
          keyExtractor={ (item, index) => index }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // Flex
    flex:1,

    // Alignment

    // Layout
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 0,
    backgroundColor: '#F9F9F9',
  }
});