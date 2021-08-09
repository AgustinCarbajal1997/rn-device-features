import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigatorApp } from './navigation/Navigator';
import { Provider } from 'react-redux';
import store from './store';

import { init } from './db';

init()
  .then(() => console.log('Database initialized'))
  .catch((err) => {
    console.log('Database failed to connect');
    console.log(err.message)
  });

export default function App() {
  return (
    <Provider store={store} >
      <NavigatorApp/>
    </Provider>

  );
}


