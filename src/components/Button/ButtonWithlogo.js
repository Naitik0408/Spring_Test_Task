import React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

const ButtonWithLogo = (
    { onButtonPress,
        buttonTitle,
        logo
    }
) => {
    return (
        <TouchableOpacity
            onPress={onButtonPress}
            style={styles.buttonView}>
            <Image
                source={logo == 'Share' ? require('../../assets/share.png') : require('../../assets/download.png')}
                style={styles.logo}
            />
            <Text style={styles.buttonTitle}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    buttonView: {
        flexDirection: 'row',
        backgroundColor: COLORS.pink,
        padding: 10,
        alignItems: 'center',
        alignSelf: "center",
        paddingHorizontal: 20,
        borderRadius: 10
    },
    logo: {
        width: 25,
        height: 25
    },
    buttonTitle: {
        fontSize: 16,
        marginLeft: 5
    }
});


export default ButtonWithLogo;