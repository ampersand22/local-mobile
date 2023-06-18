import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import { Styles, Colors } from "../../styles/appStyles";
import sunflowerImg from "./../../assets/images/sunflower.jpeg";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

//import formik
import { Formik } from "formik";

//icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

//colors
// const {brand, darkLight} = Colors;

const Signup = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [showDate, setShowDate] = useState(false);
  const [date, setDate] = useState(new Date());
  // const [showPicker, setShowPicker] = useState(false);

  //
  const [dob, setDob] = useState();

  const onChangeOne = (e, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(false);
    setDate(currentDate);
    setDob(currentDate);
  };

  // android
  const showDatePicker = () => {
    setShowDate(!showDate);
  };

  const onChangeTwo = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setShowDate(currentDate);

      if (Platform.OS === 'android') {
        showDatePicker();
      }
    } else {
      showDatePicker();
    }
  };

  return (
    <View style={Styles.container}>
      <StatusBar style="dark" />
      <View style={Styles.innerContainer}>
        <Text style={Styles.pageTitle}>localRing</Text>
        <Text style={Styles.subTitle}>Account Signup</Text>

        {/* android specific code */}
        {/* {showDate && (
          <DateTimePicker
            // testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="spinner"
            onChange={onChangeTwo}
          />
        )} */}

        <Formik
          initialValues={{
            fullName: "",
            email: "",
            dateOfBirth: "",
            wrestlerName: "",
            location: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={Styles.styledFormArea}>
              <MyTextInput
                label="Full Name"
                icon="person"
                placeholder=" ex. Kia Stevens..."
                placeholderTextColor="gray"
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
              />
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

              <Pressable
                onPress={showDatePicker}
              >
                <MyTextInput
                  label="Date of Birth"
                  icon="calendar"
                  placeholder="date of birth..."
                  placeholderTextColor="gray"
                  // onChangeText={handleChange("dateOfBirth")}
                  onBlur={handleBlur("dateOfBirth")}
                  // value={dob ? dob.toDateString() : ""}
                  value={dob}
                  onChangeText={setDob}
                  isDate={true}
                  editable={false}
                  // showDatePicker={showDatePicker}
                />
              </Pressable>

              <MyTextInput
                label="Wrestler Name"
                icon="person"
                placeholder="Awesome Kong..."
                placeholderTextColor="gray"
                onChangeText={handleChange("wrestlerName")}
                onBlur={handleBlur("wrestlerName")}
                value={values.wrestlerName}
              />
              <MyTextInput
                label="Location"
                icon="globe"
                placeholder="Chicago, IL"
                placeholderTextColor="gray"
                onChangeText={handleChange("location")}
                onBlur={handleBlur("location")}
                value={values.location}
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
              <MyTextInput
                label="Confirm Password"
                icon="lock"
                placeholder=".........."
                placeholderTextColor={Colors.darklight}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
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

              <View style={styles.extraView}>
                <Text style={styles.extraText}>Already have an account?</Text>
                <TouchableOpacity style={styles.textLink}>
                  <Text style={styles.textLinkContent}>Login</Text>
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
  isDate,
  showDatePicker,
  ...props
}) => {
  return (
    <View>
      <View style={Styles.leftIcon}>
        <Octicons name={icon} size={30} color={Colors.brand} />
      </View>
      <Text style={Styles.styledInputLabel}>{label}</Text>

      {!isDate && <TextInput style={Styles.styledTextInput} {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <TextInput style={Styles.styledTextInput} {...props} />
        </TouchableOpacity>
      )}

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

export default Signup;
