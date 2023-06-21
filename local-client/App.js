import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Styles } from './styles/appStyles';


// screns
import Home from './src/components/Home';
import Login from './src/screens/Login';
import Bottom from './src/components/Bottom';
import Signup from './src/screens/Signup';
import TestCalendar from './src/screens/TestCalendar';
import Welcome from './src/screens/Welcome';


export default function App() {
  return (
    <View style={Styles.container}>
      {/* <Login /> */}
      {/* <Signup /> */}
      <Welcome />
      {/* <TestCalendar /> */}
      {/* <Bottom /> */}
    </View>
  );
}


