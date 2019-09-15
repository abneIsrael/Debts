import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, SectionList} from 'react-native';
import Card from '../components/Card';

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

    const DATA = [
      {
        title: 'Food',
        data: [
          { id:0, description: "Pizza no Fds", value: 15 ,category: "Food", createdAt: '11/09/2019' },
          { id:1, description: "Refri Coca cola no araujo", value: 5 ,category: "Food", createdAt: '11/09/2019' },
        ],
      },
      {
        title: 'Personal',
        data: [
          { id:2, description: "Bola", value: 10, category: "Personal", createdAt: '12/09/2019' },
        ],
      },
    ];

    return (
      <View style={styles.container}>

        <SectionList style={styles.list}
          sections={ DATA } 
          keyExtractor={ (item, index) => index }
          renderSectionHeader={ ( {section} ) => <Text style={styles.listSectionTitle}>{ section.title }</Text> } 
          renderItem={ ( { item } ) => <ItemList debt = { item }/> } 
        />

      </View>
    );
  }
}

const ItemList = props => {
  const { id, description, value, category, createdAt } = props.debt;
  return (
    <Card>
      <Text>R$ {value}</Text>
      <Text>{description}</Text>
      <Text>{category}</Text>
      <Text>{createdAt}</Text>
    </Card>
  );
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
    paddingTop: 0, // 0
    backgroundColor: '#F9F9F9',
  },
  list: {
   // Layout
   marginTop: 80
  },
  listSectionTitle: {
   fontWeight: "bold",
   fontSize:20
  }
});