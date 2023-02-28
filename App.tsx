
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Dashboard from './src/pages/Dashboard'
import Detail from './src/pages/Detail'
import Home from './src/pages/Home'
import Search from './src/pages/Search'
import Splash from './src/pages/Splash'
import Routes from './src/routes/RootStack';



const App = () => {
  return <SafeAreaView style={{flex: 1}}>
    {/* <Splash/> */}
    {/* <Home/> */}
    {/* <Dashboard /> */}
    {/* <Detail/> */}
    {/* <Search /> */}
    <Routes/>
  </SafeAreaView>
}

export default App;
