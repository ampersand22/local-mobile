import { View, TouchableOpacity, StyleSheet } from "react-native";
import {
  Styles,
  ButtonText,
  WelcomeContainer,
  WelcomeImage,
  Avatar,
  InnerContainer,
  PageTitle,
  SubTitle,
} from "../../styles/appStyles";
import samplePic1 from "./../../assets/images/jdvip1.jpg";
import samplePic2 from "./../../assets/images/jdentrance2.jpeg";
import { StatusBar } from "expo-status-bar";

const Welcome = () => {
  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        {/* <WelcomeContainer> */}
        <WelcomeImage source={samplePic1} resizeMode="cover" />
        <PageTitle welcome={true}>Welcome Back...</PageTitle>
        <SubTitle welcome={true}>JD Griffey</SubTitle>
        <SubTitle welcome={true}>example@gmail.com</SubTitle>
        <View style={Styles.styledFormArea}>
          <Avatar source={samplePic2} resizeMode="cover" />
          <View style={Styles.line}></View>
          <TouchableOpacity style={Styles.styledButton} onPress={() => {}}>
            <ButtonText>Logout</ButtonText>
          </TouchableOpacity>
        </View>
        {/* </WelcomeContainer> */}
      </InnerContainer>
    </>
  );
};

export default Welcome;
