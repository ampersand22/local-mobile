import { View, TouchableOpacity } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import { Styles } from "../../styles/appStyles"

export default function Bottom() {

  return (
    <View style={Styles.bottomTab}>
        <TouchableOpacity style={Styles.bottomTabBtn}>
          <FontAwesome name="home" size={30} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.bottomTabBtn}>
          <FontAwesome name="search" size={30} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.bottomTabBtn}>
          <FontAwesome name="plus" size={30} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.bottomTabBtn}>
          <FontAwesome name="bell" size={30} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.bottomTabBtn}>
          <FontAwesome name="user" size={30} color="#888" />
        </TouchableOpacity>
      </View>
  )
}