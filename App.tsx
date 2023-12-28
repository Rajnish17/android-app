import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './Components/AppNavigator';
import FlatCard from './screen/FlatCard';
import {SafeAreaView, ScrollView} from 'react-native';
import ElevatedCard from './screen/ElevatedCard';

const App = () => {
  return (
   <SafeAreaView>
     <ScrollView>

       <FlatCard />
       <ElevatedCard/>
     </ScrollView>
     </SafeAreaView>
  
    //   <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer>
  );
};

export default App;
