import { StyleSheet, Text, View, Image } from 'react-native';



export default function TopNavbar({ navigation, page }) {


  return (
    <View style={styles.container}> 
      <Text>TopNavbar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingVertical: 10,
      position: 'absolute',
      top: 0,
      zIndex: 100,
      backgroundColor: "#111111",

  }
})