import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { Styles, Colors } from "../../styles/appStyles";
import sunflowerImg from "./../../assets/images/sunflower.jpeg";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

//import formik
import { Formik } from "formik";

//icons
import {Octicons, Ionicons} from '@expo/vector-icons';

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
          {({handleChange, handleBlur, handleSubmit, values}) => <View style={Styles.styledFormArea}>
              <MyTextInput 
                label="Email Address"
                icon='mail'
                placeholder="example@gmail.com"
                placeholderTextColor='gray'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput 
                label="Password"
                icon='lock'
                placeholder=".........."
                placeholderTextColor={Colors.darklight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <TouchableOpacity style={Styles.styledButton} onPress={handleSubmit} >
                <Text style={Styles.buttonText}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>}
        </Formik>
      </View>
    </View>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <View style={Styles.leftIcon}>
        <Octicons name={icon} size={30} color={Colors.brand} />
      </View>
      <Text style={Styles.styledInputLabel}>{label}</Text>
      <TextInput style={Styles.styledTextInput} {...props}/>
      {isPassword && (
        <TouchableOpacity style={Styles.rightIcon} onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={Colors.darkLight} />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Login;
