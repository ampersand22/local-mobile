import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Styles } from './styles/appStyles';


// screns
import Home from './src/components/Home';
import Login from './src/screens/Login';
import Bottom from './src/components/Bottom';


export default function App() {
  return (
    <View style={Styles.container}>
      <Login />
      
      <Bottom />
    </View>
  );
}


