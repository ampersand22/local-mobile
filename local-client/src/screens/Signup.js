import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Styles, Colors } from "../../styles/appStyles";
import sunflowerImg from "./../../assets/images/sunflower.jpeg";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

//import formik
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

//icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

//colors
// const {brand, darkLight} = Colors;

const Signup = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [showDate, setShowDate] = useState(false);

  const [dateOfBirth, setDateOfBirth] = useState();
  const [formReady, setFormReady] = useState(false);

  // calendar
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    setDateOfBirth(currentDate)

    console.log(dateOfBirth)

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let fTime =
      "Hours:" + tempDate.getHours() + " | Minutes: " + tempDate.getMinutes();
    setText(fDate + "\n" + fTime);
    console.log(fDate + "(" + fTime + ")");
  };

  // const onChangeOne = (e, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShowDate(false);
  //   setDate(currentDate);
  //   setDateOfBirth(currentDate);
  // };

  const showDatePicker = () => {
    setShowDate(true);
  };

  const toggleDatePicker = () => {
    setShowDate(!showDate);
  };

    //// NEED TO FIX ANDROID CALENDAR ////////

  const onChangeTwo = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setShowDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setDateOfBirth(formatDate(currentDate));
      }
    } else {
      toggleDatePicker();
    }
  };

  // const confirmIOSDate = () => {
  //   setdateOfBirth(formatDate(date));
  //   toggleDatePicker();
  // };

  // const formatDate = (rawDate) => {
  //   let date = new Date(rawDate);
  //   let year = date.getFullYear();
  //   let month = date. getMonth() + 1;
  //   let day = date.getDate();

  //   return `${day}-${month}-${year}`;
  // }

  return (
    <View style={Styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={Styles.innerContainer}>
        <Text style={Styles.pageTitle}>localRing</Text>
        <Text style={Styles.subTitle}>Account Signup</Text>

        {/* android specific code */}
        {showDate && (
          <DateTimePicker
            // testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="spinner"
            onChange={onChangeTwo}
          />
        )}

        {/* iOS specific code */}
        {/* {showDate && (
          <DateTimePicker
            value={date}
            placeholder="Jan 1 2000"
            mode="date"
            is24Hour={true}
            display="spinner"
            onChange={onChangeTwo}
            style={styles.datePicker}
          />
        )} */}

        {/* dateTimePicker from ToThePoint */}
        {showDate && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChangeOne}
          />
        )}

        <Formik
          initialValues={{
            fullName: "",
            email: "",
            dateOfBirth: "",
            wrestlerName: "",
            location: "",
            password: "",
            confirmPassword: "",
            mobile: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
          }) => (
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

              <MyTextInput
                label="Date of Birth"
                icon="calendar"
                placeholder="select date"
                placeholderTextColor="gray"
                onBlur={handleBlur("dateOfBirth")}
                value={dateOfBirth ? dateOfBirth.toDateString() : ""}
                onChangeText={handleChange("dateOfBirth")}
                isDate={true}
                editable={false}
                onPressIn={() => showMode('date')}                
                format="MM-DD-YYYY"
                showDatePicker={showDatePicker}
                // toggleDatePicker={toggleDatePicker}
                // onChangeText={handleChange("dateOfBirth")}
              />

              {/* IOS code */}
              {show && (
                <View style={styles.extraView}>
                  <Text>Select Date:</Text>
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChangeDate}
                  />
                  <Text style={{ 
                    margin: 20,
                    borderWidth: 1, 
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                  }} onPress={() => setShow(false)}>
                    Ok
                  </Text>
                </View>
              )}

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
      </ScrollView>
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
  toggleDatePicker,
  showDatePicker,
  showMode,
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
  datePicker: {
    height: 120,
    marginTop: -10,
  },
  pickerButton: {
    paddingHorizontal: 20,
  },
});

export default Signup;
