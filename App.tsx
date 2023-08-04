import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { ScaledSheet } from 'react-native-size-matters';
import MainDrawer from './src/navigations/MainDrawer';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainDrawer />
      </NavigationContainer>
    </Provider>
  );
}

const styles = ScaledSheet.create({
  container: {

  }
})