import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Styles, Colors } from "../../styles/appStyles";
import sunflowerImg from "./../../assets/images/sunflower.jpeg";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

//import formik
import { Formik } from "formik";

//icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

//colors
// const {brand, darkLight} = Colors;

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={Styles.container}>
      <StatusBar style="dark" />
      <View style={Styles.innerContainer}>
        <Image
          style={Styles.pageImage}
          source={sunflowerImg}
          resizeMode="cover"
        />
        <Text style={Styles.pageTitle}>localRing</Text>
        <Text style={Styles.subTitle}>Account Login</Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={Styles.styledFormArea}>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="example@gmail.com"
                placeholderTextColor="gray"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                label="Password"
                icon="lock"
                placeholder=".........."
                placeholderTextColor={Colors.darklight}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <Text style={Styles.messageBox}>...</Text>
              <TouchableOpacity
                style={Styles.styledButton}
                onPress={handleSubmit}
              >
                <Text style={Styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <View style={Styles.line} />
              <TouchableOpacity
                style={styles.googleBtn}
                onPress={handleSubmit}
                google={true}
              >
                <Fontisto name="google" color={Colors.first} size={25} />
                <Text style={styles.googleText} google={true} >Sign in with Google</Text>
              </TouchableOpacity>
              <View style={styles.extraView}>
                <Text style={styles.extraText}>Don't have an account already?</Text>
                <TouchableOpacity style={styles.textLink}>
                  <Text style={styles.textLinkContent}>Signup</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
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
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 5,
    height: 60,
    alignItems: 'center',
    backgroundColor: 'green',
    flexDirection: 'row',
  },
  googleText: {
    color: 'white',
    fontSize: 16,
    padding: 25
  },
  extraView: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  extraText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#1f2937',
    fontSize: 13,
  },
  // t-opacity
  textLink: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  //text
  textLinkContent: {
    color: 'blue',
    fontSize: 13, 
  }
})

export default Login;
