import React, { Children, FC } from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/types";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
  Feather,
  EvilIcons,
} from "@expo/vector-icons";
import { ScaledSheet, ms } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/core";
import { CreateQrParamList } from "../../../../../navigations/CreateQrStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const { width } = Dimensions.get("window");

const CreateQrData: FC = () => {
  const {
    theme: { bg, text },
  } = useSelector((store: RootState) => store.theme);
  const navigation =
    useNavigation<NativeStackNavigationProp<CreateQrParamList>>();

  const data = [
    {
      title: "Content from clipboard",
      icon: (
        <MaterialCommunityIcons
          name="clipboard-outline"
          color={text.primary}
          size={ms(20)}
        />
      ),
      screen: "Clipboard",
    },
    {
      title: "URL",
      icon: <FontAwesome name="chain" color={text.primary} size={ms(20)} />,
      screen: "",
    },
    {
      title: "Text",
      icon: (
        <MaterialCommunityIcons
          name="format-text"
          color={text.primary}
          size={ms(20)}
        />
      ),
      screen: "",
    },
    {
      title: "Contact",
      icon: (
        <MaterialCommunityIcons
          name="account-outline"
          color={text.primary}
          size={ms(20)}
        />
      ),
      screen: "",
    },
    {
      title: "Email",
      icon: (
        <MaterialCommunityIcons
          name="email-outline"
          color={text.primary}
          size={ms(20)}
        />
      ),
      screen: "",
    },
    {
      title: "SMS",
      icon: (
        <MaterialCommunityIcons
          name="message-processing-outline"
          color={text.primary}
          size={ms(20)}
        />
      ),
      screen: "",
    },
    {
      title: "Geo",
      icon: (
        <Ionicons name="location-outline" color={text.primary} size={ms(20)} />
      ),
      screen: "",
    },
    {
      title: "Phone",
      icon: <Feather name="phone" color={text.primary} size={ms(20)} />,
      screen: "",
    },
    {
      title: "Calendar",
      icon: <EvilIcons name="calendar" color={text.primary} size={ms(25)} />,
      screen: "",
    },
    {
      title: "Wifi",
      icon: (
        <MaterialCommunityIcons
          name="wifi"
          color={text.primary}
          size={ms(20)}
        />
      ),
      screen: "",
    },
    {
      title: "My QR",
      icon: (
        <MaterialCommunityIcons
          name="account-outline"
          color={text.primary}
          size={ms(20)}
        />
      ),
      screen: "",
    },
  ];

  const screenNavigationHandler = (screen: any) => {
    navigation.navigate(screen);
  };

  return (
    <View style={[styles.viewContainer, { backgroundColor: bg.secondary }]}>
      {Children.toArray(
        data.map(item => (
          <Pressable
            onPress={() => screenNavigationHandler(item.screen)}
            style={[styles.viewLayer, { backgroundColor: bg.primary }]}>
            <View>{item.icon}</View>
            <Text style={[styles.viewText, { color: text.primary }]}>
              {item.title}
            </Text>
          </Pressable>
        ))
      )}
    </View>
  );
};

export default CreateQrData;

const styles = ScaledSheet.create({
  viewContainer: {
    elevation: 2,
    width: width - 20,
    alignSelf: "center",
    borderRadius: ms(10),
    overflow: "hidden",
    marginVertical: ms(10),
  },
  viewLayer: {
    flexDirection: "row",
    alignItems: "center",
    width: width - 20,
    alignSelf: "center",
    marginBottom: ms(1),
    paddingVertical: ms(20),
    paddingHorizontal: ms(15),
  },
  viewText: {
    fontSize: ms(14),
    marginLeft: ms(17),
  },
});
