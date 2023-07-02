import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Text,
  Image,
  Button,
} from "react-native";
import { Constants } from "expo-constants";
import { styled } from "styled-components";

const { width, height } = Dimensions.get("screen");

// const StatusBarHeight = Constants.StatusBarHeight;

// will have to change to styled components later
export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  paragraph: {
    width: "90%",
    alignSelf: "center",
    textAlign: "justify",
    color: "#333333",
    marginVertical: 10,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginHorizontal: 5,
  },
  coverImage: {
    width: width,
    height: "100%",
  },
  cover: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  main: {
    flex: 3,
    backgroundColor: "#f1f1f1",
  },
  popular: {
    flex: 1,
    justifyContent: "center",
    marginTop: -80,
  },
  PopularPost: {
    backgroundColor: "white",
    width: width / 3,
    height: width / 4,
    marginHorizontal: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.9,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    borderRadius: 7,
  },
  post: {
    backgroundColor: "white",
    width: width / 1.05,
    alignSelf: "center",
    minHeight: height / 4,
    shadowColor: "#ccc",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.9,
    marginVertical: 5,
    padding: 10,
  },
  btn: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 8,
    width: width / 4.2,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomTabBtn: {
    backgroundColor: "lightgray",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  bottomTab: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 30,
    backgroundColor: "white",
  },
  input: {
    width: width / 1.1,
    backgroundColor: "#f0sf",
    padding: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    borderRadius: 20,
  },
  ModalContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  modalButton: {
    width: 60,
    height: 60,
    // backgroundColor: `${colors.tertiary}`,
    borderRadius: 50,
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: 15,
  },
  pageImage: {
    width: 250,
    height: 200,
  },
  pageTitle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: 600,
    color: "#6d28d9",
    padding: 10,
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 20,
    letterSpacing: 1,
    fontWeight: 600,
    color: "#1f2937",
  },
  styledFormArea: {
    width: "90%",
  },
  styledTextInput: {
    backgroundColor: "#e5e7e8",
    padding: 15,
    paddingLeft: 55,
    paddingRight: 55,
    borderRadius: 5,
    fontSize: 16,
    height: 60,
    marginVertical: 3,
    marginBottom: 10,
    color: "#1f2937",
  },
  styledInputLabel: {
    color: "#1f2937",
    fontSize: 13,
    textAlign: "left",
  },
  leftIcon: {
    left: 15,
    top: 38,
    position: "absolute",
    zIndex: 1,
  },
  // rightIcon is touchable opacity
  rightIcon: {
    right: 15,
    top: 38,
    position: "absolute",
    zIndex: 1,
  },
  // touchable opacity
  styledButton: {
    padding: 15,
    backgroundColor: "#6d28d9",
    justifyContent: "center",
    borderRadius: 5,
    marginVertical: 5,
    height: 60,
    alignItems: "center",
  },
  //text
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: 500,
  },
  //text
  messageBox: {
    textAlign: "center",
    fontSize: 13,
  },
  //view
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#9ca3af",
    marginVertical: 10,
  },
});

export const Colors = {
  primary: "#332424",
  secondary: "#4d3636",
  tertiary: "#e6e6e6",
  first: "#ff00ff",
  second: "#e5e7e8",
  third: "#1f2937",
  darkLight: "#9ca3af",
  brand: "#6d28d9",
};

const { primary, secondary, tertiary, first, second, third, darkLight, brand } =
  Colors;

// Styled Components

export const WelcomeContainer = styled.View`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
  flex: 1;
  width: 100%;
  align-items: 'center';
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${second};
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
  height: 50%;
  min-width: 100%;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;

  ${(props) =>
    props.welcome &&
    `
    font-size: 35px;
  `}
`;

export const SubTitle = styled.Text`
  fontSize: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: 600;
  color: ${third};

  ${(props) =>
    props.welcome &&
    `
    margin-bottom: 5px;
    font-weight: normal;
  `}
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: '#6d28d9';
  justify-content: 'center';
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
  align-items: 'center';
`;
//text
export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  align-items: center;
`;

//text
export const MessageBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;
//view
export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: '#9ca3af';
  margin-vertical: 10px;
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`