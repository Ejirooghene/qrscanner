import { useState } from 'react';
import { ScrollView, View, Text, Pressable, Modal, TouchableOpacity, Dimensions } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from 'expo-checkbox';
import { RootState } from '../../../../redux/types';
import { setBeep, setVibration, setCopy } from '../../../../redux/reducers/settings';
import { changeColorScheme } from '../../../../redux/reducers/theme';
import { colorSchemes, controls } from './data';
import Popup from '../../../../components/popup';




const Settings = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const dispatch = useDispatch();
    const { beep } = useSelector((store: RootState) => store.settings)
    const { colorScheme } = useSelector((store: RootState) => store.theme)
    // const { width } = Dimensions.get('window');
    // console.log(width / 7) 

    const activateControl = (control: string) => {
        switch(control){
            case 'beep':
            dispatch(setBeep());
        }
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.colorSchemeText}>Color scheme</Text>
            <View style={styles.paletteWrapper}>
                {
                    colorSchemes.map(color => {
                        return(
                            <Pressable style={[styles.palette, { backgroundColor: color}]} onPress={() => dispatch(changeColorScheme(color))}>
                                {
                                    color === colorScheme && <Ionicons name='checkmark-sharp' color='white' size={ms(20)} />
                                } 
                            </Pressable>
                        )
                    })
                }
            </View>
            <TouchableOpacity style={{marginTop: ms(30)}} onPress={() => setVisible(!visible)}>
                <Text style={styles.title}>Theme</Text>
                <Text style={styles.subTitle}>Light</Text>
            </TouchableOpacity>
            {
                controls.map(control => {
                    return (
                        <TouchableOpacity style={styles.controls} key={control.title} onPress={() => activateControl(control.title)}>
                            <View>
                                <Text style={styles.title}>{control.title}</Text>
                                {
                                    control.subtitle != null &&                          <Text style={styles.subTitle}>{control.subtitle}</Text>
                                }
                            </View>
                            {
                                control.hasCheckbox != false &&  <Checkbox 
                                style={styles.checkbox}
                                value={beep}
                                // onValueChange={setChecked}
                                color={colorScheme}
                                /> 
                            }
                               
                        </TouchableOpacity> 
                    )
                })
            }
        </ScrollView> 
    )
}

export default Settings;

const styles = ScaledSheet.create({
    container: {
        paddingHorizontal: ms(15)
    },
    colorSchemeText: {
        marginVertical: ms(12),
    },
    paletteWrapper: {
        // height: ms(86),
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: '',
        flexWrap: 'wrap', 
    },
    palette: {
        width: ms(43),
        height: ms(43), 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: ms(10),
        marginRight: ms(5),
        // marginVertical: ms(5)
    },
    title: {
        fontSize: ms(15),
        fontWeight: '500'
    },
    subTitle: {
        fontSize: ms(10),
        fontWeight: '100'
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: ms(15)
    },
    checkbox: {
        width: ms(15),
        height: ms(15),
    }
})