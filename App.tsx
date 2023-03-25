import { View, Text } from 'react-native'
import React from 'react'
import StackNavigation from './src/navigation/StackNavigation'
import {Provider} from 'react-redux'
import { store,persistor } from './src/redux/Store'
import { PersistGate } from 'redux-persist/integration/react'
export default function App() {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <StackNavigation/>
    </PersistGate>
    </Provider>
  )
}