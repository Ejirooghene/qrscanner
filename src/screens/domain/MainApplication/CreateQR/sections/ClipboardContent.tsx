import { Text, View } from "react-native";
import React, { FC } from "react";
import { ScaledSheet, ms } from "react-native-size-matters";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/types";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const ClipboardContent: FC = () => {
  const {
    theme: { bg, text },
  } = useSelector((store: RootState) => store.theme);

  return (
    <View style={[styles.container, { backgroundColor: bg.secondary }]}>
      <View style={styles.headerLayer}>
        <FontAwesome name="chain" size={ms(17)} color={text.primary} />
        <Text style={[styles.headerText, { color: text.primary }]}>URL</Text>
      </View>
      <View style={styles.inputLayer}>
        <TextInput style={[styles.input, { borderColor: text.secondary, color: text.secondary }]} />
      </View>
    </View>
  );
};

export default ClipboardContent;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  headerLayer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: ms(20),
    marginTop: ms(20),
  },
  headerText: {
    fontSize: ms(15),
    marginLeft: ms(20),
  },
  inputLayer: {},
  input: {
    borderWidth: 1,
    width: width - 40,
    alignSelf: "center",
    marginVertical: ms(20),
    borderRadius: ms(8),
    paddingVertical: ms(8),
    paddingHorizontal: ms(10),
  },
});
