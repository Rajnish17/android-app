import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './Components/AppNavigator';
import FlatCard from './screen/FlatCard';
import {SafeAreaView, ScrollView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
      </ScrollView>
    </SafeAreaView>
    //   <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer>
  );
};

export default App;
