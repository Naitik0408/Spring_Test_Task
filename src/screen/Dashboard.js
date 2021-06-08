import React, { useEffect } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CONSTANTS } from '../constants/AppConst';

const Dashboard = ({ navigation }) => {

    const dispatch = useDispatch();
    const counter = useSelector(state => state.NewsFeedReducer)

    useEffect(() => {
        dispatch({ type: CONSTANTS.NEWS_FEED_DETAILS_REQUEST })
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: "#f7f7f7" }}>

            {counter.loader == true ?
                <View style={styles.spinner}>
                    <ActivityIndicator
                        color='#163206'
                        size={18} />
                </View>
                : null}

            <ScrollView>
                {counter.userData.map((item) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('NewsDetails', { item: item })
                            }}
                            style={styles.cardView}>
                            <Image
                                source={{
                                    uri: 'https://springr.in/wp-content/uploads/2020/07/Springr-logo_2.png'
                                }}
                                style={styles.imageView}
                            />
                            <Text
                                style={styles.description}>
                                {item.description}
                            </Text>
                        </TouchableOpacity>)
                })}
            </ScrollView>
        </View>
    )
}

export default Dashboard


const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    spinner: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        justifyContent: 'center',
        zIndex: 99999,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffffab',
    },
    cardView: {
        backgroundColor: 'white',
        width: width - 15,
        margin: 10,
        alignSelf: 'center',
        borderRadius: 15
    },
    imageView: {
        resizeMode: 'center',
        width: '100%',
        height: 150
    },
    description: {
        padding: 10
    }
});