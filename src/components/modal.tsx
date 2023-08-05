import React from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

interface IModal {
    
}

const Modal: React.FC = () => {
    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = ScaledSheet.create({
    container: {
        width: '100%',
        height: '100%', 
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
})