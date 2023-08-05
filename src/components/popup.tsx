import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';

interface Props {

}

const Popup: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <View style={styles.container}>

        </View>
    )
}

export default Popup;

const styles = ScaledSheet.create({
    container: {
        height: ms(200),
        backgroundColor: 'red'
    }
})