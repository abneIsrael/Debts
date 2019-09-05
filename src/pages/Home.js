import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableNativeFeedback} from 'react-native';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {
  
  render() {
    
    return( 
      <View >

        <Text style={styles.hello}>Hello, Abner.</Text>

        <Card>

          <View style={styles.cardBody}>
            <View style={styles.section}>
              <Text style={styles.cardTitle}>Your Debts</Text>
            </View>
            
            <View style={styles.section}>
              <Text style={styles.sectionLabel}>This Month</Text>
              <Text style={styles.sectionValue}>$ 00,00</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>Total</Text>
              <Text style={styles.sectionValue}>$ 00,00</Text>
            </View>
          </View>

          
          <View style={styles.cardFooter}>

            <TouchableNativeFeedback onPress={()=>{}} >
              <View style={styles.button}>
                <View style={styles.buttonLabel}>
                  <Icon name="line-chart" style={styles.buttonLabelIcon} />
                  <Text style={styles.buttonLabelText}>View Analysis Debts</Text>
                </View>
                <Icon name="angle-right" style={styles.buttonRightIcon} />
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback onPress={()=>{}} >
              <View style={styles.button}>
                <View style={styles.buttonLabel}>
                  <Icon name="dollar" style={styles.buttonLabelIcon} />
                  <Text style={styles.buttonLabelText}>View your Debts</Text>
                </View>
                <Icon name="angle-right" style={styles.buttonRightIcon} />
              </View>
            </TouchableNativeFeedback>

          </View>

        </Card>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  hello: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 26,
    fontWeight: "bold"
  },
  cardBody:{
    // Layout
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  cardTitle: {
    fontWeight: "bold",
  },
  section:{
    marginBottom:20
  },
  sectionLabel:{
    fontSize:14
  },
  sectionValue:{
    fontSize:28
  },
  button: {
    // Flex
    flexDirection: "row",

    // Alignment
    justifyContent: "space-between",
    
    // Layout
    backgroundColor: '#F6F6F6',
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 15,
    paddingRight: 15
  },
  buttonLabel:{
    flexDirection: "row"
  },
  buttonLabelIcon: {
    fontSize: 18
  },
  buttonLabelText:{
    marginLeft: 10
  },
  buttonRightIcon: {
    alignSelf: "center",
    fontSize: 15
  }
});
