import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from 'expo-status-bar';
import { Scan } from "../screens";


const Drawer = createDrawerNavigator();
const { Navigator, Screen } = Drawer;

const MainDrawer: React.FC = () => {
    return (
        <>
            <StatusBar style='light' backgroundColor='#000' />
            <Navigator>
                <Screen 
                name='scan' 
                component={Scan} 
                options={{
                    headerStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0, 
                    }, 
                    headerTitle: ''
                }}
                />
                {/* <Screen name='' component={} /> */}
            </Navigator>
        </>
    );
};

export default MainDrawer;