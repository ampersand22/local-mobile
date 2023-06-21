import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  Styles,
  Colors,
  Line,
  StyledButton,
  ButtonText,
} from "../../styles/appStyles";
import sunflowerImg from "./../../assets/images/sunflower.jpeg";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { WelcomeContainer } from "../../styles/appStyles";

//import formik
import { Formik } from "formik";

//icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

//colors
// const {brand, darkLight} = Colors;

const Welcome = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <>
      <StatusBar style="dark" />
      <View style={Styles.innerContainer}>
        <Image
          style={Styles.pageImage}
          source={sunflowerImg}
          resizeMode="cover"
        />
        <Text style={Styles.pageTitle}>localRing</Text>
        <Text style={Styles.subTitle}>Account Login</Text>
        <WelcomeContainer>
          <View style={Styles.styledFormArea}>
            <Line />
            <StyledButton onPress={() => {}}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
            
            
          </View>
        </WelcomeContainer>
      </View>
    </>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <View style={Styles.leftIcon}>
        <Octicons name={icon} size={30} color={Colors.brand} />
      </View>
      <Text style={Styles.styledInputLabel}>{label}</Text>
      <TextInput style={Styles.styledTextInput} {...props} />
      {isPassword && (
        <TouchableOpacity
          style={Styles.rightIcon}
          onPress={() => setHidePassword(!hidePassword)}
        >
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={Colors.darkLight}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export const styles = StyleSheet.create({
  googleBtn: {
    padding: 15,
    justifyContent: "center",
    borderRadius: 5,
    marginVertical: 5,
    height: 60,
    alignItems: "center",
    backgroundColor: "green",
    flexDirection: "row",
  },
  googleText: {
    color: "white",
    fontSize: 16,
    padding: 25,
  },
  extraView: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  extraText: {
    justifyContent: "center",
    alignItems: "center",
    color: "#1f2937",
    fontSize: 13,
  },
  // t-opacity
  textLink: {
    justifyContent: "center",
    alignItems: "center",
  },
  //text
  textLinkContent: {
    color: "blue",
    fontSize: 13,
  },
});

export default Welcome;
