import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCard = () => {
  return (
    <View>
    <Text style={styles.headingText}>FlatCard</Text>

    <ScrollView horizontal={true}>
      <View style={styles.container} >

        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>

        <View style={[styles.card, styles.cardTwo]}>
          <Text>green</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardfour]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardfive]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardfive]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardfive]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardfive]}>
          <Text>Blue</Text>
        </View>

      </View>
    </ScrollView>
    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 12,
  },

  container: {
    flex: 1,
    flexDirection:"row"
  },

  card: {
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'red',
  },
  cardfour: {
    backgroundColor: 'yellow',
  },
  cardfive: {
    backgroundColor: 'pink',
  },
});
