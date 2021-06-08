import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import Share from 'react-native-share';
import ButtonWithLogo from '../components/Button/ButtonWithlogo';
import { COLORS } from '../theme/colors';

const NewsDetails = (item) => {
    const data = item.route.params.item

    const getExtention = filename => {
        return /[.]/.exec(filename) ?
            /[^.]+$/.exec(filename) : undefined;
    };

    async function SaveImage() {
        let date = new Date();
        let image_URL = 'https://springr.in/wp-content/uploads/2020/07/Springr-logo_2.png';
        let ext = getExtention(image_URL);
        ext = '.' + ext[0];
        const { config, fs } = RNFetchBlob;
        let PictureDir = fs.dirs.PictureDir;
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                path:
                    PictureDir +
                    '/image_' +
                    Math.floor(date.getTime() + date.getSeconds() / 2) +
                    ext,
                description: 'Image',
            },
        };
        config(options)
            .fetch('GET', image_URL)
            .then(res => {
                alert('Image Saved..!')
            });
    }

    function ShareData() {
        RNFetchBlob.fetch('GET', `https://springr.in/wp-content/uploads/2020/07/Springr-logo_2.png`)
            .then(resp => {
                console.log('response : ', resp);
                console.log(resp.data);
                let base64image = resp.data;
                let shareOptions = {
                    title: 'Title',
                    url: 'data:image/png;base64,' + base64image,
                    message: `${data.description}`,
                    subject: 'Subject'
                };

                Share.open(shareOptions)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(err => {
                        err && console.log(err);
                    });
            })
            .catch(err => errorHandler(err));
    }

    return (
        <View style={styles.mainContainer}>

            <View
                style={styles.imageView}>
                <Image
                    source=
                    {{ uri: 'https://springr.in/wp-content/uploads/2020/07/Springr-logo_2.png' }}
                    style={styles.image} />
            </View>

            <ButtonWithLogo
                onButtonPress={SaveImage}
                logo={'save'}
                buttonTitle={'Save Image'} />

            <View>
                <Text style={{ padding: 10 }}>{data.description}</Text>
            </View>

            <ButtonWithLogo
                onButtonPress={ShareData}
                logo={'Share'}
                buttonTitle={'Share'} />
        </View>
    )
}

export default NewsDetails

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    imageView: {
        backgroundColor: COLORS.white,
        width: width - 15,
        margin: 10,
        alignSelf: 'center',
        borderRadius: 15
    },
    image: {
        resizeMode: 'center',
        width: '100%',
        height: 150
    },

});


