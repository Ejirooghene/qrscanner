import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { Scan, Favorites, History, MyQR, CreateQR, Settings } from "../screens";
import { RootState } from '../redux/types';
import { useSelector } from 'react-redux';


const Drawer = createDrawerNavigator();
const { Navigator, Screen } = Drawer;

interface Props { 
    title: string
    name: string
    size: number
    focused: boolean
    text: string
}

const DrawerItem: React.FC<Props> = ({ title, name, size, focused, text }) => {
    return(
        <View style={styles.drawer}>
            <Ionicons name={name} size={size} color={text} />
            <Text style={[styles.text, { color: text }]}>{title}</Text>
        </View>
    )
}

const MainDrawer: React.FC = () => {
    const { theme: { bg, text, highLight}, colorScheme } = useSelector((store: RootState) => store.theme )

    return (
        <>
            <StatusBar style='light' backgroundColor={colorScheme} />
            <Navigator
                screenOptions={{
                    headerTintColor: 'white',
                    headerTitleAlign: 'center',
                    drawerActiveTintColor: highLight,
                    drawerStyle: {
                        backgroundColor: bg.primary
                    }
                }}
            >
                <Screen 
                name='scan' 
                component={Scan} 
                options={{
                    headerTintColor: 'black',
                    headerTitle: '',
                    headerTransparent: true,
                    drawerLabel: () => null,
                    drawerIcon : ({ focused }) => <DrawerItem title='Scan' name='scan-outline' size={20} focused={focused} text={colorScheme} />
                }}
                />
                <Screen name='favorites' component={Favorites}
                options={{
                    drawerLabel: () => null,
                    drawerIcon : ({ focused }) => <DrawerItem title='Favorites' name='star-outline' size={20} focused={focused} text={colorScheme} />
                }}
                />
                <Screen name='history' component={History} 
                options={{
                    drawerLabel: () => null,
                    drawerIcon : ({ focused }) => <DrawerItem title='History' name='time-outline' size={20} focused={focused} text={colorScheme} />
                }}
                />
                <Screen name='myqr' component={MyQR} 
                options={{
                    drawerLabel: () => null,
                    drawerIcon : ({ focused }) => <DrawerItem title='My QR' name='person-circle-outline' size={20} focused={focused} text={colorScheme} />
                }}
                />
                <Screen name='createqr' component={CreateQR}
                 options={{
                    drawerLabel: () => null,
                    drawerIcon : ({ focused }) => <DrawerItem title='Create QR' name='pencil' size={20} focused={focused} text={colorScheme} />
                }}
                />
                <Screen name='settings' component={Settings} 
                    options={{
                        headerStyle: {
                            backgroundColor: colorScheme
                        },
                        drawerLabel: () => null,
                        drawerIcon : ({ focused }) => <DrawerItem title='Settings' name='settings-outline' size={20} focused={focused} text={colorScheme} />
                    }}
                /> 
            </Navigator>
        </>
    );
};

export default MainDrawer;

const styles = ScaledSheet.create({
    drawer: {
        flexDirection: 'row',
        alignItems: "center",
        // borderBottomColor: 'gray',
        // borderBottomWidth: 1
    },
    text: {
        marginLeft: ms(15),
        // fontFamily: 'Medium',
        fontSize: ms(12)
    }
})