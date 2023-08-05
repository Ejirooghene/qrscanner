import React, { Children, FC } from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/types";
import { AntDesign } from "@expo/vector-icons";
import { ScaledSheet, ms } from "react-native-size-matters";

const { width } = Dimensions.get("window");

const OtherTypesData: FC = () => {
  const {
    theme: { bg, text },
  } = useSelector((store: RootState) => store.theme);

  let icon = <AntDesign name="barcode" color={text.primary} size={ms(20)} />;

  const data = [
    {
      title: "EAN_8", icon,
      screen: "",
    },
    {
      title: "EAN_13", icon,
      screen: "",
    },
    {
      title: "UPC_E", icon,
      screen: "",
    },
    {
      title: "UPC_A", icon,
      screen: "",
    },
    {
      title: "CODE_39", icon,
      screen: "",
    },
    {
      title: "CODE_93", icon,
      screen: "",
    },
    {
      title: "CODE_128", icon,
      screen: "",
    },
    {
      title: "ITF", icon,
      screen: "",
    },
    {
      title: "PDF_417", icon,
      screen: "",
    },
    {
      title: "CODABAR", icon,
      screen: "",
    },
    {
      title: "DATA_MATRIX", icon,
      screen: "",
    },
    {
      title: "AZTEC", icon,
      screen: "",
    },
  ];

  return (
    <Pressable style={[styles.viewContainer, { backgroundColor: bg.secondary }]}>
      {Children.toArray(
          data.map(item => (
            <View style={[styles.viewLayer, { backgroundColor: bg.primary }]}>
              <View>{item.icon}</View>
              <Text style={[styles.viewText, { color: text.primary}]}>{item.title}</Text>
            </View>
          ))
        )}
    </Pressable>
  );
};

export default OtherTypesData;

const styles = ScaledSheet.create({
  viewContainer: {
    elevation: 2,
    width: width - 20,
    alignSelf: 'center',
    borderRadius: ms(10),
    overflow: 'hidden',
    marginVertical: ms(10),
  },
  viewLayer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 20,
    alignSelf: 'center',
    marginBottom: ms(1),
    paddingVertical: ms(20),
    paddingHorizontal: ms(15),
  },
  viewText: {
    fontSize: ms(14),
    marginLeft: ms(17),
  },
});
