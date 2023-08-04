import { View, Text, TouchableOpacity, Button } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../../../redux/reducers/scan';


const Header: React.FC = () => {
    const { primary, secondary, isDark } = useSelector((store) => store.scan);

    return (
      <View style={{ width: '50%', flex: 1, flexDirection: "row", justifyContent: 'space-evenly', alignItems: "center", backgroundColor: 'transparent', position: 'absolute' }}>
        <TouchableOpacity>
          <FontAwesome name="picture-o" size={20} color={isDark ? primary : secondary } />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="flash-off" size={20} color={isDark ? primary : secondary } />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="camera-reverse" size={24} color={isDark ? primary : secondary } />
        </TouchableOpacity>
      </View>
    );
};


const Scan = () => {
    const dispatch = useDispatch();
    const { primary, secondary, isDark } = useSelector((store) => store.scan);

    return (
        <View style={[styles.container, { backgroundColor: isDark ? secondary : primary }]}>
            <Header />
            <View style={{marginTop: 200}}>
                <Button title='ChangeTheme' onPress={() => dispatch(changeTheme())} />
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