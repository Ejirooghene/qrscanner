import { View, Text, TouchableOpacity, Button } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../../redux/reducers/theme';
import { RootState } from '../../../../redux/types';


const Header: React.FC = () => {
    const { theme: {bg, text} } = useSelector((store: RootState) => store.theme);

    return (
      <View style={{ width: '50%', flex: 1, flexDirection: "row", justifyContent: 'space-evenly', alignItems: "center", backgroundColor: 'transparent', position: 'absolute' }}>
        <TouchableOpacity>
          <FontAwesome name="picture-o" size={20} color={text.primary} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="flash-off" size={20} color={text.primary} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="camera-reverse" size={24} color={text.primary} />
        </TouchableOpacity>
      </View>
    );
};


const Scan = () => {
    const dispatch = useDispatch();
    const { theme: { bg, text } } = useSelector((store: RootState ) => store.theme);

    return (
        <View style={[styles.container, { backgroundColor: bg.primary }]}>
            <Header /> 
            <View style={{marginTop: 200}}>
                <Button title='Light'  onPress={() => dispatch(toggleTheme('Light'))} /> 
                <Button title='Dark'  onPress={() => dispatch(toggleTheme('Dark'))} /> 
            </View>
        </View>
    )
}

export default Scan

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    }
})