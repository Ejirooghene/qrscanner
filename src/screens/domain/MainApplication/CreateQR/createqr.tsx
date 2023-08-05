import { FC } from "react";
import { View, Text, ScrollView } from "react-native";
import { ScaledSheet, ms } from "react-native-size-matters";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";
import { CreateQrData, OtherTypesData } from "./sections";

const CreateQR: FC = () => {
  const {
    theme: { bg, text },
  } = useSelector((store: RootState) => store.theme);

  return (
    <View style={[styles.container, { backgroundColor: bg.secondary }]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={[styles.topText, { color: text.secondary}]}>Create QR</Text>
        <CreateQrData />
        <Text style={[styles.topText, { color: text.secondary}]}>Other types</Text>
        <OtherTypesData />
      </ScrollView>
    </View>
  );
};

export default CreateQR;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  topText: {
    marginVertical: ms(10),
    fontSize: ms(13),
    marginLeft: ms(15),
  },
});
