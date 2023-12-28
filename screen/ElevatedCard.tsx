import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import data from "./data"

const ElevatedCard = () => {
 

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView horizontal={true}>
        <View>
          <View style={styles.imageContainer}>
            
              {data.map(item => (
                <View>
                <Image source={{uri: item.imageUrl}} style={styles.imageCard} />
                <View> 
                    <Text style ={styles.imageName}>{item.name}</Text>
                </View>
                </View>
              ))}
            
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 12,
  },
  imageContainer: {
    flex: 1,
    // flexDirection: 'row',
  },

  imageCard: {
    width: 60,
    height: 60,
    margin: 5,
    borderRadius: 50,
  },

  imageName:{
    fontSize:15,
    marginHorizontal:80,
    marginTop:-50
  }
});
