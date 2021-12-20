// import {NavigationContainer} from '@react-navigation/native';
// import * as React from 'react';
// import RootNavigations from './navigation/RootNavigations';
// function App() {
//   return (
//     <NavigationContainer>
//       <RootNavigations></RootNavigations>
//     </NavigationContainer>
//   );
// }

// export default App;


import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class index extends Component {
  render() {
    return (
      <View>
        <Text testID="desc-text"> textInComponent </Text>
      </View>
    )
  }
}
