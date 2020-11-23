import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Select Photo',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

const FeedsListHeaderComponents = props => {

    const [profilePic, setProfilePic] = useState({ uri: 'ic_user' })

    return <View
        style={styles.mainStyle}>
        <View style={styles.subStyle}>
            <Text>
                TODAY
            </Text>
            <View style={styles.mainProfileStyle}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 30
                }}>
                    My Feed
                </Text>
                <TouchableOpacity
                    style={styles.profileStyle}
                    onPress={() => {
                        //I haven't use bridging for showing Image picker but I used one module for this. 
                        //Because of lack of time.
                        ImagePicker.showImagePicker(options, (response) => {
                            console.log('Response = ', response);

                            if (response.didCancel) {
                                console.log('User cancelled image picker');
                            } else if (response.error) {
                                console.log('ImagePicker Error: ', response.error);
                            } else if (response.customButton) {
                                console.log('User tapped custom button: ', response.customButton);
                            } else {
                                const source = { uri: response.uri };
                                setProfilePic(source)
                            }
                        });
                    }}
                ><Image
                        style={styles.profileStyle}
                        source={profilePic}
                    /></TouchableOpacity>
            </View>
        </View>
        <View style={styles.seperatorStyle}>

        </View>
    </View>

}

const styles = StyleSheet.create({
    mainStyle: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#00000010'
    },
    subStyle: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 25,
        marginBottom: 15,
    },
    mainProfileStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    profileStyle: {
        width: 45,
        height: 45,
        borderRadius: 45 / 2,
    },
    seperatorStyle: {
        width: '100%',
        height: 1,
        backgroundColor: '#00000020'
    }
})

export default FeedsListHeaderComponents;
