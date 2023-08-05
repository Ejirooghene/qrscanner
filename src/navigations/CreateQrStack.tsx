import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateQR } from "../screens";

const CreateQrStackNavigator = createNativeStackNavigator();

// types
export type CreateQrParamList = {
  CreateQr: undefined;
};
// enum
enum CreateQrEnum {
  CreateQr = "CreateQr",
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
    </Navigator>
  );
};


export default CreateQrStack;