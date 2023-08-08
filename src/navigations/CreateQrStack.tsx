import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateQR } from "../screens";
import { ClipboardContent } from "../screens/domain/MainApplication/CreateQR/sections";

const CreateQrStackNavigator = createNativeStackNavigator();

// types
export type CreateQrParamList = {
  CreateQr: undefined;
  Clipboard: undefined;
};
// enum
enum CreateQrEnum {
  CreateQr = "CreateQr",
  Clipboard = "Clipboard",
}

const CreateQrStack = () => {
  const Navigator = CreateQrStackNavigator.Navigator;
  const Screen = CreateQrStackNavigator.Screen;

  return (
    <Navigator
      id={"CreateQr"}
      initialRouteName={CreateQrEnum.CreateQr}
      screenOptions={{
        headerShown: false,
        animation: "none",
      }}>
      <Screen name={CreateQrEnum.CreateQr} component={CreateQR} />
      <Screen name={CreateQrEnum.Clipboard} component={ClipboardContent} />
    </Navigator>
  );
};


export default CreateQrStack;